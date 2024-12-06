import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from "react-native";
import Logo from "../assets/mediotec-mobile 8"; // Inclua a extensão correta do arquivo
import NotificationsSVG from "../assets/notifications";
import MinhaTurmaOverview from "../components/MinhaTurmaOverview";
import CalendarioEAgenda from "../components/CalendarioEAgenda";
import MenuInferior from "../components/MenuInferior";
import { useFonts, Nunito_500Medium } from "@expo-google-fonts/nunito";
import DisciplinasOverview from "../components/DisciplinasOverview";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { AuthContext } from '../contexts/AuthContext';
import React, { useContext, useState, useEffect } from 'react';
import { useClass } from '../contexts/ClassContext';
import ConceitosOverview from "../components/ConceitosOverview";
import SearchContainer from "../components/SearchContainer";
import { SearchContext } from "../contexts/SearchContext";

export default function Overview() {
  const { authData } = useContext(AuthContext);
  const { studentId, CPF, nome, token, foto } = authData;
  const { setClassData } = useClass();
  const navigation = useNavigation();
  const [fontLoaded] = useFonts({ Nunito_500Medium });
  const [responseData, setResponseData] = useState({ title: '', year: '', code: '', id: '' });
  const [scrolling, setScrolling] = useState(false);
  const { pesquisa, setPesquisa } = useContext(SearchContext);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://192.168.1.12:4000/studying/cpf/${CPF}`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Erro na requisição: " + response.status);
      }
      const data = await response.json();
      setResponseData({
        title: data.title,
        year: data.year,
        code: data.code,
        id: data.id
      });
      setClassData({ id: data.id });
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  useFocusEffect(
    React.useCallback(() => {
      setPesquisa(''); // Reseta a pesquisa ao focar na página
    }, [setPesquisa])
  );

  if (!fontLoaded) {
    return null;
  }

  const isMinhaTurmaSearch = 'Minha Turma'.toLowerCase().includes(pesquisa.toLowerCase());
  const isConceitosSearch = 'Conceitos'.toLowerCase().includes(pesquisa.toLowerCase());
  const isAgendaSearch = 'Agenda'.toLowerCase().includes(pesquisa.toLowerCase());
  const isCalendarioEAgendaSearch = 'Calendario e Agenda'.toLowerCase().includes(pesquisa.toLowerCase());
  const isDisciplinasSearch = 'Disciplinas'.toLowerCase().includes(pesquisa.toLowerCase());
  return (
    <SafeAreaView style={styles.OverviewContainer}>
      <View style={styles.TopFlex}>
        <Logo style={styles.Logo} width="60" height="24" />
        <Text style={styles.OlaNome}>Olá, {nome.split(' ')[0]}</Text>
        <View style={styles.notificationsAndPerson}>
          <View style={styles.NotificationsContainer}>
            <NotificationsSVG />
          </View>
          <Image
            source={{ uri: foto }}
            style={styles.avatar}
          />
        </View>
      </View>
      <SearchContainer />
      <ScrollView contentContainerStyle={styles.ScrollContainer}>
        <View style={styles.MainContainer}>
          {isConceitosSearch && isMinhaTurmaSearch ? (
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.HorizontalScrollContainer}
              onScroll={(event) => {
                const contentOffsetX = event.nativeEvent.contentOffset.x;
                setScrolling(contentOffsetX > 0);
              }}
              scrollEventThrottle={16}
            >
              <MinhaTurmaOverview turma={responseData.title} ano={responseData.year} id={responseData.code} />
              
              <ConceitosOverview rolagem={true}/>
            </ScrollView>
          ) : isMinhaTurmaSearch ? (
            <MinhaTurmaOverview turma={responseData.title} ano={responseData.year} id={responseData.code} />
          ) : isConceitosSearch ? (
            <ConceitosOverview rolagem={false}/>
          ) : null}
          {isCalendarioEAgendaSearch && <CalendarioEAgenda atividade="AV2 Biologia" data="28 de novembro" professor="Lucas Almeida" /> }
          {isAgendaSearch && <TouchableOpacity style={styles.AgendaView} onPress={() => navigation.navigate('Calendario')}> 
            <Text>Agenda</Text>
          </TouchableOpacity> }
          {isDisciplinasSearch && <DisciplinasOverview /> }
        </View>
      </ScrollView>
      <MenuInferior overviewProp={true} calendarProp={false} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  OverviewContainer: {
    flex: 1,
  },
  ScrollContainer: {
    paddingBottom: 70,
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
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
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
  notificationsAndPerson: {
    flexDirection: 'row',
    position: "absolute",
    top: 0,
    right: 15,
    gap: 3,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 3000,
  },
  HorizontalScrollContainer: {
    flexDirection: 'row',
    paddingHorizontal: "16%",
  },
  Conceitos:{
    marginRight: 30,
  }
});