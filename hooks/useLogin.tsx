import { useState } from 'react';
import axios from 'axios';
import { useAuthStore } from '@/store/authStore';

type ErrorMessage = {
  error: string;
};

export const useLogin = () => {
  const [error, setError] = useState<ErrorMessage | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const { userLoggedIn } = useAuthStore((state) => state);


  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post('/api/user/login', { email, password });
      const user = response.data;

      localStorage.setItem('user', JSON.stringify(user));
      userLoggedIn(user);
    } catch (error: any) {
      setIsLoading(false);
      setError(error.response.data);
    }
  };

  return {
    login,
    error,
    isLoading,
  };
};
