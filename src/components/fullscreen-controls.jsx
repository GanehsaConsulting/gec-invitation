"use client"
import { motion, AnimatePresence } from "framer-motion"
import { Check } from "lucide-react"

const FullscreenControls = ({ isFullscreen, onClose, onConfirmAttendance }) => {
    return (
        <>
            {/* Bottom Button */}
            <AnimatePresence>
                {isFullscreen && (
                    <>
                        <div className="fixed top-0 left-0 right-0 z-60 linear-blur-to-b w-full h-[10vh]"></div>
                        <div className="fixed bottom-0 left-0 right-0 z-60 linear-blur-to-t2 w-full h-[13vh] bg-gradient-to-t from-black/40 to-transparent"></div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed bottom-0 left-0 right-0 z-60 m-4"
                        >
                            <motion.button
                                onClick={onConfirmAttendance}
                                className="w-full px-6 py-3 font-bold bg-emerald-500/80 backdrop-blur-[2px] shadow-2xl border border-green-400/20 backdrop-brightness-150 hover:bg-green-600 text-green-100 rounded-3xl transition-colors duration-200 flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <Check size={20} />
                                Konfirmasi Kehadiran
                            </motion.button>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Close Button */}
            <AnimatePresence>
                {isFullscreen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-6 right-6 z-70"
                    >
                        <motion.button
                            onClick={onClose}
                            className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors border border-white/20"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0, rotate: 180 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                                delay: 0.2
                            }}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default FullscreenControls