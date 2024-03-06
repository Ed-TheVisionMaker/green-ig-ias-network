import { create } from 'zustand';

export type authStore = {
  user: {
    email: string;
    token: string;
  };
  userLoggedIn: (user: authStore['user']) => void;
  logout: () => void;
};

// zustand creates a custom hook
export const useAuthStore = create<authStore>((set) => ({
  user: {
    email: 'test email',
    token: 'test token',
  },
  userLoggedIn: (user: authStore['user']) => set({ user }),
  logout: () => set({ user: { email: '', token: '' } }),
}));

