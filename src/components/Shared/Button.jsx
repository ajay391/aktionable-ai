"use client"
import Link from "next/link"

export default function Button({ href, children, variant = "primary", className = "" }) {
  
  const baseClasses =
    "px-6 py-3 rounded-full border transition-colors inline-block text-center"

  const variants = {
    primary:
      "bg-[#004487] text-white border-[#004487] hover:bg-transparent hover:text-[#004487]",
    secondary:
      "bg-white text-[#004487] border-[#004487] hover:bg-[#004487] hover:text-white",
  }

  const combinedClasses = `${baseClasses} ${variants[variant]} ${className}`

  return (
    <Link href={href} className={combinedClasses}>
      {children}
    </Link>
  )
}
