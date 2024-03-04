'use client';
import React, { createContext, useReducer, ReactNode, Dispatch } from 'react';
import { UserProfile } from '@/interfaces/user';

interface UserProfileState {
  userProfile: UserProfile | null;
}

type Action = { type: 'UPDATE'; payload: Partial<UserProfile> };

interface UserProfileContextType {
  state: UserProfileState | null;
  dispatch: Dispatch<Action>;
}

export const UserProfileContext = createContext<UserProfileContextType | null>({
  state: {
    userProfile: null,
  },
  dispatch: () => null,
});

export const userProfileReducer = (state: UserProfileState, action: Action) => {
  switch (action.type) {
    case 'UPDATE':
      return {
        ...state,
        userProfie: {
          ...state.userProfile,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
export const UserProfileProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(userProfileReducer, {
    userProfile: null,
  });

  console.log('UserProfileContext', state);

  return (
    <UserProfileContext.Provider value={{ state, dispatch }}>
      {children}
    </UserProfileContext.Provider>
  );
};
