import React, { createContext, useReducer, ReactNode, Dispatch } from 'react';

interface User {
  id: string;
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
  console.log('AuthContext state', state);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
