'use client';

import { FC, useEffect, useState } from 'react';
import { useAuthContext } from '@/hooks/useAuthContext';
import axios from 'axios';
import UserForm from '@/components/UserForm';
import { UserProfile } from '@/interfaces/user';

import { useUserProfile } from '@/hooks/useUserProfile';

const userProfile: FC = () => {
  const [isNewProfile, setIsNewProfile ] = useState<boolean | null>(null)
  const [userProfile, setUserProfile] = useState<UserProfile>({
    userId: '',
    name: '',
    location: '',
    description: '',
})

const {createUserProfile} = useUserProfile();

  const {
    state: { user },
  } = useAuthContext();

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (user) {
        try {
          const response = await axios.get<UserProfile>(
            `api/user/${user.userId}`
          );
          setUserProfile(response.data);
          setIsNewProfile(false)
        } catch (error) {
          if (axios.isAxiosError(error) && error.response?.status === 404) {
            await createUserProfile({
              userId: user.userId
            })
            setIsNewProfile(true)
          } else {
            throw new Error('Error fetching user profile');
          }
        }
      }
    };

    fetchUserProfile();
  }, [user]);

  return (
    <div>
      <UserForm />
    </div>
  );
};

export default userProfile;
