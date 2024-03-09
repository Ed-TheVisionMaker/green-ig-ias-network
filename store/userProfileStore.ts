import { create } from 'zustand';
import { UserProfile } from '@/interfaces/user';

export type userProfileStore = {
  userProfile: UserProfile;
  updateProfile: (
    updatedProfile: Partial<userProfileStore['userProfile']>
  ) => void;
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
