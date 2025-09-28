"use client"
import Button from "../Shared/Button"
import EnterpriseCard from "./EnterpriseCard"

export default function EnterpriseSection() {
  const cards = [
    {
      imageSrc: "/assets/images/ai-engine.jpg",
      title: "Generative \n AI Engine",
      desc: "Built on state-of-the-art large language models and AI techniques that can generate, summarize, and analyze content intelligently – all tailored to your enterprise data.",
    },
    {
      imageSrc: "/assets/images/unified-data.jpg",
      title: "Unified Data & \n Integration",
      desc: "Pre-built connectors and APIs to unify data from your enterprise systems (ERP, CRM, databases, etc.), ensuring AI decisions are based on a complete, single source of truth.",
    },
    {
      imageSrc: "/assets/images/scalable-deployment.jpg",
      title: "Scalable & Flexible \n Deployment",
      desc: "Containerized, modular design that runs securely on your cloud or on-premises infrastructure. Scale seamlessly from pilot to full production with robust performance monitoring and management tools.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className=" mx-auto px-2 sm:px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-[70px] text-primary mb-12">
          Built for Enterprise. <br /> Engineered for&nbsp;Impact.
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mx-auto">
          {cards.map((card, idx) => (
            <EnterpriseCard
              key={idx}
              imageSrc={card.imageSrc}
              title={card.title}
              desc={card.desc}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <Button href="#" className="text-xl">Explore our Platform</Button>
        </div>
      </div>
    </section>
  )
}
