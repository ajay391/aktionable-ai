"use client"
import { motion } from "framer-motion"
import { PiPlayThin } from "react-icons/pi"

export default function VideoSection() {
    return (
        <section className="relative w-full bg-[rgb(203_217_255/51%)] text-center overflow-hidden">
            <div className=" mx-auto relative ">

                {/* Video Thumbnail Container */}
                <div className="relative  overflow-hidden py-14 sm:py-20">

                    {/* Background Image */}
                    <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
                        <img
                            src="/assets/images/video-bg.jpg"
                            alt="Video Background"
                            className="w-full h-[400px] md:h-full object-contain bg-no-repeat"
                        />

                    </div>
                    <div className="absolute inset-0 bg-black/5 backdrop-blur-xs"></div>


                    {/* Heading and Play Button centered over the image */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4">
                        <h2 className="text-5xl md:text-6xl lg:text-[80px] text-primary mb-6">
                            Explore our Smarter AI <br /> Platform
                        </h2>

                        <motion.button
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center justify-center w-20 h-20 sm:w-36 sm:h-36 rounded-full text-white shadow-lg"
                            style={{ background: 'linear-gradient(135deg, #004487, #009588)' }}
                            aria-label="Play Video"
                        >
                            <PiPlayThin className="text-4xl sm:text-6xl " />
                        </motion.button>


                    </div>

                </div>
            </div>
        </section>
    )
}
