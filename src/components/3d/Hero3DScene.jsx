import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text, Sphere, Box, Torus } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'

// Floating 3D shapes for visual appeal
const FloatingShape = ({ position, color, speed = 1, children }) => {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01 * speed
      meshRef.current.rotation.y += 0.01 * speed
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      {children}
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.1}
        transparent
        opacity={0.8}
      />
    </mesh>
  )
}

// 3D Text Component
const FloatingText = ({ text, position, size = 1 }) => {
  const textRef = useRef()
  
  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <Text
      ref={textRef}
      position={position}
      fontSize={size}
      color="#e67e22"
      anchorX="center"
      anchorY="middle"
      font="/fonts/Inter-Bold.woff"
    >
      {text}
    </Text>
  )
}

// Main 3D Scene
const Hero3DScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 75 }}
      style={{ background: 'transparent' }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#e67e22" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00b894" />
      
      {/* Floating shapes */}
      <FloatingShape position={[-3, 2, 0]} color="#e67e22" speed={0.8}>
        <Sphere args={[0.5, 32, 32]} />
      </FloatingShape>
      
      <FloatingShape position={[3, -1, 0]} color="#00b894" speed={1.2}>
        <Box args={[0.8, 0.8, 0.8]} />
      </FloatingShape>
      
      <FloatingShape position={[0, 2.5, -2]} color="#d63031" speed={0.6}>
        <Torus args={[0.6, 0.2, 16, 100]} />
      </FloatingShape>
      
      <FloatingShape position={[-2, -2, 1]} color="#e17055" speed={1.5}>
        <Box args={[0.4, 1.2, 0.4]} />
      </FloatingShape>
      
      <FloatingShape position={[2.5, 1, 2]} color="#00b894" speed={0.9}>
        <Sphere args={[0.3, 16, 16]} />
      </FloatingShape>

      {/* 3D Text */}
      <FloatingText text="ICON" position={[0, 0.5, 0]} size={1.5} />
      <FloatingText text="Entertainment" position={[0, -0.5, 0]} size={0.8} />
      
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  )
}

export default Hero3DScene