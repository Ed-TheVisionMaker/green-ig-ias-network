import React, { FC, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useUserProfile } from '@/hooks/useUserProfile';

interface UserResponseData {
  data: User;
  status: number;
}

interface User {
  _id: string;
  name: string;
  email: string;
  description: string;
  location: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserForm: FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState<null | string>(null);
  const { updateUserProfile } = useUserProfile();

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    const user = { name, description, location };
    try {
      updateUserProfile({
        name,
        description,
        location,
      })
      setName('');
      setDescription('');
      setLocation('');
      setError(null);
    } catch (error) {
      const err = error as AxiosError;
      setError(err.message);
      throw new Error(err.message);
    }
  };

  return (
    <form className='flex flex-col items-center' onSubmit={handleSubmit}>
      <h3 className='text-2xl'>User Profile</h3>
      <label>Name:</label>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Description:</label>
      <input
        type='text'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label>Location:</label>
      <input
        type='text'
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button>Update Profile</button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default UserForm;
