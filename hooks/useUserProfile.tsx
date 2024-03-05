import { useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { useUserProfileContext } from './useUserProfileContext';
import { UserProfile } from '@/interfaces/user';

export const useUserProfile = () => {
  const [error, setIsError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const { dispatch } = useUserProfileContext();
  const params = useParams()
  console.log(params, "id")

  const updateUserProfile = async (userProfile: Partial<UserProfile>) => {
    setIsLoading(true);
    setIsError(null);

    try {
      const response = await axios.patch(`/api/user/${id}`, userProfile);
      const updatedProfile = response.data;

      dispatch({ type: 'UPDATE', payload: updatedProfile });
    } catch (error: any) {
      setIsError(error.message);
    }
  };

  return {
    updateUserProfile,
    isLoading,
    error,
  };
};
