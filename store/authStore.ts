import { create } from 'zustand';

export type AuthStore = {
  user: {
    email: string;
    token: string;
  };
};

// zustand creates a custom hook
export const useAuthStore = create<AuthStore>(() => ({
  user: {
    email: 'test email',
    token: 'test token',
  },
}));
