import { createStore } from 'zustand/vanilla';

export type UserState = {
  user: {
    email: string;
    token: string;
  };
};

// zustand creates a custom hook
export const useAuthStore = createStore<UserState>(() => ({
  user: {
    email: '',
    token: '',
  },
}));
