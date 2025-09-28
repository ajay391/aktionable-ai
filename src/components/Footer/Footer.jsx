"use client"
import Link from "next/link"
import Image from "next/image"
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

export default function Footer() {
    return (
        <footer
            className="bg-gray-900 text-white relative"
            style={{
                backgroundImage: "url('/assets/images/footer-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                {/* Platform */}
                <div className="lg:col-span-1">
                    <h3 className="text-xl font-semibold mb-4">Platform</h3>
                    <ul className="space-y-2 text-white font-quicksand list-disc list-inside">
                        <li><Link href="#">AdoptIQ</Link></li>
                        <li><Link href="#">AssistIQ</Link></li>
                        <li><Link href="#">Contrakt AI</Link></li>
                        <li><Link href="#">MedUSA AI</Link></li>
                        <li><Link href="#">UnifyX</Link></li>
                    </ul>
                </div>

                {/* Solutions */}
                <div className="lg:col-span-1">
                    <h3 className="text-xl font-semibold mb-4">Solutions</h3>
                    <ul className="space-y-2 text-white font-quicksand list-disc list-inside">
                        <li><Link href="#">Banking & Finance</Link></li>
                        <li><Link href="#">Healthcare & Insurance</Link></li>
                        <li><Link href="#">Business & Legal</Link></li>
                        <li><Link href="#">Enterprise Operations</Link></li>
                        <li><Link href="#">Digital Adoption & Analytics</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div className="lg:col-span-2">
                    <h3 className="text-xl font-semibold mb-4">Services</h3>
                    <ul className="space-y-3 text-white font-quicksand list-disc list-inside">
                        <li><Link href="#">AI Strategy & Advisory</Link></li>
                        <li><Link href="#">Solution Design & Prototyping</Link></li>
                        <li><Link href="#">Platform Implementation & Integration</Link></li>
                        <li><Link href="#">User Training & Change Management</Link></li>
                        <li><Link href="#">Ongoing Support & AI Governance</Link></li>
                    </ul>
                </div>

                {/* Resources */}
                <div className="text-[20px] lg:col-span-1">
                    <h3 className=" mb-4">Resources</h3>
                    <h3 className=" mb-4">Privacy Policy</h3>
                    <h3 className=" mb-4">Terms of Use</h3>
                    <h3 className=" mb-4">Contact Us</h3>
                    <button className="px-3 py-0 border rounded-full">Log In</button>

                </div>
            </div>

            {/* Bottom Section */}
            <div className="relative z-10 border-t border-gray-700 px-6 py-12">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start md:gap-x-20">
                    {/* Left Column - Logo + Text */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 mb-4 md:mb-0">
                        <div className="flex items-center gap-3">
                            <Image
                                src="/assets/images/footer-logo.png"
                                alt="Aktionable AI Logo"
                                width={60}
                                height={60}
                                className="object-contain w-16 h-16 sm:w-14 sm:h-14 lg:w-20 lg:h-20"
                            />
                            <Image
                                src="/assets/images/footer-logo-text.png"
                                alt="Aktionable AI Text"
                                width={363}
                                height={40}
                                className="object-contain w-60 h-auto sm:w-60 lg:w-80"
                            />
                        </div>

                        <p className="text-white text-sm leading-relaxed max-w-md">
                            Empowering businesses with actionable insights, intelligent automation, and real-world impact.
                            Discover how our AI platform transforms data into decisive action.
                        </p>
                    </div>

                    {/* Right Column - Subscribe + Social */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-right space-y-6">
                        <h4 className="text-lg text-start">Subscribe to Our Smart Insights</h4>

                        {/* Input + Button */}
                        <div className="flex w-full sm:w-96">
                            <input
                                type="email"
                                placeholder=""
                                className="flex-1 px-4 py-2 rounded-full text-white border-1 mr-4"
                            />
                            <button className="px-6 py-2 bg-transparent border text-white rounded-full transition">
                                Send
                            </button>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex gap-10 text-gray-300 text-3xl">
                            <Link href="#" className="rounded-md border p-1 hover:text-[#01BCAC]"><FaLinkedinIn /></Link>
                            <Link href="#" className="rounded-md border p-1 hover:text-[#01BCAC]"><FaInstagram /></Link>
                            <Link href="#" className="rounded-md border p-1 hover:text-[#01BCAC]"><FaFacebookF /></Link>
                            <Link href="#" className="rounded-md border p-1 hover:text-[#01BCAC]"><FaXTwitter /></Link>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="max-w-7xl mx-auto mt-10 text-start text-white text-sm sm:text-lg border-t border-gray-700 pt-6">
                    © 2025 <span className="">aktionable.ai</span>.
                    A <span className="">KT2i (Kanchi Technologies)</span> Company | All Rights Reserved.
                </div>
            </div>
        </footer>
    )
}
