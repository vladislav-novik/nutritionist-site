"use client"

import { FormEvent } from "react";
import { sendCustomerRequest } from "@/sanity/lib/clientRequests";
import { CustomerRequest } from "@/types/customerRequest";

// async function handleSubmit(e: any) {
//   "use server"

//   console.log('handleSubmit', e)
// }

export default function ContactForm() {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const customerRequest: CustomerRequest = {
      name: formData.get('name') as string,
      feedbackWay: (formData.get('feedbackWay') as string).toLowerCase(),
      feedbackWayData: formData.get('feedbackWayData') as string,
      message: formData.get('message') as string,
    }

    const result = await fetch('/api/home', {
      method: 'POST',
      body: JSON.stringify(customerRequest),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    console.log('result', result)
    // await sendCustomerRequest(customerRequest);
  }

  return (
    <form onSubmit={handleSubmit} className="pb-24 pt-20 px-6 sm:pb-32 lg:py-48 lg:px-8">
      <div className="max-w-xl mx-auto lg:max-w-lg lg:mr-0">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
              Name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
              Phone number
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="feedbackWay" className="sr-only">
                  Messenger
                </label>
                <select
                  id="feedbackWay"
                  name="feedbackWay"
                  className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>Email</option>
                  <option>Telegram</option>
                  <option>WhatsApp</option>
                  <option>Viber</option>
                  <option>Instagram</option>
                </select>
              </div>
              <input
                type="tel"
                name="feedbackWayData"
                id="feedbackWayData"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-32 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let&apos;s talk
          </button>
        </div>
      </div>
    </form>
  );
}