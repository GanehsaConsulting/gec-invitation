"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Check } from "lucide-react"

const AttendanceModal = ({ showModal, onClose }) => {
    const [inputValue, setInputValue] = useState("")
    const [messageValue, setMessageValue] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)

    const modalVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            y: 50
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            y: 50,
            transition: {
                duration: 0.2
            }
        }
    }

    const handleCloseModal = () => {
        setInputValue("")
        setMessageValue("")
        setIsSubmitted(false)
        onClose()
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim()) {
            setIsSubmitted(true)
            console.log("Attendance confirmed for:", inputValue, "Message:", messageValue)

            // Auto close modal after 2 seconds
            setTimeout(() => {
                handleCloseModal()
            }, 2000)
        }
    }

    return (
        <AnimatePresence>
            {showModal && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={handleCloseModal}
                >
                    <motion.div
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 w-full max-w-md"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {!isSubmitted ? (
                            <>
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-bold text-white">Konfirmasi Kehadiran</h3>
                                    <button
                                        onClick={handleCloseModal}
                                        className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                                    >
                                        <X size={16} />
                                    </button>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <p className="text-white/80 mb-2">
                                        Nama/Email kamu
                                    </p>
                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        placeholder="Nama atau Email"
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-3xl text-white placeholder-white/60 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
                                        required
                                    />

                                    <p className="text-white/80 mb-2">
                                        Pesan <span className="opacity-60">(optional)</span>
                                    </p>
                                    <textarea
                                        value={messageValue}
                                        onChange={(e) => setMessageValue(e.target.value)}
                                        placeholder="Pesan untuk acara"
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-3xl text-white placeholder-white/60 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all resize-none h-20"
                                    />

                                    <motion.button
                                        type="submit"
                                        className="w-full px-6 py-3 font-bold bg-green-500 hover:bg-green-600 rounded-3xl text-white transition-colors duration-200"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Konfirmasi
                                    </motion.button>
                                </form>
                            </>
                        ) : (
                            <div className="text-center py-4">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                                >
                                    <Check size={32} className="text-white" />
                                </motion.div>
                                <h3 className="text-xl font-bold text-white mb-2">Terima Kasih!</h3>
                                <p className="text-white/80">
                                    Kehadiran kamu sudah dikonfirmasi untuk <span className="font-semibold">{inputValue}</span>
                                </p>
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default AttendanceModal