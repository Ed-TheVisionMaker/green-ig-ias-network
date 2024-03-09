import axios, { AxiosInstance } from 'axios';
import { useAuthStore } from '@/store/authStore';

const useAuthAxios = (): AxiosInstance => {
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
