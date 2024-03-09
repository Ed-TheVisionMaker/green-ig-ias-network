'use client';
import { useState, useEffect } from 'react';
import { useLogin } from '@/hooks/useLogin';
import { useAuthStore } from '@/store/authStore';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isLoading } = useLogin();
  const user = useAuthStore((state) => state.user);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login(email, password);
  };

  useEffect(() => {
    console.log(user, 'user in auth store');
  }, [user]);

  return (
    <form onSubmit={handleSubmit}>
      <h3>Log in</h3>
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
      <button disabled={isLoading !== null ? isLoading : undefined}>
        Log in
      </button>
      {error && <div>{error.error}</div>}
    </form>
  );
};

export default Login;
