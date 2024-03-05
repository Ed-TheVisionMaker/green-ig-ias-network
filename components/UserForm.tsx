import React, { FC, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { Types, set } from 'mongoose';
import { useAuthStore } from '@/store/authStore';
import { useUserProfileStore } from '@/store/userProfileStore';
import { UserProfile } from '@/interfaces/user';


const UserForm: FC = () => {
  const [formState, setFormState] = useState< Partial<UserProfile>>({
    userName: '',
    description: '',
    location: '',
  });

  const user = useAuthStore((state) => state.user);
  const updateUser = useAuthStore((state) => state.updateUser);

  const userProfile = useUserProfileStore((state) => state.userProfile);

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
      <input
        type='text'
        value={userProfile.userName}
      />
      <label>Description:</label>
      <input
        type='text'
        value={userProfile.description}
      />
      <label>Location:</label>
      <input
        type='text'
        value={formState.location}
      />
      <button>Update Profile</button>
      {/* {error && <div>{error}</div>} */}
    </form>
  );
};

export default UserForm;
