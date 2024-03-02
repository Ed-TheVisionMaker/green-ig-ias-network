import { useState } from 'react';
import axios from 'axios';
import { useUserProfileContext } from './useUserProfileContext';

type ErrorMessage = {
  error: string;
};

export const useUserProfile = () => {
  const [error, setIsError] = useState<ErrorMessage | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const { dispatch } = useUserProfileContext();

  const updateUserProfile = async () => {
    setIsLoading(true);
    setIsError(null);
  };

  return {
    updateUserProfile,
    isLoading,
    error,
  };
};
