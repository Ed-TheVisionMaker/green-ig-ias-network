'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSignup } from '@/hooks/useSignup';
import { useAuthStore } from '@/store/authStore';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const { signup, isLoading, error } = useSignup();
  const user = useAuthStore((state) => state.user);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await signup(email, password);
  };

  useEffect(() => {
    console.log(user, 'user set in signup page');
    if (user.token.length) {
      router.push('/');
    }
  }, [user]);

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign up</h3>
      <label>Email:</label>
      <input
        type='email'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Password:</label>
      <input
        type='password'
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button disabled={isLoading === null ? undefined : isLoading}>
        Sign Up
      </button>
      {error && <div>{error.error}</div>}
    </form>
  );
};

export default Signup;
