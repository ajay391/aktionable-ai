'use client'
import React from 'react'

export default function EnterpriseIntro() {
  return (
    <section className="relative w-full py-24 bg-white text-center">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-[60px] text-secondary leading-tight mb-6">
          Accelerating Enterprise AI Outcomes
        </h2>

        {/* Description */}
        <p className="text-md sm:text-lg md:text-xl lg:text-2xl text-primary font-normal font-quicksand leading-relaxed">
          Aktionable.ai is a next-generation enterprise AI platform designed to turn your generative AI experiments into scalable impact. We help large organizations move from GenAI pilot projects to production-grade deployments – faster, securely, and with real results. Our approach is rooted in trust by design, ensuring every AI solution is responsible, human‑centric, and aligned to your business goals.
        </p>
      </div>
    </section>
  )
}
