"use client"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const ImageSlideshow = ({ images, currentImageIndex, isFullscreen = false, children, ...props }) => {
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

    return (
        <div className="relative w-full h-full overflow-hidden" {...props}>
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

            {children}
        </div>
    )
}

export default ImageSlideshow