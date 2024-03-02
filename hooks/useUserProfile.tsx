import { useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { useUserProfileContext } from './useUserProfileContext';
import { UserProfile } from '@/interfaces/user';

type ErrorMessage = {
  error: string;
};

type Params = {
  id: string;
};

export const useUserProfile = () => {
  const [error, setIsError] = useState<ErrorMessage | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const { dispatch } = useUserProfileContext();
  const { id } = useParams() as Params;

  const updateUserProfile = async (userProfile: UserProfile) => {
    setIsLoading(true);
    setIsError(null);

    try {
      const response = await axios.patch(`/api/user/${id}`, userProfile);
      const updatedProfile = response.data;

      dispatch({ type: 'UPDATE', payload: updatedProfile });
    } catch (error) {}
  };

  return {
    updateUserProfile,
    isLoading,
    error,
  };
};
