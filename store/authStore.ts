import { create } from 'zustand';

export type authStore = {
  user: {
    email: string;
    token: string;
  };
  updateUser: (user: authStore['user']) => void;
};

// zustand creates a custom hook
export const useAuthStore = create<authStore>((set) => ({
  user: {
    email: 'test email',
    token: 'test token',
  },
  updateUser: (user: authStore['user']) => set({ user }),
}));
