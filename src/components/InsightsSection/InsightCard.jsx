"use client"
import Image from "next/image"
import { FaRegUser, FaRegCalendarAlt } from "react-icons/fa"
import { useState } from "react"
import Modal from "../Shared/Modal"

export default function InsightCard({ image, author, date, title }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="bg-white rounded-4xl shadow-lg overflow-hidden hover:shadow-xl transition max-w-[400px] w-full mx-auto">
        {/* Image */}
        <div className="w-full p-6">
          <div className="relative w-full h-56 rounded-2xl overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Author & Date */}
          <div className="flex justify-around items-center text-[#04C8B7] text-[16px] mb-4 gap-4">
            <div className="flex items-center gap-2 bg-[#F0F0F0] px-2 py-2 rounded-full w-full justify-between">
              <div className="bg-primary p-2 rounded-full flex items-center justify-center">
                <FaRegUser size={16} className="text-white" />
              </div>
              <span className="w-full text-center">{author}</span>
            </div>

            <div className="flex items-center gap-2 bg-[#F0F0F0] px-2 py-2 rounded-full w-full justify-between">
              <div className="bg-primary p-2 rounded-full flex items-center justify-center">
                <FaRegCalendarAlt size={16} className="text-white" />
              </div>
              <span className="w-full text-center">{date}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-[26px] text-primary mb-6">
            {title}
          </h3>

          {/* Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="px-10 py-1 bg-secondary text-[25px] text-white rounded-full hover:bg-[#03b0a2] transition"
          >
            View
          </button>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-2xl text-primary mb-4">{title}</h2>
        <p className="text-gray-700">
          Here you can show full blog content, details, or anything you want inside the modal.
        </p>
      </Modal>
    </>
  )
}
