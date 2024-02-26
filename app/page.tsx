'use client';

import React, { FC, useEffect, useState } from 'react';
import UserForm from '@/components/UserForm';

const Home: FC = () => {
  const [users, setUsers] = useState<string[] | null>(null);
  useEffect(() => {
    const fetchUsers = async () => {
      // for production need cors and to change endpoints
      // currently local host handled in next.config.mjs rewrite function
      const response = await fetch('/api/users');
      const json = await response.json();
      console.log(json);
      if (response.ok) {
        setUsers(json);
      }
    };

    fetchUsers();
  }, []);
  return (
    <div>
      <UserForm />
    </div>
  );
};

export default Home;
