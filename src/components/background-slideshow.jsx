"use client"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const BackgroundSlideshow = ({ images, currentImageIndex, isFullscreen = false }) => {
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

    return (
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
    )
}

export default BackgroundSlideshow