import { create } from 'zustand';

export type authStore = {
  user: {
    userId: string;
    email: string;
    token: string;
  };
  userLoggedIn: (user: authStore['user']) => void;
  logout: () => void;
};

export const useAuthStore = create<authStore>((set) => ({
  user: {
    userId: '',
    email: '',
    token: '',
  },
  userLoggedIn: (user: authStore['user']) => set({ user }),
  logout: () => set({ user: { userId: '', email: '', token: '' } }),
}));
