'use client'
import { useForm } from 'react-hook-form'

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-xl shadow-md text-primary">
      <div>
        <label className="block mb-2 font-medium" htmlFor="name">Name <span className='text-red-500'>*</span></label>
        <input
          {...register('name', { required: true })}
          className="w-full border border-gray-300 rounded-md p-3"
        />
        {errors.name && <p className="text-red-500">Name is required</p>}
      </div>
      <div>
        <label className="block mb-2 font-medium" htmlFor="email">Email <span className='text-red-500'>*</span></label>
        <input
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          className="w-full border border-gray-300 rounded-md p-3"
        />
        {errors.email && <p className="text-red-500">Valid email is required</p>}
      </div>
      <div>
        <label className="block mb-2 font-medium" htmlFor="message">Message <span className='text-red-500'>*</span></label>
        <textarea
          {...register('message', { required: true })}
          rows="5"
          className="w-full border border-gray-300 rounded-md p-3"
        ></textarea>
        {errors.message && <p className="text-red-500">Message is required</p>}
      </div>
      <button type="submit" className="bg-primary text-white px-6 py-3 rounded-md font-medium">
        Send Message
      </button>
    </form>
  )
}
