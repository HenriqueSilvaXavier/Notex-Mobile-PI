import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { Nunito_500Medium, Nunito_700Bold, Nunito_400Regular } from '@expo-google-fonts/nunito'
import { MaterialIcons } from "@expo/vector-icons";
import DocumentLockSVG from '../assets/DocumentLock';
import CalendarSVG from '../assets/calendarUnselected';
import RibbonSVG from '../assets/ribbon';
import CalendarioBrancoSVG from "../assets/calendarWhite";
import DoisPontosSVG from '../assets/DoisPontosSVG';

export default function CalendarioEAgenda({atividade, data, professor}) {
  const [fontLoaded]=useFonts({
    Poppins_400Regular,
    Nunito_500Medium,
    Nunito_700Bold, 
    Nunito_400Regular,
  });
  
  if(!fontLoaded){
    return null;
  };
  return (
    <View style={styles.CalendarioEAgendaContainer}>
        <Text style={styles.MinhaTurmaTitulo}>Calendário e Agenda</Text>
        <Text style={styles.MinhaTurmaDescricao}>Avaliação próxima</Text>
        <View style={styles.card}>
            <View style={styles.header}>
              <Text style={styles.title}>{atividade}</Text>
              <TouchableOpacity>
                  <DoisPontosSVG/>
                </TouchableOpacity>
            </View>
            <View style={styles.dataContainer}>
                <CalendarioBrancoSVG/>
                <Text style={styles.dataText}>{data}</Text>
            </View>
            <View style={styles.professorContainer}>
                <RibbonSVG/>
                <Text style={styles.professorText}>{professor}</Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  CalendarioEAgendaContainer:{
    marginTop: 8,
  },
  buttonWrapper: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  buttonGradient: {
    paddingVertical: 15,
    paddingHorizontal: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  MinhaTurmaTitulo:{
    fontFamily: 'Poppins_400Regular',
    fontSize: 20,
  },
  MinhaTurmaDescricao:{
    fontFamily: 'Nunito_500Medium',
    color: 'rgba(188, 193, 205, 1)'
  }, 
  card: {
    marginTop: 15,
    backgroundColor: "#182A88",
    borderRadius: 12,
    padding: 16,
    width: 270,
    height: 120,
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  ImageBackground:{
    borderRadius: 12,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: 'Poppins_400Regular',
    marginRight: 113,
  },
  dataText: {
    color: "#ddd",
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
  },
  professorText: {
    color: "#fff",
    marginLeft: 8,
    fontFamily: 'Poppins_400Regular',
  },
  dataContainer:{
    flexDirection: 'row',
  },
  professorContainer:{
    flexDirection: 'row',
  },
  header: {
    flexDirection: "row",
  },
});
