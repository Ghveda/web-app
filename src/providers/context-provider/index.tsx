'use client';
import { createContext, useContext, useState } from 'react';
import { IAppContext, Props, UserData } from './config';

const AppContext = createContext({});

export default function ContextProvider({ children }: Props) {
  const [userData, setUserData] = useState<UserData>();
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);

  const contextValue = {
    userData,
    setUserData,
    showRegistrationModal,
    setShowRegistrationModal,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext) as IAppContext;
