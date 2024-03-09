'use client';

import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import UserForm from '@/components/UserForm';
import { UserProfile } from '@/interfaces/user';
import { useAuthStore } from '@/store/authStore';
import useAuthAxios from '@/hooks/useAuthAxios';

const userProfile: FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    userId: '',
    userName: '',
    location: '',
    description: '',
  });

  const router = useRouter();

  const user  = useAuthStore((state) => state.user);
  const authAxios = useAuthAxios();

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (user.token.length) {
        const response = await authAxios.get<UserProfile>(`api/user/${user.userId}`);
        setUserProfile(response.data);
      } else {
        router.push('/login');
      }
    }

    fetchUserProfile();
  }, [user]);

  return (
    <div>
      <UserForm />
    </div>
  );
};

export default userProfile;
