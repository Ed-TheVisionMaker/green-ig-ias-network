'use client'
import { useState } from 'react';
import axios, { AxiosError } from 'axios';

export default function Waitlist() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [showAnimation, setShowAnimation] = useState(false);
  
    const registerEmail = async (email: string) => {
        try {
            await axios.post('/api/waitlist/register-email', {
                email
            });
        } catch (error) {
            const axiosError = error as AxiosError;
            setError(axiosError.response?.data as string);
        }
    }
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        registerEmail(email);
        
        // Show the animation when the form is submitted
        setShowAnimation(true);
        
        // Hide the animation after a certain duration (you can adjust the timing)
        setTimeout(() => {
            setShowAnimation(false);
        }, 2000); // 2000 milliseconds (2 seconds) as an example
    };
  
    return (
        <div className="py-16 sm:py-24 relative">
            {showAnimation && (
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-gray-900 to-transparent"></div>
            )}
            <div className="mx-auto max-w-7xl sm:px-12 lg:px-16">
                <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:pb-6 lg:pb-8 text-white sm:text-4xl xl:max-w-none xl:flex-auto">
                    Get notified when we're launching.
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
                            privacy policy
                        </a>
                        .
                    </p>
                </form>
            </div>
        </div>
    )
}