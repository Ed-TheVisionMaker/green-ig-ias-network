import React, { FC, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { Types, set } from 'mongoose';

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

  const handleSubmit = async (e: React.FormEvent) : Promise<void> => {
    e.preventDefault();
    const user = { name, email, description, location };
    try {
      await axios.post<UserResponseData>('/api/users', user);
      setName('');
      setEmail('');
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
    <form onSubmit={handleSubmit}>
      <h3>Create New User</h3>
      <label>Name:</label>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Email:</label>
      <input
        type='text'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
      <button>Create User</button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default UserForm;
