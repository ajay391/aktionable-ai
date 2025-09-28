"use client"
import InsightCard from "./InsightCard"

export default function InsightsSection() {
  const articles = [
    {
      image: "/assets/images/insight-1.jpg",
      author: "John Doe",
      date: "Sep 25, 2025",
      title: "How Intelligent Automation is Changing Enterprises",
    },
    {
      image: "/assets/images/insight-2.jpg",
      author: "Jane Smith",
      date: "Sep 20, 2025",
      title: "Top AI Trends Driving Business Innovation in 2025",
    },
    {
      image: "/assets/images/insight-3.jpg",
      author: "Michael Lee",
      date: "Sep 15, 2025",
      title: "5 Ways to Streamline Ops with Intelligent Workflows",
    },
  ]

  return (
    <section className="bg-primary py-20 px-6 lg:px-20">
      <div className="text-center max-w-7xl mx-auto mb-12">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] leading-tight text-[#01BCAC]">
          Insights That Power <br /> Action.
        </h2>
        <p className="text-[22px] text-white mt-4 font-quicksand font-normal">
          Stay ahead with expert articles on AI, business automation, and actionable intelligence. 
          Discover trends, tips, and real-world strategies to drive smarter decisions and better outcomes.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center">
        {articles.map((item, index) => (
          <InsightCard key={index} {...item} />
        ))}
      </div>

      {/* Read More button */}
      <div className="text-center mt-12">
        <button className="px-4 py-1 bg-white text-primary rounded-full text-[25px] transition">
          Read More
        </button>
      </div>
    </section>
  )
}
