'use client'
import { useState } from 'react';
import axios, { AxiosError } from 'axios';

export default function Waitlist() {
    const [email, setEmail] = useState('')
    const [error, setError] = useState<string | null>(null)
  
    const registerEmail = async (email: string) => {
      try {
        await axios.post('/api/waitlist/register-email', {
          email
        })
      } catch (error) {
        const axiosError = error as AxiosError
        setError(axiosError.response?.data as string)
      }
    }
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      registerEmail(email)
  
    };
    return (
      <div className=" py-16 sm:py-24">
        <div className="mx-auto max-w-7xl  sm:px-6 lg:px-8">
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:pb-6 lg:pb-8 text-white sm:text-4xl xl:max-w-none xl:flex-auto">
              Get notified when we&#39;re launching.
            </h2>
            <form className="w-full max-w-md" onSubmit={handleSubmit}>
              <div className="flex gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Notify me
                </button>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300">
                We care about your data. Read our{' '}
                <a href="#" className="font-semibold text-white">
                  privacy&nbsp;policy
                </a>
                .
              </p>
            </form>
        </div>
      </div>
    )
  }
  