'use client';

import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import UserForm from '@/components/UserForm';
import { UserProfile } from '@/interfaces/user';
import { useAuthStore } from '@/store/authStore';

const userProfile: FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    userId: '',
    userName: '',
    location: '',
    description: '',
  });

  const user  = useAuthStore((state) => state.user);


  useEffect(() => {
    const fetchUserProfile = async () => {
      console.log(user, "fetchUserProfile user in auth store")
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
