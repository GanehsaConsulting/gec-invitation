"use client"
import { motion } from "framer-motion"

const MainContent = ({ isFullscreen, onOpenClick }) => {
    const contentVariants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        hidden: {
            opacity: 0,
            y: 50,
            transition: {
                duration: 0.3,
                ease: "easeIn"
            }
        }
    }

    return (
        <motion.div
            className="absolute bottom-0 p-6 flex flex-col items-center justify-center text-center space-y-2 "
            variants={contentVariants}
            animate={isFullscreen ? "hidden" : "visible"}
            initial="visible"
        >
            <motion.p
                className="text-xs px-3 py-2 font-bold bg-white/10 rounded-full md:text-base tracking-widest uppercase text-gray-200"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                You're Invited!
            </motion.p>

            <motion.h1
                className="text-4xl md:text-5xl font-bold tracking-wide text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
            >
                Grand Opening
            </motion.h1>

            <motion.h2
                className="text-xl md:text-3xl font-semibold text-yellow-400"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
            >
                GO Space by Ganesha Consulting
            </motion.h2>

            <motion.p
                className="text-sm opacity-70 font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 1.1, duration: 0.8, ease: "easeOut" }}
            >
                xx, xx xx 2025, xx WIB
                <br />
                xx xx
            </motion.p>

            <motion.button
                className="px-3 py-[2px] font-bold bg-white rounded-full text-black mt-2"
                onClick={onOpenClick}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.5, type: "spring", stiffness: 200 }}
                whileHover={{
                    scale: 1.1,
                    backgroundColor: "#f9fafb",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                }}
                whileTap={{ scale: 0.95 }}
            >
                Open
            </motion.button>
        </motion.div>
    )
}

export default MainContent