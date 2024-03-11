import { useAuthStore } from '@/store/authStore';
import localStorageAvailable from '@/utils/localStorage';

export const useLogout = () => {
  const logoutUser = useAuthStore((state) => state.logout);

  const logout = () => {
    logoutUser();
    if (localStorageAvailable()) {
      localStorage.removeItem('user');
    }
  };

  return { logout };
};
