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
        
        setShowAnimation(true);
        
        setTimeout(() => {
            setShowAnimation(false);
        }, 2000);
    };
  
    return (
        <div 
        id='waitlist'
        className="relative mt-16 ">
            {showAnimation && (
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-gray-900 to-transparent"></div>
            )}
            <div
            // className="border border-pistachio w-max py-8 pl-8 pr-32 rounded-lg"
            className=" w-max mt-12 py-8 pl-8 pr-32 bg-white border-pistachio/50 border backdrop-blur-xl rounded-2xl drop-shadow-md"
            >
                <div>
                <h2 className="font-bold text-3xl tracking-tight text-ginBlack">
                    Get notified when we're launching.
                </h2>
                </div>
                <form className="mt-8 w-full max-w-md" onSubmit={handleSubmit}>
                    <div className="flex gap-x-4">
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email-address"
                            name="email"
                            autoComplete="email"
                            value={email}
                            className=" min-w-0 flex-auto rounded-md  border-2 px-3.5 py-2 placeholder:text-ginBlack text-ginBlack ring-1 ring-inset ring-ginBlack focus:ring focus:ring-inset focus:ring-darkGreen focus:border-transparent"
                            placeholder="Enter your email here"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="flex-none rounded-md bg-aquamarine px-3.5 py-2.5 ml-8 text-sm font-semibold text-ginBlack placeholder:text-ginBlack focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            Notify me
                        </button>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-ginBlack">
                        We care about your data. Read our{' '}
                        <a href="#" className="font-semibold">
                            privacy policy
                        </a>
                        .
                    </p>
                </form>
            </div>
        </div>
    )
}