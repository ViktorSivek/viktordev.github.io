'use client'

import { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import {
  Environment,
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
  Html,
} from '@react-three/drei'
import * as THREE from 'three'

const CanvasLoader = () => (
  <Html center>
    <div className="flex justify-center items-center">
      <div className="w-5 h-5 rounded-full bg-white animate-pulse" />
    </div>
  </Html>
)

function SnapBackOrbitControls() {
  const controlsRef = useRef<any>(null)
  const [isDragging, setIsDragging] = useState(false)
  // Store the time when the user last ended dragging
  const [dragEndTime, setDragEndTime] = useState<number | null>(null)

  // Default camera orientation
  const defaultCamPos = new THREE.Vector3(0, 0, 4.5)
  const defaultTarget = new THREE.Vector3(0, 0, 0)

  useFrame(() => {
    if (!controlsRef.current) return

    // If user is dragging, do nothing
    if (isDragging) {
      return
    }

    // If user is NOT dragging, check how long since drag ended
    if (dragEndTime !== null) {
      const elapsed = performance.now() - dragEndTime
      // Wait 2 seconds, then snap back
      if (elapsed > 2000) {
        controlsRef.current.object.position.lerp(defaultCamPos, 0.02)
        controlsRef.current.target.lerp(defaultTarget, 0.02)
        controlsRef.current.update()
      }
    }
  })

  return (
    <OrbitControls
      ref={controlsRef}
      enablePan={false}
      minDistance={4.5}
      maxDistance={4.5}
      onStart={() => {
        setIsDragging(true)
        setDragEndTime(null)
      }}
      onEnd={() => {
        setIsDragging(false)
        setDragEndTime(performance.now())
      }}
    />
  )
}

function Ball({ imgUrl }: { imgUrl: string }) {
  const [decal] = useTexture([imgUrl])
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (!meshRef.current) return
    const t = state.clock.elapsedTime
    // Idle rotation
    meshRef.current.rotation.y = 0.35 * Math.sin(t)
    meshRef.current.rotation.x = 0.2 * Math.sin(t * 0.5)
  })

  return (
    <>
      {/* The environment adds reflections */}
      <Environment preset="studio" />

      <Float speed={1} rotationIntensity={0.3} floatIntensity={0.3}>
        <mesh ref={meshRef} castShadow receiveShadow scale={1.25}>
          <icosahedronGeometry args={[1, 4]} />
          <meshPhysicalMaterial
            color="#800080" // Purple base color
            metalness={1} // High metalness for strong reflection
            roughness={0.05} // Lower roughness => sharper reflections
            clearcoat={1} // Clearcoat for extra shine
            clearcoatRoughness={0}
            envMapIntensity={2} // Boost environment reflection
          />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1.2}
            map={decal}
          />
        </mesh>
      </Float>
    </>
  )
}

export const TechBall = ({ icon }: { icon: string }) => {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [0, 0, 4.5], fov: 40 }}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <SnapBackOrbitControls />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
