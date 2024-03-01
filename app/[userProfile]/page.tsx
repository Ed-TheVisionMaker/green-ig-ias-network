'use client';

import { FC, useEffect, useState } from 'react';
import { useAuthContext } from '@/hooks/useAuthContext';
import axios from 'axios';
import { Schema } from 'mongoose';

interface UserProfile {
  userId: Schema.Types.ObjectId;
  name: string;
  location: string;
  description?: string;
  profilePhoto?: string;
}

const userProfile: FC = () => {
  // const [userProfile, setUserProfile] = useState<UserProfile | null>();
  const {
    state: { user },
  } = useAuthContext();

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (user) {
        try {
          const response = axios.get(`api/user/${user.id}`);
        } catch (error) {
          throw new Error('Error fetching user profile');
        }
      }
    };
    fetchUserProfile();
  }, []);

  return (
    <div>
      <h3>userProfile</h3>
      <p>{userProfile?.name}</p>
    </div>
  );
};

export default userProfile;
