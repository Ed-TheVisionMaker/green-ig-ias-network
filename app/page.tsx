'use client';

import React, { FC, useEffect, useState } from 'react';

const Home: FC = () => {
  const [users, setUsers] = useState<string[] | null>(null);
  useEffect(() => {
    const fetchUsers = async () => {
      // don't need localhost - react doesn't recognise it as a valid origin
      // proxy in front of the server handles this in package.json
      // for production need cors and to change endpoints
      const response = await fetch('/api/users');
      const json = await response.json();
      console.log(json)
      if (response.ok) {
        setUsers(json);
      }
    };

    fetchUsers();
  }, []);
  return <div>home</div>;
};

export default Home;
