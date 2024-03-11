import { useState } from 'react';
import axios from 'axios';
import { useAuthStore } from '@/store/authStore';
import localStorageAvailable from '@/utils/localStorage';

type ErrorMessage = {
  error: string;
};

export const useSignup = () => {
  const [error, setIsError] = useState<ErrorMessage | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const { userLoggedIn } = useAuthStore((state) => state);

  const signup = async (email: string, password: string) => {
    setIsLoading(true);
    setIsError(null);

    try {
      const response = await axios.post('/api/user/signup', {
        email,
        password,
      });
      const user = response.data;
      // save user to local storage (JWT and email property)
      if (localStorageAvailable()) {
        localStorage.setItem('user', JSON.stringify({ user }));
      }
      userLoggedIn(user);
    } catch (error: any) {
      setIsLoading(false);
      setIsError(error.response.data);
    }
  };

  return {
    signup,
    isLoading,
    error,
  };
};
