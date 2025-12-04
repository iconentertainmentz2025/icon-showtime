import { motion } from 'framer-motion'
import Logo from './Logo'

const LogoLoader = () => {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-white"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                layoutId="shared-logo"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
            >
                <motion.div
                    animate={{
                        rotateY: [0, 360],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="w-32 h-32 md:w-48 md:h-48"
                >
                    <Logo variant="main" className="w-full h-full object-contain" />
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default LogoLoader
