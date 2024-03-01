import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { UserProfile } from '@/interfaces/user';

const useUserProfile = () => {
  const [isNewProfile, setIsNewProfile ] = useState<boolean | null>(null)
  const [userProfile, setUserProfile] = useState<UserProfile>({
        userId: '',
        name: '',
        description: '',
        location: '',

    })

    const updateUser = async () => {
    
    }
    const {dispatch} =  useAuthContext();


} 