
import { AiOutlineFieldTime } from "react-icons/ai";
import { GoGraph } from "react-icons/go";
import { PiUsers } from "react-icons/pi";
import { CiLock } from "react-icons/ci";
import { IoExtensionPuzzleOutline } from "react-icons/io5";

import ValueCard from "./ValueCard"

export default function ValuesSection() {
    const values = [
        { icon: <AiOutlineFieldTime className="text-6xl" />, title: ["Trust by", "Design"], desc: "Enterprise-grade security and governance are built into every solution." },
        { icon: <GoGraph className="text-6xl" />, title: ["Results Over", "Hype"], desc: "Focus on measurable business outcomes, not just AI buzzwords." },
        { icon: <PiUsers className="text-6xl" />, title: ["Human-Centric", "Transformation"], desc: "AI designed to augment people, not replace them." },
        { icon: <IoExtensionPuzzleOutline className="text-6xl" />, title: ["Modular", "Extensibility"], desc: "Build what you need, then expand." },
        { icon: <CiLock className="text-6xl" />, title: ["Secure Enterprise", "AI Deployment"], desc: "Deploy AI with confidence and control." },
    ]


    return (
        <section className="py-16 bg-primary">
            <h2 className="text-4xl md:text-[62px] text-center text-[#01B6A6] mb-12">
                Our ‘Smart’ Value
            </h2>

            {/* Grid wrapper */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-4 sm:mx-auto px-[20px]">
                {values.slice(0, 2).map((val, i) => (
                    <div key={i} className="flex justify-center">
                        <ValueCard {...val} />
                    </div>
                ))}

                {/* Middle single card */}
                <div className="md:col-span-2 flex justify-center">
                    <ValueCard {...values[2]} />
                </div>

                {values.slice(3).map((val, i) => (
                    <div key={i + 3} className="flex justify-center">
                        <ValueCard {...val} />
                    </div>
                ))}
            </div>
        </section>
    )
}
