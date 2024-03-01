import { FC, useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { Schema } from 'mongoose';

type Params = {
  profile: string;
};

interface UserProfile {
  userId: Schema.Types.ObjectId;
  name: string;
  location: string;
  description?: string;
  profilePhoto?: string;
}

const userProfile: FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>();
  const { profile } = useParams() as Params;

  useEffect(() => {
    async () => {
      await axios.post(`api/user/${profile}`);
    };
  }, []);
  return (
    <div>
      <h3>userProfile</h3>
      <p>{userProfile?.name}</p>
    </div>
  );
};

export default userProfile;
