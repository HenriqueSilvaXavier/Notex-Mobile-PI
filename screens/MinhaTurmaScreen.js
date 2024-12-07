import React, {useContext, useState} from "react";
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, SafeAreaView, Image, FlatList } from "react-native";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import TopFlex from "../components/TopFlex";
import SearchContainer from "../components/SearchContainer";
import DiasDaSemana from '../components/DiasDaSemana';
import Icon from 'react-native-vector-icons/Ionicons';
import JulieWatsonSVG from "../assets/JulieWatsonSVG";
import { SelectedDayContext } from '../contexts/SelectedDayContext';
import MarkPointCinza from "../assets/MarkPointCinza";
import { useFonts, Poppins_600SemiBold, Poppins_500Medium, Poppins_400Regular, } from "@expo-google-fonts/poppins";
import { Nunito_500Medium } from "@expo-google-fonts/nunito";
import ChapeuDeBecaSVG from "../assets/chapeuDeBeca";
import LibrarySVG from "../assets/Libary";
import MailSVG from "../assets/MailSVG";
import MenuInferior from "../components/MenuInferior";
import { useNavigation } from "@react-navigation/native";
import { SearchContext } from "../contexts/SearchContext";
import Timetable from "../assets/timetable";

function MinhaTurma() {
  const navigation = useNavigation();
  const [fontLoaded] = useFonts({
    Nunito_500Medium,
    Poppins_600SemiBold,
    Poppins_500Medium,
    Poppins_400Regular,
  });
  const { diaSelecionado } = useContext(SelectedDayContext);
  const { pesquisa, setPesquisa } = useContext(SearchContext);

  const [events, setEvents] = useState({
    '6': [
      {
        subject: 'Entrega de atividade',
        chapter: 'Disciplina: Gramática',
        location: 'Sala 205',
        teacher: 'Julie Watson',
        startTime: '13:15',
        endTime: '14:45',
        photo: JulieWatsonSVG,
      },
    ],
  });

  const dayEvents = events[diaSelecionado] || [];
  const event = dayEvents[0];

  const topics = [
    { id: 1, label: 'Estudantes', icon: <ChapeuDeBecaSVG />, route: 'Estudantes' },
    { id: 2, label: 'Disciplinas', icon: <LibrarySVG />, route: 'Disciplinas' },
    { id: 3, label: 'Comunicados', icon: <MailSVG />, route: 'Comunicados' },
    { id: 4, label: 'Horário', icon: <Timetable />, route: 'Horario' },
  ];

  // Filtro dos tópicos com base na pesquisa
  const filteredTopics = topics.filter(topic =>
    topic.label.toLowerCase().includes(pesquisa.toLowerCase())
  );

  useFocusEffect(
    React.useCallback(() => {
      setPesquisa(''); // Reseta a pesquisa ao focar na página
    }, [setPesquisa])
  );

  return (
    <SafeAreaView style={styles.MinhaTurmaContainer}>
      <TopFlex titulo="Minha Turma" />
      <SearchContainer />
      <ScrollView style={styles.container}>
        <DiasDaSemana />
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Agenda</Text>
            <Icon
              name="chevron-down-circle-outline"
              size={20}
              color="white"
              style={styles.chevron}
            />
          </View>
          {event ? (
            <View style={styles.content}>
              <View style={styles.timeContainer}>
                <Text style={styles.time}>{event.startTime}</Text>
                <Text style={styles.endTime}>{event.endTime}</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.title}>{event.subject}</Text>
                <Text style={styles.subtitle}>{event.chapter}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <MarkPointCinza />
                  <Text style={styles.room}>{event.location}</Text>
                </View>
                <View style={styles.teacherContainer}>
                  <JulieWatsonSVG />
                  <Text style={styles.teacher}>{event.teacher}</Text>
                </View>
              </View>
            </View>
          ) : (
            <Text style={styles.noEvents}>Nenhum evento para este dia</Text>
          )}
        </View>
        {filteredTopics.map(topic => (
          <TouchableOpacity
            key={topic.id}
            style={styles.topicContainer}
            onPress={() => navigation.navigate(topic.route)}
          >
            {topic.icon}
            <Text style={styles.topicText}>{topic.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <MenuInferior overviewProp={false} calendarProp={true} />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  MinhaTurmaContainer: {
    flex: 1,
  },
  card: {
    borderRadius: 10,
    marginBottom: 20,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#5162AC',
    alignItems: 'center',
    padding: 10,
    borderTopStartRadius: 6,
    borderTopEndRadius: 6,
  },
  headerText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Nunito_500Medium'
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'rgba(198, 198, 198, 1)',
    borderWidth: 1,
    borderBottomStartRadius: 6,
    borderBottomEndRadius: 6,
  },
  time: {
    color: '#212525',
    fontSize: 18,
    fontFamily: 'Poppins_500Medium'
  },
  endTime: {
    color: '#BCC1CD',
    fontSize: 18,
    fontFamily: 'Poppins_500Medium'
  },
  info: {
    marginLeft: 16,
  },
  title: {
    color: '#212525',
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold'
  },
  subtitle: {
    color: '#212525',
    fontSize: 14,
    fontFamily: 'Poppins_500Medium'
  },
  room: {
    color: '#212525',
    fontSize: 14,
    marginVertical: 4,
    marginLeft: 4,
    fontFamily: 'Poppins_400Regular'
  },
  teacherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
  },
  teacher: {
    color: '#212525',
    fontSize: 14,
    marginLeft: 4,
    fontFamily: 'Poppins_400Regular'
  },
  timeContainer:{
    flexDirection: 'column'
  },
  topicContainer:{
    flexDirection: 'row',
    backgroundColor: '#F0F0F0',
    width: 290,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
    padding: 5,
    alignItems: 'center'
  },
  topicText:{
    marginLeft: 5,
    fontSize: 16,
  }
});

export default MinhaTurma;
