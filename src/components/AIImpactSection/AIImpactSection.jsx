"use client"
import StatCard from "./StatCard"

export default function AIImpactSection() {
  const stats = [
    {
      percentage: 74,
      title: "Faster Time-to-Value",
      desc: "Rapid deployment delivers AI benefits in weeks, not years.",
    },
    {
      percentage: 83,
      title: "Optimized Cost Structure",
      desc: "Streamlined operations and automation drive efficiency.",
    },
    {
      percentage: 78,
      title: "Accelerated Innovation Velocity",
      desc: "Teams can experiment and launch ideas faster than ever.",
    },
  ]

  return (
    <section className="py-20 bg-primary">
      <div className="mx-auto max-w-7xl px-6 md:px-8 text-center">
        {/* Heading */}
        <h2 className="text-[#04C8B7] mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-[70px] leading-[1.1] ">
          AI That Means Business
        </h2>

        {/* Subheading */}
        <p className="text-white mb-16 font-quicksand text-xl sm:text-2xl md:text-3xl lg:text-[40px] leading-[1.2] max-w-[1200px]">
          Unlocking measurable business outcomes and real value across industries
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, i) => (
            <StatCard
              key={i}
              percentage={stat.percentage}
              title={stat.title}
              desc={stat.desc}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
