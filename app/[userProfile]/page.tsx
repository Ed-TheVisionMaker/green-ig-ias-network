'use client';

import { FC, useEffect, useState } from 'react';
import { useAuthContext } from '@/hooks/useAuthContext';
import axios from 'axios';
  
interface UserProfile {
  userId: string;
  name: string;
  location: string;
  description?: string;
  profilePhoto?: string;
}

const userProfile: FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>();
  const {
    state: { user },
  } = useAuthContext();

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (user) {
        try {
          const response = await axios.get<UserProfile>(
            `api/user-profile/${user.userId}`
          );
          setUserProfile(response.data);
        } catch (error) {
          if (axios.isAxiosError(error) && error.response?.status === 404) {
            setUserProfile({
              userId: user.userId,
              name: '',
              location: '',
              description: '',
              profilePhoto: '',
            });
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
      <h3>userProfile</h3>
      <p>{userProfile?.userId}</p>
    </div>
  );
};

export default userProfile;
