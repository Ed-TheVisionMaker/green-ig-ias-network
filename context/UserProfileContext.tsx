'use client';
import React, { createContext, useReducer, ReactNode, Dispatch } from 'react';
import { UserProfile } from '@/interfaces/user';

interface UserProfileState {
  userProfile: UserProfile | null;
}

type Action = { type: 'UPDATE'; payload: Partial<UserProfile> };

interface UserProfileContextType {
  state: UserProfileState;
  dispatch: Dispatch<Action>;
}

export const UserProfileContext = createContext<UserProfileContextType>({
  state: {
    userProfile: null,
  },
  dispatch: () => null,
});
export const UserProfileProvider = ({ children }: { children: ReactNode }) => {
  
  // userProfileReducer function definition
  function userProfileReducer(state: UserProfileState, action: Action) {
    switch (action.type) {
      case 'UPDATE':
        return {
          ...state,
          userProfile: {
            ...state.userProfile,
            ...action.payload,
          },
        };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(userProfileReducer, { userProfile: null });

  console.log('UserProfileContext', state);

  return (
    <UserProfileContext.Provider value={{ state, dispatch }}>
      {children}
    </UserProfileContext.Provider>
  );
};
