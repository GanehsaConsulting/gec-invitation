"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Navigation, X, Check } from "lucide-react"
import Link from "next/link"

const Wrapper = ({
    children,
    className = "text-center",
    glass = "bg-white/5 backdrop-blur-[6px] border border-neutral-300/15 rounded-3xl px-2 py-4 text-white flex flex-col items-center text-center satruation-150 backdrop-brightness-150",
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

export const Content = () => {
    const images = [
        "https://images.unsplash.com/photo-1577043616498-a783964db36f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1573832752188-8a18e3508234?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1690803883473-5d6320037f78?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1749095603052-fdbed7d960cf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJ1aWxkaW5nJTIwcHVycGxlfGVufDB8fDB8fHww"
    ]

    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [inputValue, setInputValue] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)

    useEffect(() => {
        const intervalTime = isFullscreen ? 5000 : 2500
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, intervalTime)

        return () => clearInterval(interval)
    }, [images.length, isFullscreen])

    const handleOpenClick = () => {
        setIsFullscreen(true)
    }

    const handleCloseFullscreen = () => {
        setIsFullscreen(false)
    }

    const handleConfirmAttendance = () => {
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
        setInputValue("")
        setIsSubmitted(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim()) {
            setIsSubmitted(true)
            // Here you can add logic to save the attendance data
            console.log("Attendance confirmed for:", inputValue)

            // Auto close modal after 2 seconds
            setTimeout(() => {
                handleCloseModal()
            }, 2000)
        }
    }

    // Variants untuk animasi fade dengan blur (normal mode)
    const imageVariants = {
        enter: {
            opacity: 0,
            filter: "blur(10px)",
            scale: 1.1,
        },
        center: {
            opacity: 1,
            filter: "blur(0px)",
            scale: 1,
            transition: {
                opacity: { duration: 0.8, ease: "easeOut" },
                filter: { duration: 0.8, ease: "easeOut" },
                scale: { duration: 1.2, ease: "easeOut" },
            }
        },
        exit: {
            opacity: 0,
            filter: "blur(8px)",
            scale: 0.95,
            transition: {
                opacity: { duration: 0.6, ease: "easeIn" },
                filter: { duration: 0.6, ease: "easeIn" },
                scale: { duration: 0.6, ease: "easeIn" },
            }
        }
    }

    // Variants untuk animasi fullscreen (HANYA fade + blur, tanpa scale)
    const fullscreenImageVariants = {
        enter: {
            opacity: 0,
            filter: "blur(15px)",
        },
        center: {
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                opacity: { duration: 0.7, ease: "easeOut" },
                filter: { duration: 0.7, ease: "easeOut" },
            }
        },
        exit: {
            opacity: 0,
            filter: "blur(12px)",
            transition: {
                opacity: { duration: 0.5, ease: "easeIn" },
                filter: { duration: 0.5, ease: "easeIn" },
            }
        }
    }

    const backgroundVariants = {
        enter: {
            opacity: 0,
            filter: "blur(15px)",
        },
        center: {
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                opacity: { duration: 1, ease: "easeOut" },
                filter: { duration: 1, ease: "easeOut" },
            }
        },
        exit: {
            opacity: 0,
            filter: "blur(10px)",
            transition: {
                opacity: { duration: 0.7, ease: "easeIn" },
                filter: { duration: 0.7, ease: "easeIn" },
            }
        }
    }

    // Variants untuk fullscreen background (HANYA fade + blur, tanpa scale)
    const fullscreenBackgroundVariants = {
        enter: {
            opacity: 0,
            filter: "blur(20px)",
        },
        center: {
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                opacity: { duration: 0.8, ease: "easeOut" },
                filter: { duration: 0.8, ease: "easeOut" },
            }
        },
        exit: {
            opacity: 0,
            filter: "blur(15px)",
            transition: {
                opacity: { duration: 0.6, ease: "easeIn" },
                filter: { duration: 0.6, ease: "easeIn" },
            }
        }
    }

    // Variants untuk fullscreen animation
    const containerVariants = {
        normal: {
            width: "90%",
            height: "80vh",
            borderRadius: "24px",
            transition: {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1]
            }
        },
        fullscreen: {
            width: "100vw",
            height: "100vh",
            borderRadius: "0px",
            transition: {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1]
            }
        }
    }

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

    return (
        <>
            <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
                {/* Background Image dengan Framer Motion */}
                <div className="fixed inset-0">
                    <AnimatePresence mode="sync">
                        <motion.div
                            key={`bg-${currentImageIndex}`}
                            variants={isFullscreen ? fullscreenBackgroundVariants : backgroundVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="absolute inset-0"
                        >
                            {/* Image BG Cover */}
                            <Image
                                className="object-cover w-full h-full border"
                                fill
                                src={images[currentImageIndex]}
                                alt=""
                                priority
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="absolute inset-0 bg-black/35 backdrop-blur-3xl"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        className={`relative flex flex-col items-center justify-center overflow-hidden duration-100 ease-in-out ${isFullscreen
                            ? "fullscreen-container bg-black/10"
                            : "normal-container"
                            }`}
                        variants={containerVariants}
                        animate={isFullscreen ? "fullscreen" : "normal"}
                        layoutId="main-container"
                        style={{
                            width: isFullscreen ? "100vw" : "90%",
                            height: isFullscreen ? "100vh" : "80vh",
                        }}
                    >
                        {/* Gambar Utama dengan Framer Motion */}
                        <div className="relative w-full h-full overflow-hidden">
                            <AnimatePresence mode="sync">
                                <motion.div
                                    key={`main-${currentImageIndex}`}
                                    variants={isFullscreen ? fullscreenImageVariants : imageVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    className="absolute inset-0"
                                >
                                    <Image
                                        width={500}
                                        height={500}
                                        className={`w-full h-full ${isFullscreen
                                            ? "object-cover brightness-110 contrast-105 saturate-110"
                                            : "object-cover"
                                            }`}
                                        src={images[currentImageIndex]}
                                        alt=""
                                        priority
                                        style={{
                                            borderRadius: isFullscreen ? '0px' : '24px'
                                        }}
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Gradient Overlay */}
                        <motion.div
                            className={`w-full absolute bottom-0 left-0 right-0 linear-blur-to-t saturate-200 ${isFullscreen
                                ? ""
                                : "h-[80%] bg-gradient-to-t from-black/50 to-transparent"
                                }`}
                            animate={{
                                opacity: isFullscreen ? 0.8 : 1
                            }}
                            transition={{ duration: 0.5 }}
                        />

                        {/* Content dengan animation */}
                        <motion.div
                            className="absolute bottom-0 p-6 flex flex-col items-center justify-center text-center space-y-2"
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
                                onClick={handleOpenClick}
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
                    </motion.div>
                </div>
            </section>

            {isFullscreen && (
                <>
                </>
            )}

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
                                onClick={handleConfirmAttendance}
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
                            onClick={handleCloseFullscreen}
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

            {/* Fullscreen Info Panel */}
            <AnimatePresence>
                {isFullscreen && (
                    <div className="fixed bottom-0 left-4 right-4 z-50 space-y-3 pt-50 pb-50 overflow-y-scroll no-scrollbar h-screen">
                        <Wrapper glassActive={false}>
                            <h1 className="text-6xl font-bold mb-3">
                                You're Invited!
                            </h1>
                            <p>
                                Join Our Open House Celebration
                            </p>
                        </Wrapper>
                        <Wrapper>
                            <h3 className="text-lg font-bold mb-1">Grand Opening</h3>
                            <h4 className="text-yellow-400 font-semibold mb-2">GO Space by Ganesha Consulting</h4>
                            <p className="text-sm opacity-80 font-semibold">
                                Monday, 29th September 2025<br />
                                12:00 - 17:00 WIB<br />
                                Mampang Prapatan
                            </p>
                        </Wrapper>
                        <Wrapper
                            className="overflow-hidden !p-2 !py-0">
                            <p className="text-sm font-semibold opacity-70 text-center px-4 py-2">
                                Directions
                            </p>

                            <h1>
                                Gedung Fancy Mampang, Jl. Mampang Prpt. Raya No.151 Lantai 4 Unit A7, Kota Jakarta Selatan.
                            </h1>
                            <div className="m-2 w-full">
                                <Link href={"https://maps.app.goo.gl/qtHai1L4eYdCPijYA"}>
                                    <button className="px-3 py-3 w-full font-bold bg-white rounded-t-2xl text-black mt-2 flex items-center justify-center gap-1">
                                        <Navigation size={16} /> Direct Me
                                    </button>
                                </Link>

                                <div className="w-full flex">
                                    <iframe
                                        className="grow w-auto h-full rounded-b-2xl"
                                        src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63456.982254381655!2d106.7517927486328!3d-6.255643000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3007a6e8e39%3A0xf83b477d03a6931f!2sGANESHA%20CONSULTING!5e0!3m2!1sid!2sid!4v1758189813356!5m2!1sid!2sid"}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </div>
                        </Wrapper>
                    </div>
                )}
            </AnimatePresence>

            {/* Attendance Modal */}
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
                                            Pesan {" "} <span className="opacity-60"> (optional)</span>
                                        </p>
                                        <textarea
                                            type="text"
                                            value={inputValue}
                                            onChange={(e) => setInputValue(e.target.value)}
                                            placeholder="Nama atau Email"
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-3xl text-white placeholder-white/60 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
                                            required
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

            {/* Fullscreen Backdrop */}
            <AnimatePresence>
                {isFullscreen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-30 bg-black/50"
                        onClick={handleCloseFullscreen}
                    />
                )}
            </AnimatePresence>

        </>
    )
}