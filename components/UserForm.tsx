import React, { FC, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { Types, set } from 'mongoose';
import { useAuthStore } from '@/store/authStore';
import { useUserProfileStore } from '@/store/userProfileStore';

interface UserResponseData {
  data: User;
  status: number;
}

interface User {
  _id: Types.ObjectId;
  name: string;
  email: string;
  description: string;
  location: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserForm: FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState<null | string>(null);

  const user = useAuthStore((state) => state.user);
  const updateUser = useAuthStore((state) => state.updateUser);

  const userProfile = useUserProfileStore((state) => state.userProfile);
  const updateProfile = useUserProfileStore((state) => state.updateProfile);

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    const user = { name, email, description, location };
    try {
      // await axios.post<UserResponseData>('/api/users', user);
    } catch (error) {
      const err = error as AxiosError;
      throw new Error(err.message);
    }
  };

  return (
    <form className='flex flex-col items-center' onSubmit={handleSubmit}>
      <h3 className='text-2xl'>Create New User</h3>
      <label>Name:</label>
      <input
        type='text'
        value={userProfile.userName}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Description:</label>
      <input
        type='text'
        value={userProfile.description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label>Location:</label>
      <input
        type='text'
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button>Create User</button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default UserForm;
