import React, { createContext, useContext, useState } from 'react';

// Criação do contexto
export const AuthContext = createContext();

// Criação do hook useAuth
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Provedor de autenticação
export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({ CPF: '', senha: '', token: '', nome: '', foto: ''});

  return (
    <AuthContext.Provider value={{ authData, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};
