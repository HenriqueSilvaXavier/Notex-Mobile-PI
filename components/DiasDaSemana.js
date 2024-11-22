import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import moment from 'moment';
import { SelectedDayContext } from '../contexts/SelectedDayContext';

export default function DiasDaSemana({ mostrarDias }) {
  const diasDaSemana = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
  const { selectedDay, setSelectedDay, diaSelecionado, setDiaSelecionado } = useContext(SelectedDayContext);

  const handleDay = (day, index) => {
    if (mostrarDias) {
      setSelectedDay(day);
    } else {
      setDiaSelecionado(index);
    }
  };

  const getWeekDays = () => {
    const startOfWeek = moment().startOf('week');
    return Array.from({ length: 7 }, (_, index) =>
      startOfWeek.clone().add(index, 'days')
    );
  };

  return (
    <View style={styles.weekContainer}>
      {getWeekDays().map((day, index) => (
        <TouchableOpacity
          key={mostrarDias ? day.format('YYYY-MM-DD') : index}
          onPress={() => handleDay(day, index)}
          style={[
            styles.dayContainer,
            mostrarDias && selectedDay && selectedDay.isSame(day, 'day') && styles.selectedDay,
            !mostrarDias && diaSelecionado === index && styles.selectedDay,
          ]}
        >
          <View style={styles.dayTextContainer}>
            <Text style={styles.weekdayLetter}>{diasDaSemana[index]}</Text>
            {mostrarDias && (
              <Text style={styles.dayText}>{day.format('D')}</Text>
            )}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  weekContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  dayContainer: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    width: '13%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedDay: {
    backgroundColor: '#5162AC',
  },
  dayTextContainer: {
    alignItems: 'center',
  },
  weekdayLetter: {
    fontSize: 12,
    color: '#333',
    fontWeight: 'bold',
  },
  dayText: {
    fontSize: 16,
    color: '#333',
  },
});
