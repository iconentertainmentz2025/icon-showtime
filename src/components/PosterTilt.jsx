import { useRef } from 'react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform
} from 'framer-motion'

const SPRING = { stiffness: 150, damping: 18, mass: 0.6 }

// Pointer-tracked 3D tilt with a specular sheen that follows the cursor.
const PosterTilt = ({ src, alt }) => {
  const prefersReducedMotion = useReducedMotion()
  const ref = useRef(null)

  // Normalised pointer position across the card, 0..1 on each axis.
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)

  const rotateX = useSpring(useTransform(py, [0, 1], [11, -11]), SPRING)
  const rotateY = useSpring(useTransform(px, [0, 1], [-14, 14]), SPRING)

  // Glow drifts against the tilt so the card reads as floating above it.
  const glowX = useSpring(useTransform(px, [0, 1], [26, -26]), SPRING)
  const glowY = useSpring(useTransform(py, [0, 1], [26, -26]), SPRING)

  const sheenX = useTransform(px, (v) => `${v * 100}%`)
  const sheenY = useTransform(py, (v) => `${v * 100}%`)
  const sheen = useMotionTemplate`radial-gradient(circle at ${sheenX} ${sheenY}, rgba(255,255,255,0.22), transparent 55%)`

  const handlePointerMove = (event) => {
    if (prefersReducedMotion || event.pointerType === 'touch') return
    const rect = ref.current.getBoundingClientRect()
    px.set((event.clientX - rect.left) / rect.width)
    py.set((event.clientY - rect.top) / rect.height)
  }

  const resetTilt = () => {
    px.set(0.5)
    py.set(0.5)
  }

  if (prefersReducedMotion) {
    return (
      <div className="relative mx-auto w-full max-w-md lg:max-w-none">
        <div className="absolute -inset-4 bg-gradient-to-br from-brand-orange/30 to-purple-600/20 rounded-3xl blur-2xl" />
        <img src={src} alt={alt} className="relative w-full rounded-2xl border border-white/10 shadow-2xl" />
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative mx-auto w-full max-w-md lg:max-w-none perspective-1200"
    >
      {/* Glow sits outside the tilting element so it can counter-move. */}
      <motion.div
        aria-hidden
        style={{ x: glowX, y: glowY }}
        className="absolute -inset-6 bg-gradient-to-br from-brand-orange/40 to-purple-600/25 rounded-[2rem] blur-3xl"
      />

      <motion.div
        ref={ref}
        onPointerMove={handlePointerMove}
        onPointerLeave={resetTilt}
        style={{ rotateX, rotateY }}
        whileHover={{ scale: 1.03 }}
        transition={{ type: 'spring', ...SPRING }}
        className="relative preserve-3d backface-hidden rounded-2xl"
      >
        <img
          src={src}
          alt={alt}
          className="relative w-full rounded-2xl border border-white/10 shadow-2xl"
        />

        {/* Specular highlight tracking the pointer. */}
        <motion.div
          aria-hidden
          style={{ background: sheen }}
          className="pointer-events-none absolute inset-0 rounded-2xl mix-blend-soft-light"
        />

        {/* Rim light, lifted off the artwork so the edge catches the tilt. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20"
          style={{ transform: 'translateZ(40px)' }}
        />
      </motion.div>
    </motion.div>
  )
}

export default PosterTilt
