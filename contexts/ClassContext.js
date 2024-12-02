import React, { createContext, useContext, useState } from 'react';

// Criação do contexto
export const ClassContext = createContext();

// Criação do hook useAuth
export const useClass = () => {
  const context = useContext(ClassContext);
  if (!context) {
    throw new Error('useClass must be used within an ClassProvider');
  }
  return context;
};

// Provedor de autenticação
export const ClassProvider = ({ children }) => {
  const [classData, setClassData] = useState({ id: ''});

  return (
    <ClassContext.Provider value={{ classData, setClassData }}>
      {children}
    </ClassContext.Provider>
  );
};
