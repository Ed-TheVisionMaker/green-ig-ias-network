import { useState } from 'react';
import axios from 'axios';
import { useAuthContext } from './useAuthContext';
import { useUserProfile } from './useUserProfile';

type ErrorMessage = {
  error: string;
};

export const useSignup = () => {
  const [error, setIsError] = useState<ErrorMessage | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const { dispatch } = useAuthContext();

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
      localStorage.setItem('user', JSON.stringify({ user }));

      // update the auth context
      dispatch({ type: 'LOGIN', payload: user });
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
