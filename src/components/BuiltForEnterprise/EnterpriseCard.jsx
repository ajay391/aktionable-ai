"use client"
import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function EnterpriseCard({ imageSrc, title, desc }) {
    return (
        <motion.div
            className="bg-secondary rounded-4xl shadow-md overflow-hidden hover:shadow-xl transition-shadow mx-auto px-2 sm:px-3 py-6"
            style={{ maxWidth: "432px" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            {/* Image */}
            <div className="relative w-full h-56 flex justify-center">
                <div className="relative w-[90%] sm:w-[85%] h-full">
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        className="object-cover rounded-4xl"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="pt-4 text-center">
                <h3 className="text-2xl md:text-[33px] mb-3 whitespace-pre-line">
                {title}
                </h3>
                <p className="text-white text-md md:text-base font-quicksand">{desc}</p>
            </div>
        </motion.div>
    )
}
