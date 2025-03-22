'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
  Html,
} from '@react-three/drei'

// Simple loader component using Html from drei
const CanvasLoader = () => (
  <Html center>
    <div className="flex justify-center items-center">
      <div className="w-5 h-5 rounded-full bg-white animate-pulse" />
    </div>
  </Html>
)

const Ball = ({ imgUrl }: { imgUrl: string }) => {
  const [decal] = useTexture([imgUrl])

  return (
    <Float speed={1.5} rotationIntensity={1.2} floatIntensity={1.8}>
      <ambientLight intensity={0.15} />
      <spotLight 
        position={[10, 10, 10]} 
        angle={0.15} 
        penumbra={1} 
        intensity={0.5} 
        castShadow 
      />
      <pointLight position={[-10, -10, -10]} intensity={0.2} color="#8b5cf6" />
      <mesh castShadow receiveShadow scale={2.5}>
        <dodecahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#2d1b69"
          metalness={0.7}
          roughness={0.2}
          emissive="#3b0764"
          emissiveIntensity={0.2}
          polygonOffset
          polygonOffsetFactor={-5}
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1.2}
          map={decal}
        />
      </mesh>
    </Float>
  )
}

export const TechBall = ({ icon }: { icon: string }) => {
  return (
    <Canvas 
      dpr={[1, 2]} 
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [0, 0, 5], fov: 45 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
