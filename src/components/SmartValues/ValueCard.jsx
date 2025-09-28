"use client"

import { motion } from "framer-motion"

export default function ValueCard({ icon, title, desc }) {
  return (
    <motion.div
      className="max-w-[374px] w-full rounded-2xl border border-white px-4 pt-2 pb-4  
                 text-center text-white hover:bg-[#01B6A6] 
                 transition-colors duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-center ">{icon}</div>
      <h3 className=" text-[30px] leading-[1.2]">
        {Array.isArray(title) ? title.map((line, i) => (
            <span key={i} className="block">{line}</span>
        )) : title}
        </h3>
      <p className="text-[18px] font-quicksand leading-[1.2]">{desc}</p>
    </motion.div>
  )
}
