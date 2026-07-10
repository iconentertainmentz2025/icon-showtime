import { useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const ORANGE = '#FF8C42'
const GOLD = '#D4AF37'
const VIOLET = '#7c3aed'

// Slowly drifting starfield. Points are cheap enough to run a few thousand.
const ParticleField = ({ count }) => {
  const ref = useRef()

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      // Distribute in a spherical shell so the camera sits inside the field.
      const r = 4 + Math.random() * 7
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count])

  useFrame((state, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.02
    ref.current.rotation.x += delta * 0.005
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color={ORANGE}
        transparent
        opacity={0.65}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

// Wireframe solids that bob and tumble behind the poster.
const FloatingSolid = ({ position, color, speed, scale, children }) => {
  const ref = useRef()

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    ref.current.rotation.x = t * 0.12 * speed
    ref.current.rotation.y = t * 0.18 * speed
    ref.current.position.y = position[1] + Math.sin(t * speed * 0.6) * 0.35
  })

  return (
    <mesh ref={ref} position={position} scale={scale}>
      {children}
      <meshBasicMaterial color={color} wireframe transparent opacity={0.18} />
    </mesh>
  )
}

// Nudges the whole scene toward the pointer for a parallax read. The canvas is
// pointer-events:none so the buttons stay clickable, which means r3f's own
// pointer state never updates — track the window instead.
const PointerParallax = ({ children }) => {
  const ref = useRef()
  const pointer = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (event) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1
      pointer.current.y = (event.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  useFrame((state, delta) => {
    if (!ref.current) return
    const { x, y } = pointer.current
    ref.current.rotation.y += (x * 0.18 - ref.current.rotation.y) * delta * 2
    ref.current.rotation.x += (-y * 0.12 - ref.current.rotation.x) * delta * 2
  })

  return <group ref={ref}>{children}</group>
}

const EventBackdrop3D = ({ particleCount = 1400 }) => (
  <Canvas
    camera={{ position: [0, 0, 6], fov: 60 }}
    dpr={[1, 1.5]}
    gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
    style={{ background: 'transparent' }}
  >
    <ambientLight intensity={0.4} />
    <pointLight position={[6, 6, 6]} intensity={1.2} color={ORANGE} />
    <pointLight position={[-6, -4, 2]} intensity={0.6} color={VIOLET} />

    <PointerParallax>
      <ParticleField count={particleCount} />

      <FloatingSolid position={[-3.4, 1.4, -2]} color={ORANGE} speed={0.9} scale={1}>
        <torusGeometry args={[0.9, 0.28, 12, 48]} />
      </FloatingSolid>

      <FloatingSolid position={[3.6, -1.2, -2.5]} color={GOLD} speed={0.6} scale={1}>
        <icosahedronGeometry args={[1, 0]} />
      </FloatingSolid>

      <FloatingSolid position={[2.8, 2.2, -3.5]} color={VIOLET} speed={1.2} scale={0.8}>
        <octahedronGeometry args={[1, 0]} />
      </FloatingSolid>
    </PointerParallax>
  </Canvas>
)

export default EventBackdrop3D
