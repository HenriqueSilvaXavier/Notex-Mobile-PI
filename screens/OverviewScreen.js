import { StyleSheet, View, Text, SafeAreaView, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "react-native-vector-icons"; // Importe ícones do react-native-vector-icons
import Logo from "../assets/mediotec-mobile 8";
import NotificationsSVG from "../assets/notifications";
import SearchSymbol from "../assets/search";
import MinhaTurmaOverview from "../components/MinhaTurmaOverview";
import CalendarioEAgenda from "../components/CalendarioEAgenda";
import MenuInferior from "../components/MenuInferior";
import { useFonts, Nunito_500Medium } from "@expo-google-fonts/nunito";
import Disciplinas from "../components/DisciplinasOverview";
import SearchContainer from "../components/SearchContainer";
import DisciplinasOverview from "../components/DisciplinasOverview";
import { useNavigation } from "@react-navigation/native";

export default function Overview() {
  const navigation=useNavigation();
  const [fontLoaded] = useFonts({
    Nunito_500Medium,
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.OverviewContainer}>
      <View style={styles.TopFlex}>
      <Logo style={styles.Logo} width="60" height="24" />
      <Text style={styles.OlaNome}>Olá, Pedro</Text>

      <View style={styles.NotificationsContainer}>
        <NotificationsSVG />
      </View>

      <Ionicons name="person-circle-outline" size={39} color="black" />
    </View>
      <SearchContainer/>
      <ScrollView contentContainerStyle={styles.ScrollContainer}>
        <View style={styles.MainContainer}>
          <MinhaTurmaOverview turma="1° Ano A" ano="2024" id="MT241A" />
          <CalendarioEAgenda
            atividade="AV2 Biologia"
            data="28 de novembro"
            professor="Lucas Almeida"
          />
          <TouchableOpacity style={styles.AgendaView} onPress={()=>navigation.navigate('Calendario')}>
            <Text>Agenda</Text>
          </TouchableOpacity>
          <DisciplinasOverview/>
        </View>
      </ScrollView>
      <MenuInferior overviewProp={true} calendarProp={false} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  OverviewContainer: {
    flex: 1, // Garante que o componente ocupe toda a tela
  },
  ScrollContainer: {
    paddingBottom: 70, // Compensa a altura do menu
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center", // Alinha o conteúdo verticalmente no centro
    marginTop: 25, // Adiciona espaço acima do campo de pesquisa
  },
  TopFlex: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    marginTop: 30,
  },
  OlaNome: {
    fontSize: 20,
    fontFamily: "Nunito_500Medium",
  },
  NotificationsContainer: {
    borderRadius: 3000,
    borderWidth: 1, // Largura da borda
    borderColor: "rgba(0, 0, 0, 0.1)", // Cor da borda
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    marginLeft: 100,
    marginRight: 5,
  },
  searchInput: {
    borderColor: "rgba(0, 0, 0, 0.15)",
    borderWidth: 1,
    borderRadius: 10,
    height: 35,
    width: 250,
    paddingLeft: 12,
    fontSize: 12,
  },
  searchIcon: {
    position: "absolute",
    right: 60, // Ajuste a posição do ícone
    top: "50%",
    transform: [{ translateY: -12 }], // Centraliza o ícone verticalmente
  },
  MainContainer: {
    marginTop: 15,
    alignItems: "center",
  },
  AgendaView: {
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#D9D9D9",
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
    marginBottom: 10,
  },
});
