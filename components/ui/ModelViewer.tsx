'use client'
import React, { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

interface ModelViewerProps {
  modelPath: string
  className?: string
  autoRotate?: boolean
  backgroundColor?: string
}

const ModelViewer: React.FC<ModelViewerProps> = ({ 
  modelPath, 
  className,
  autoRotate = true,
  backgroundColor = '#ffffff'
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Store a reference to the current container element
    const currentContainer = containerRef.current

    let mixer: THREE.AnimationMixer | null = null
    const clock = new THREE.Clock()
    const animationActions: THREE.AnimationAction[] = []
    let activeAction: THREE.AnimationAction | null = null

    // Setup scene
    const scene = new THREE.Scene()
    // Make background transparent if backgroundColor is 'transparent'
    scene.background = backgroundColor === 'transparent' ? null : new THREE.Color(backgroundColor)

    // Setup camera
    const camera = new THREE.PerspectiveCamera(
      45,
      currentContainer.clientWidth / currentContainer.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 5

    // Setup renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: backgroundColor === 'transparent' // Enable alpha channel for transparency
    })
    renderer.setSize(
      currentContainer.clientWidth,
      currentContainer.clientHeight
    )
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    currentContainer.appendChild(renderer.domElement)

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(1, 1, 1)
    scene.add(directionalLight)

    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.screenSpacePanning = false
    controls.enableZoom = false // Disable zoom functionality
    controls.autoRotate = autoRotate // Use the autoRotate prop value
    controls.autoRotateSpeed = 1.0

    // Load the 3D model
    const loader = new GLTFLoader()
    loader.load(
      modelPath,
      (gltf) => {
        // Center the model
        const box = new THREE.Box3().setFromObject(gltf.scene)
        const center = box.getCenter(new THREE.Vector3())
        gltf.scene.position.x = -center.x
        gltf.scene.position.y = -center.y
        gltf.scene.position.z = -center.z

        // Scale the model to fit
        const size = box.getSize(new THREE.Vector3())
        const maxDim = Math.max(size.x, size.y, size.z)
        const scale = 4 / maxDim  // Increased scale factor from 3 to 4
        gltf.scene.scale.set(scale, scale, scale)

        // Setup animations
        if (gltf.animations && gltf.animations.length) {
          mixer = new THREE.AnimationMixer(gltf.scene)
          
          gltf.animations.forEach((clip) => {
            if (mixer) {  // Add null check here
              const action = mixer.clipAction(clip)
              animationActions.push(action)
            }
          })
          
          // Play the first animation by default
          if (animationActions.length > 0) {
            activeAction = animationActions[0]
            activeAction.play()
          }
        }

        scene.add(gltf.scene)
        setLoading(false)
      },
      (xhr) => {
        const percentComplete = (xhr.loaded / xhr.total) * 100
        setProgress(percentComplete)
        console.log(percentComplete + '% loaded')
      },
      (error) => {
        console.error('An error happened', error)
        setError('Failed to load 3D model')
        setLoading(false)
      }
    )

    // Animation loop
    let animationId: number;
    
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      
      // Update animations
      if (mixer) {
        const delta = clock.getDelta()
        mixer.update(delta)
      }
      
      controls.update()
      renderer.render(scene, camera)
    }
    
    animate() // Start the animation loop

    // Handle window resize
    const handleResize = () => {
      if (!currentContainer) return
      camera.aspect =
        currentContainer.clientWidth / currentContainer.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(
        currentContainer.clientWidth,
        currentContainer.clientHeight
      )
    }
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)
      if (currentContainer && currentContainer.contains(renderer.domElement)) {
        currentContainer.removeChild(renderer.domElement)
      }
      
      // Dispose resources
      renderer.dispose()
      if (mixer) {
        mixer.stopAllAction()
      }
    }
  }, [modelPath, autoRotate, backgroundColor])

  return (
    <div className={`relative w-full h-full ${className}`}>
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-transparent">
          <div className="w-full max-w-md bg-transparent rounded-full h-2.5 dark:bg-gray-800/30 overflow-hidden">
            <div 
              className="bg-purple h-2.5 rounded-full" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="mt-2 text-sm text-white dark:text-gray-300">Loading model... {Math.round(progress)}%</p>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-transparent">
          <p className="text-red-400">{error}</p>
        </div>
      )}
      <div
        ref={containerRef}
        className="w-full h-full overflow-hidden"
      />
    </div>
  )
}

export default ModelViewer
