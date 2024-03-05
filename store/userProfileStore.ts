import { create } from 'zustand';

export type userProfileStore = {
  userProfile: {
    _id?: string;
    userId: string;
    userName: string;
    description: string;
    location: string;
    profilePic: string;
    createdAt?: Date;
    updatedAt?: Date;
  };
  updateProfile: (updatedProfile: Partial<userProfileStore['userProfile']>) => void;
};

export const useUserProfileStore = create<userProfileStore>((set) => ({
  userProfile: {
    userId: '',
    userName: '',
    description: '',
    location: '',
    profilePic: '',
  },
  updateProfile: (updatedProfile: Partial<userProfileStore['userProfile']>) =>
    set((state) => ({
      userProfile: {
        ...state.userProfile,
        ...updatedProfile,
      },
    })),
}));
