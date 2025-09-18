"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import BackgroundSlideshow from "./background-slideshow"
import ImageSlideshow from "./image-slideshow"
import MainContent from "./main-content"
import FullscreenControls from "./fullscreen-controls"
import FullscreenInfoPanel from "./fullscreen-info-panel"
import AttendanceModal from "./attendance-modal"
import MessageScreen from "./message-screen"
import { BiExpandAlt } from "react-icons/bi"
import Wrapper from "./wrapper"
import Link from "next/link"
import { Navigation } from "lucide-react"



export const ContentVip = () => {
    const images = [
        "https://images.unsplash.com/photo-1734253907344-a4041cd55caa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1737130528752-1d37e271c866?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1606849991547-85c4bae340c5?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1636015899761-daf507f3ce46?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]

    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [messageScreen, setIsMessageScreen] = useState(false)
    const [showModal, setShowModal] = useState(false)

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

    const handleOpenMessage = () => {
        setIsMessageScreen(true)
    }

    const handleCloseMessage = () => {
        setIsMessageScreen(false)
    }

    const handleCloseFullscreen = () => {
        setIsFullscreen(false)
    }

    const handleConfirmAttendance = () => {
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

    // Container variants untuk fullscreen animation
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

    return (
        <>
            <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
                {/* Background Image dengan Framer Motion */}
                <BackgroundSlideshow
                    images={images}
                    currentImageIndex={currentImageIndex}
                    isFullscreen={isFullscreen}
                />

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
                        <ImageSlideshow
                            images={images}
                            currentImageIndex={currentImageIndex}
                            isFullscreen={isFullscreen}
                        >
                            <MainContent
                                isFullscreen={isFullscreen}
                                onOpenClick={handleOpenClick}
                            />
                        </ImageSlideshow>
                    </motion.div>
                </div>
            </section>

            {/* Fullscreen Controls */}
            <FullscreenControls
                isFullscreen={isFullscreen}
                onClose={handleCloseFullscreen}
                onConfirmAttendance={handleConfirmAttendance}
            />

            {/* Fullscreen Info Panel */}
            <FullscreenInfoPanel
                isFullscreen={isFullscreen}
                onOpenMessage={handleOpenMessage}
            >
                <Wrapper glassActive={false}>
                    <h1 className="text-6xl font-bold mb-3">
                        You're Invited!
                    </h1>
                    <p>
                        Kehormatan bagi kami untuk mengundang Anda dalam acara spesial ini
                    </p>
                </Wrapper>

                <Wrapper>
                    <h3 className="text-lg font-bold mb-1">Grand Opening</h3>
                    <h4 className="text-yellow-400 font-semibold mb-2">GO Space by Ganesha Consulting</h4>
                    <p className="text-sm opacity-80 font-semibold">
                        Monday, 29th September 2025<br />
                        10:00 - Selesai WIB<br />
                        Mampang Prapatan
                    </p>
                </Wrapper>

                <Wrapper className="">
                    <p className="text-base md:text-lg leading-relaxed text-white/90 font-medium">
                        Dengan penuh sukacita,
                        <br />
                        kami mengundang Anda untuk hadir dalam acara <span className="font-semibold text-yellow-200">Grand Opening GO Space by Ganesha Consulting</span>.
                        <br />
                    </p>
                    <p className="mt-2">
                        <span className="text-pink-200">GO Space</span> hadir sebagai ruang kolaborasi baru yang mendukung <span className="font-semibold text-blue-200">inovasi</span>, <span className="font-semibold text-green-200">networking</span>, dan <span className="font-semibold text-purple-200">pertumbuhan bisnis</span>.
                    </p>
                </Wrapper>

                <Wrapper>
                    <h3 className="text-lg font-bold mb-1">
                        Agenda Acara
                    </h3>
                    <ul className="font-medium">
                        <li>1. Opening Ceremony</li>
                        <li>2. Sambutan & Presentasi Utama</li>
                        <li>3. Lunch & Networking Session</li>
                        <li>4. Tur Lokasi / Demo Eksklusif</li>
                        <li>5. Penutupan & Foto Bersama</li>
                    </ul>
                </Wrapper>

                <Wrapper className="overflow-hidden !p-2 !py-0">
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

                <Wrapper className="space-y-1">
                    <p className="text-sm font-semibold opacity-70 text-center mb-3">
                        Pesan
                    </p>

                    <div className="p-3 bg-black/50 rounded-2xl flex flex-col gap-2 justify-start !text-left">
                        <p className="text-sm font-semibold">
                            <span className="block font-bold text-base">Andi Wijaya</span>
                            Selamat & sukses untuk Grand Opening GO Space, semoga jadi wadah kolaborasi yang bermanfaat!
                        </p>
                    </div>

                    <div className="p-3 bg-black/50 rounded-2xl flex flex-col gap-2 justify-start !text-left">
                        <p className="text-sm font-semibold">
                            <span className="block font-bold text-base">Rina Putri</span>
                            Terima kasih atas undangannya, saya akan hadir di acara Open House sore hari.
                        </p>
                    </div>

                    <div className="p-3 bg-black/50 rounded-2xl flex flex-col gap-2 justify-start !text-left">
                        <p className="text-sm font-semibold">
                            <span className="block font-bold text-base">Budi Santoso</span>
                            Selamat atas pembukaan GO Space! Semoga jadi pusat inovasi baru di kota kita.
                        </p>
                    </div>

                    <button
                        onClick={handleOpenMessage}
                        className="p-3 bg-black/50 rounded-2xl w-full flex flex-row items-center gap-2 justify-center !text-left text-sm font-semibold"
                    >
                        <span className="opacity-60 flex items-center gap-2">
                            Lihat Lebih Banyak <BiExpandAlt />
                        </span>
                    </button>
                </Wrapper>
            </FullscreenInfoPanel>

            {/* Modals */}
            <AttendanceModal
                showModal={showModal}
                onClose={handleCloseModal}
            />

            <MessageScreen
                messageScreen={messageScreen}
                onClose={handleCloseMessage}
            />

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