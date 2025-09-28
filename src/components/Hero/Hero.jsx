'use client'
import Button from '../Shared/Button'

export default function Hero() {
    return (
        <section className="relative w-full h-screen sm:h-[874px] flex items-center overflow-hidden">
            {/* Background video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/assets/videos/hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            {/* <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div> */}

            {/* Hero content - split layout */}
            <div className="relative z-10 flex w-[95%] mx-auto px-6 md:px-8 h-full items-center">
                {/* Left column - text */}
                <div className="w-full xl:w-1/2">
                    <h1 className="text-5xl sm:text-6xl lg:text-[80px] text-secondary">
                        Smarter AI.
                    </h1>
                    <h1 className="text-5xl sm:text-6xl lg:text-[80px] text-primary">
                        Real Results.
                    </h1>
                    <p className="mt-4 text-lg sm:text-2xl md:text-2xl md:text-[40px] leading-[1.2] text-gray-100 text-secondary">
                        Fast, scalable AI solutions <br /> built for real-world <br /> enterprise impact.
                    </p>
                    <div className="mt-6 flex gap-4 sm:gap-8 md:gap-12 flex-wrap">
                       <Button href="#">Request a Demo</Button>
                       <Button href="#">Explore Platform</Button>
                    </div>

                </div>

                
                <div className="hidden md:flex  justify-center items-center">
                   
                </div>
            </div>
        </section>
    )
}
