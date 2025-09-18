"use client"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

const MessageScreen = ({ messageScreen, onClose }) => {
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

    const messages = [
        { name: "Andi Wijaya", message: "Selamat & sukses untuk Grand Opening GO Space, semoga jadi wadah kolaborasi yang bermanfaat!" },
        { name: "Rina Putri", message: "Terima kasih atas undangannya, saya akan hadir di acara Open House sore hari." },
        { name: "Budi Santoso", message: "Selamat atas pembukaan GO Space! Semoga jadi pusat inovasi baru di kota kita." },
        { name: "Andi Wijaya", message: "Selamat & sukses untuk Grand Opening GO Space, semoga jadi wadah kolaborasi yang bermanfaat!" },
        { name: "Rina Putri", message: "Terima kasih atas undangannya, saya akan hadir di acara Open House sore hari." },
        { name: "Budi Santoso", message: "Selamat atas pembukaan GO Space! Semoga jadi pusat inovasi baru di kota kita." },
        { name: "Andi Wijaya", message: "Selamat & sukses untuk Grand Opening GO Space, semoga jadi wadah kolaborasi yang bermanfaat!" },
        { name: "Rina Putri", message: "Terima kasih atas undangannya, saya akan hadir di acara Open House sore hari." },
        { name: "Budi Santoso", message: "Selamat atas pembukaan GO Space! Semoga jadi pusat inovasi baru di kota kita." },
        { name: "Rina Putri", message: "Terima kasih atas undangannya, saya akan hadir di acara Open House sore hari." },
        { name: "Budi Santoso", message: "Selamat atas pembukaan GO Space! Semoga jadi pusat inovasi baru di kota kita." },
        { name: "Rina Putri", message: "Terima kasih atas undangannya, saya akan hadir di acara Open House sore hari." },
        { name: "Budi Santoso", message: "Selamat atas pembukaan GO Space! Semoga jadi pusat inovasi baru di kota kita." }
    ]

    return (
        <AnimatePresence>
            {messageScreen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-2xl px-4 pb-4 pt-50 overflow-y-scroll no-scrollbar h-screen"
                    onClick={onClose}
                >
                    <motion.div
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className=""
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="space-y-2">
                            <div className="mb-3 flex items-center justify-between">
                                <p className="text-3xl font-semibold opacity-100 text-left">
                                    Pesan
                                </p>
                                <button onClick={onClose} className="p-2 bg-white/10 rounded-full w-fit">
                                    <X />
                                </button>
                            </div>
                            
                            {messages.map((msg, index) => (
                                <div key={index} className="p-3 bg-white/15 border border-neutral-200/10 rounded-2xl flex flex-col gap-2 justify-start !text-left">
                                    <p className="text-sm font-semibold">
                                        <span className="block font-bold text-base">{msg.name}</span>
                                        {msg.message}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default MessageScreen