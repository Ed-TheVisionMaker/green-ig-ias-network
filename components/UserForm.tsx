import React, { FC, useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { useAuthStore } from '@/store/authStore';
import { useUserProfileStore } from '@/store/userProfileStore';
import { UserProfile } from '@/interfaces/user';

const UserForm: FC = () => {
  const [formState, setFormState] = useState<Partial<UserProfile>>({
    userName: '',
    description: '',
    location: '',
  });

  const user = useAuthStore((state) => state.user);

  const userProfile = useUserProfileStore((state) => state.userProfile);
  const updateUserProfile = useUserProfileStore((state) => state.updateProfile);

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    try {
    } catch (error) {
      const err = error as AxiosError;
      throw new Error(err.message);
    }
  };

  return (
    <form className='flex flex-col items-center' onSubmit={handleSubmit}>
      <h3 className='text-2xl'>User Profile</h3>
      <label>Name:</label>
      <input type='text' value={user.userId} />
      <label>Description:</label>
      <input type='text' />
      <label>Location:</label>
      <input type='text' />
      <button>Update Profile</button>
      {/* {error && <div>{error}</div>} */}
    </form>
  );
};

export default UserForm;
