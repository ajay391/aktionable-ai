"use client"

import Button from "../Shared/Button"

export default function CTADemo() {
  return (
    <section className="py-24 px-6 lg:px-20 text-center rounded-3xl mx-6 lg:mx-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[35px] text-primary mb-6 font-quicksand font-medium">
          Ready to transform your enterprise with smarter AI? <br />
          Contact us to schedule a personalized demo or discuss your use case with our experts.
        </h2>
        
        <Button href="#" className="text-xl">Contact Now</Button>
      </div>
    </section>
  )
}
