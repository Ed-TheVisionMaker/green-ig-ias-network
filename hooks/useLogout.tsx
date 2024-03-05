import { useAuthStore } from '@/store/authStore';

export const useLogout = () => {
  const logoutUser = useAuthStore((state) => state.logout);

  const logout = () => {
    logoutUser();
    localStorage.removeItem('user');

  };

  return { logout };
};
