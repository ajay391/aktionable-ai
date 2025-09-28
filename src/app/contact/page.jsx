'use client'
import ContactForm from './ContactForm'
import { useRouter } from 'next/navigation'

export default function ContactPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6 md:px-0">
      <div className="container mx-auto max-w-3xl">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="mb-6 text-primary font-medium hover:underline"
        >
          &larr; Back
        </button>

        <h1 className="text-4xl font-bold text-center mb-8 text-secondary">Contact Us</h1>
        <p className="text-center text-gray-700 mb-12">
          Have questions or want to work with us? Fill out the form below.
        </p>

        <ContactForm />
      </div>
    </main>
  )
}
