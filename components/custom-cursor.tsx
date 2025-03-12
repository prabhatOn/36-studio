"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 bg-red-500 rounded-full pointer-events-none z-50"
      animate={{ x: mousePosition.x - 8, y: mousePosition.y - 8 }}
      transition={{ type: "spring", damping: 25, stiffness: 250 }}
    />
  )
}

