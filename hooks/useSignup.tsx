import { useState } from 'react';
import axios from 'axios';
import { useAuthContext } from './useAuthContect';

export const useSignup = () => {
  const [error, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const { dispatch } = useAuthContext();

  const signup = async (email: string, password: string) => {
    setIsLoading(true);
    setIsError(null);
    console.log('email', email, password, 'password');
    const response = await axios.post('http://localhost:4000/api/user/signup', { email, password });

    if (!response.data.success) {
      setIsLoading(false);
      setIsError(response.data.error);
    }

    if (response.data.success) {
      // save user to local storage (JWT and email property)
      localStorage.setItem('user', JSON.stringify({ response }));

      // update the auth context
      dispatch({ type: 'LOGIN', payload: response.data });
    }
  };

  return {
    signup,
    isLoading,
    error,
  };
};
