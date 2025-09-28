"use client"
import { motion } from "framer-motion"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"

export default function StatCard({ percentage, title, desc }) {
  
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.5,   
  })

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center p-2"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated Percentage */}
      <div
        className="text-white font-bold mb-3 font-quicksand text-[75px] sm:text-[85px]"
        style={{ lineHeight: "1" }}
      >
        {inView ? (
          <CountUp start={0} end={percentage} duration={2} suffix="%" />
        ) : (
          "0%"
        )}
      </div>

      <h3 className="text-[#04C8B7] text-[29px] mb-2 font-quicksand">{title}</h3>
      <p className="text-[23px] text-white font-quicksand">{desc}</p>
    </motion.div>
  )
}
