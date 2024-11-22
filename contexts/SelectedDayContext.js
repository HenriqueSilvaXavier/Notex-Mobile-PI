import React, { createContext, useState } from 'react';
import moment from 'moment';

export const SelectedDayContext = createContext();

export const SelectedDayProvider = ({ children }) => {
  const [selectedDay, setSelectedDay] = useState(moment()); // Define o dia selecionado como o dia atual.
  const hoje = new Date();
  const diaSemanaAtual = hoje.getDay(); // Retorna um número de 0 a 6
  const [diaSelecionado, setDiaSelecionado]=useState(diaSemanaAtual);
  return (
    <SelectedDayContext.Provider value={{ selectedDay, setSelectedDay, diaSelecionado, setDiaSelecionado }}>
      {children}
    </SelectedDayContext.Provider>
  );
};
