import React, { createContext, useContext, useState } from 'react';

// Criação do contexto
export const SearchContext = createContext();


// Provedor de autenticação
export const SearchProvider = ({ children }) => {
  const [pesquisa, setPesquisa] = useState('');

  return (
    <SearchContext.Provider value={{ pesquisa, setPesquisa }}>
      {children}
    </SearchContext.Provider>
  );
};
