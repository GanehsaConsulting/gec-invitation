"use client"
import Link from "next/link"
import { AnimatePresence } from "framer-motion"
import { Navigation } from "lucide-react"
import { BiExpandAlt } from "react-icons/bi"
import Wrapper from "./wrapper"

const FullscreenInfoPanel = ({ isFullscreen, className, children }) => {
    return (
        <AnimatePresence>
            {isFullscreen && (
                <div className={`${className} fixed bottom-0 left-4 right-4 z-50 space-y-3 pt-50 pb-50 overflow-y-scroll no-scrollbar h-screen`}>
                   {children}
                </div>
            )}
        </AnimatePresence>
    )
}

export default FullscreenInfoPanel