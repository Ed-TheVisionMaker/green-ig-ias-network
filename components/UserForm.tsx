import React, { FC, useState } from 'react';
import { useUserProfile } from '@/hooks/useUserProfile';
import { UserProfile } from '@/interfaces/user';

const UserForm: FC = () => {
  const { updateUserProfile, error, isLoading } = useUserProfile();
  const [formState, setFormState] = useState< Partial<UserProfile>>({
    userName: '',
    description: '',
    location: '',
  });

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    updateUserProfile(formState);
  };

  return (
    <form className='flex flex-col items-center' onSubmit={handleSubmit}>
      <h3 className='text-2xl'>User Profile</h3>
      <label>Name:</label>
      <input
        type='text'
        value={formState.userName}
        onChange={(e) => setFormState({ ...formState, userName: e.target.value })}
      />
      <label>Description:</label>
      <input
        type='text'
        value={formState.description}
        onChange={(e) => setFormState({ ...formState, description: e.target.value })}
      />
      <label>Location:</label>
      <input
        type='text'
        value={formState.location}
        onChange={(e) => setFormState({ ...formState, location: e.target.value })}
      />
      <button>Update Profile</button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default UserForm;
