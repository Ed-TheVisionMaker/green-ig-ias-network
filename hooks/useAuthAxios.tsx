import axios from 'axios';
import { useEffect } from 'react';
import { useAuthStore } from '@/store/authStore';

const useAuthAxios = () => {
  const token = useAuthStore((state) => state.user.token);

  const authAxios = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return authAxios;
};

export default useAuthAxios;
