import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import axios from 'axios';

type ErrorMessage = {
  error: string;
};

export const useLogin = () => {
  const [error, setError] = useState<ErrorMessage | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const { dispatch } = useAuthContext();

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post('/api/user/login', { email, password });
      const user = response.data;

      localStorage.setItem('user', JSON.stringify(user));

      dispatch({ type: 'LOGIN', payload: user });
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
