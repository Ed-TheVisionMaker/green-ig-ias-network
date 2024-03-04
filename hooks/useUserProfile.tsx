import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useUserProfileContext } from './useUserProfileContext';
import { UserProfile } from '@/interfaces/user';

export const useUserProfile = () => {
  const [error, setIsError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const { dispatch } = useUserProfileContext();
  const router = useRouter();
  const { userId } = router.query;

  const updateUserProfile = async (userProfile: Partial<UserProfile>) => {
    setIsLoading(true);
    setIsError(null);

    try {
      const response = await axios.patch(`/api/user/${userId}`, userProfile);
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
