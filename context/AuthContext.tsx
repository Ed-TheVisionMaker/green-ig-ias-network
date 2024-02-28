'use client';

import React, {
  createContext,
  useEffect,
  useReducer,
  ReactNode,
  Dispatch,
} from 'react';

interface User {
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
}

type Action = { type: 'LOGIN'; payload: User } | { type: 'LOGOUT' };

interface AuthContextType {
  state: AuthState;
  dispatch: Dispatch<Action>;
}

export const AuthContext = createContext<AuthContextType | null>({
  state: {
    user: null,
  },
  dispatch: () => null,
});

export const authReducer = (state: AuthState, action: Action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        user: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if (user) {
      dispatch({ type: 'LOGIN', payload: user.response.data });
    }
  }, []);

  console.log('AuthContext state', state);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
