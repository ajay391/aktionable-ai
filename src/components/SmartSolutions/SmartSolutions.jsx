"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import { useRef, useEffect, useState } from "react"
import { GrPrevious, GrNext } from "react-icons/gr"
import { FiArrowRight } from "react-icons/fi"
import Image from "next/image"
import "swiper/css"
import "swiper/css/navigation"

export default function SmartSolutions() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const [navReady, setNavReady] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)

  const slides = [
    {
      title: "Banking & \n Finance",
      desc: "Automate document processing, fraud detection & compliance with AI-built for financial workflows.",
      image: "/assets/images/smart-sol-1.jpg",
    },
    {
      title: "Healthcare & \n Insurance",
      desc: "Accelerate claims, improve patient experiences & reduce errors using healthcare-grade AI.",
      image: "/assets/images/smart-sol-2.jpg",
    },
    {
      title: "Legal \n Services",
      desc: "Accelerate contract reviews & reduce manual workload with AI-powered automation.",
      image: "/assets/images/smart-sol-1.jpg",
    },
    {
      title: "Enterprise \n Operations",
      desc: "Optimize workflows, enhance productivity & reduce costs with intelligent automation.",
      image: "/assets/images/smart-sol-2.jpg",
    },
  ]

  useEffect(() => {
    setNavReady(true)

    const handleResize = () => setWindowWidth(window.innerWidth)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const isLargeScreen = windowWidth >= 1500

  return (
    <section className="bg-[#F3F4F6] text-secondary py-20 px-4 lg:px-12 relative">
      <div className="relative text-center max-w-7xl mx-auto mb-12 z-10 px-3">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] leading-tight">
          Smart Solutions. Real Impact.
        </h2>
        <h3 className="text-2xl sm:text-[40px] text-primary font-quicksand font-medium mb-4 ">
          From Finance to Healthcare, Legal to Ops - We Power It All.
        </h3>
        <p className="text-lg sm:text-[30px] text-primary font-quicksand">
          Whether you're automating compliance in banking, streamlining claims
          in healthcare, accelerating legal reviews, or optimizing enterprise
          workflows — our platform adapts to your domain and delivers real,
          measurable outcomes.
        </p>
      </div>

      {navReady && (
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            900: { slidesPerView: 1, spaceBetween: 20 },
            900: { slidesPerView: 1, spaceBetween: 20 },
            901: { slidesPerView: 2, spaceBetween: 40 },
            1500: { slidesPerView: 2, spaceBetween: 40 },
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current
            swiper.params.navigation.nextEl = nextRef.current
          }}
          className="overflow-visible"
          style={{ padding: "20px 0px " }}
        >
          {slides.map((item, index) => (
            <SwiperSlide key={index} style={{ display: "flex", justifyContent: "center" }}>
              {/* Card wrapper */}
              <div
                className={`max-w-[660px] relative p-2 sm:p-6 rounded-3xl h-[340px] sm:h-[400px] flex transition-shadow overflow-visible ${isLargeScreen
                  ? "bg-transparent"
                  : "bg-white shadow-lg"
                  }`}
              >
                
                {isLargeScreen && (
                  <div
                    className="absolute inset-0 rounded-3xl pointer-events-none"
                    style={{
                      backgroundImage: "url('/assets/images/rectangle-bg.png')",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "contain",
                      opacity: 0.95,
                    }}
                  />
                )}

                {/* Image on the left */}
                <div className="relative z-10 w-2/5 flex-shrink-0 p-2 lg:p-2 xl:p-6">
                  <div className="h-full rounded-2xl overflow-hidden relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content on the right */}
                <div className="flex-1 px-2 lg:px-2 xl:px-6 pt-[10px] sm:pt-[40px] flex flex-col justify-start relative z-10">
                  <h4 className="text-[26px] sm:text-[33px] text-[#04C8B7] mb-4 text-center">
                    {item.title}
                  </h4>
                  <p className="text-primary text-[17px] leading-relaxed text-center">
                    {item.desc}
                  </p>

                  <button
                    aria-label={`Open ${item.title}`}
                    className="absolute bottom-2 right-2 sm:right-8 z-20 bg-transparent rounded-full border text-primary p-2 shadow-md hover:shadow-lg transition-transform group"
                  >
                    <FiArrowRight className="text-2xl sm:text-4xl transform -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Custom navigation buttons */}
      <div className="flex justify-center gap-6 mt-6 relative z-10">
        <button
          ref={prevRef}
          className="px-2 py-2 text-[20px] bg-transparent text-primary border rounded-full shadow-sm hover:shadow-md transition"
          aria-label="Previous slide"
        >
          <GrPrevious />
        </button>
        <button
          ref={nextRef}
          className="px-2 py-2 text-[20px] bg-transparent text-primary border rounded-full shadow-sm hover:shadow-md transition"
          aria-label="Next slide"
        >
          <GrNext />
        </button>
      </div>
    </section>
  )
}
