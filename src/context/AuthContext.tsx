import React, { useReducer } from 'react';
import { createContext } from 'react';
import { authReducer } from './authReducer';

export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined
};

export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  signOut: () => void;
  changeFavoriteIcon: (iconName: string) => void;
  changeUsername: (name: string) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {

  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({ type: 'signIn' });
  };

  const signOut = () => {
    dispatch({ type: 'signOut' });
  };

  const changeFavoriteIcon = (iconName: string) => {
    dispatch({ type: 'changeFavIcon', payload: iconName });
  };

  const changeUsername = (name: string) => {
    dispatch({ type: 'changeUsername', payload: name });
  };

  return (
    <AuthContext.Provider value={{
      authState,
      signIn,
      signOut,
      changeFavoriteIcon,
      changeUsername
    }}>
      {children}
    </AuthContext.Provider>
  );
};
