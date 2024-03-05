import { useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { UserProfile } from '@/interfaces/user';
import { useUserProfileStore } from '@/store/userProfileStore';


export const useUserProfile = () => {
  const [error, setIsError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const updateProfile = useUserProfileStore((state) => state.updateProfile);


  const updateUserProfile = async (userProfile: Partial<UserProfile>) => {
    setIsLoading(true);
    setIsError(null);

    try {
      const response = await axios.patch(`/api/user/${id}`, userProfile);
      const updatedProfile = response.data;
      updateProfile(updatedProfile);

    } catch (error: any) {
      setIsError(error.message);
    }
  };

  return {
    isLoading,
    error,
  };
};
