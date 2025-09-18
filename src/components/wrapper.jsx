"use client"
import { motion } from "framer-motion"

const Wrapper = ({
    children,
    className = "text-center",
    glass = "bg-white/5 backdrop-blur-[6px] border border-neutral-300/15 rounded-3xl px-2 py-2 text-white flex flex-col items-center text-center satruation-150 backdrop-brightness-150",
    glassActive = true
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className={`${glassActive ? glass : ""} ${className}`}
        >
            {children}
        </motion.div>
    )
}

export default Wrapper