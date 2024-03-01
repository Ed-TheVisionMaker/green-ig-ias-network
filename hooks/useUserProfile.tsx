import { useState } from 'react';
import axios from 'axios';
import { useUserProfileContext } from './useUserProfileContext';
import { UserProfile } from '@/interfaces/user';

type ErrorMessage = {
  error: string;
};

export const useUserProfile = () => {
  const [error, setIsError] = useState<ErrorMessage | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const { dispatch } = useUserProfileContext();

  const createUserProfile = async (userProfile: UserProfile) => {
    try {
      const response = await axios.post('api/user/', {
        userProfile,
      });
      const newUserProfile = response.data;

      dispatch({ type: 'UPDATE', payload: newUserProfile });
    } catch (error: any) {
      setIsLoading(false);
      setIsError(error.response.data);
    }
  };

  const updateUserProfile = async () => {
    setIsLoading(true);
    setIsError(null);
  };

  return {
    createUserProfile,
    updateUserProfile,
    isLoading,
    error,
  };
};
