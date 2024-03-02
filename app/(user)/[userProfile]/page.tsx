'use client';

import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import UserForm from '@/components/UserForm';
import { useAuthContext } from '@/hooks/useAuthContext';
import { UserProfile } from '@/interfaces/user';

const userProfile: FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    userId: '',
    name: '',
    location: '',
    description: '',
  });

  const {
    state: { user },
  } = useAuthContext();

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (user) {
        const response = await axios.get<UserProfile>(
          `api/user/${user.userId}`,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        setUserProfile(response.data);
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
