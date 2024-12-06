import React, { useState, useEffect, useContext } from 'react'; 
import { useFocusEffect } from '@react-navigation/native';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import TopFlex from "../components/TopFlex";
import SearchContainer from "../components/SearchContainer";
import Icon from 'react-native-vector-icons/Ionicons';
import MenuInferior from "../components/MenuInferior";
import { AuthContext } from '../contexts/AuthContext'; // Verifique o caminho correto
import { ClassContext } from '../contexts/ClassContext'; // Verifique o caminho correto
import { SearchContext } from '../contexts/SearchContext';

function Disciplinas() {
  const { authData } = useContext(AuthContext);
  const { token } = authData;
  const { classData } = useContext(ClassContext);
  const { id } = classData;
  const [disciplinas, setDisciplinas] = useState([]);
  const navigation = useNavigation();
  const [professores, setProfessores] = useState({}); // Mudança para objeto
  const [expandedCards, setExpandedCards] = useState({
    1: true, // Primeiro card expandido por padrão
  });
  const { pesquisa, setPesquisa } = useContext(SearchContext);

  // Fetch disciplinas
  useEffect(() => {
    const fetchDisciplinas = async () => {
      try {
        const response = await fetch(`http://192.168.1.12:4000/subjects/classe/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Erro ao buscar disciplinas');
        }

        const data = await response.json();
        setDisciplinas(data.subjects || []); // Garante que sempre será um array

        const professorsData = {}; // Objeto para armazenar os dados dos professores
        for (let subject of data.subjects) {
          const professorResponse = await fetch(`http://192.168.1.12:4000/subjectClass/professor/${subject.id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
          });

          if (professorResponse.ok) {
            const professorData = await professorResponse.json();
            professorsData[subject.id] = professorData; // Associa o professor pelo id da disciplina
          }
        }

        setProfessores(professorsData); // Atualiza o estado com os dados dos professores
      } catch (error) {
        console.error('Erro ao buscar disciplinas:', error);
        setDisciplinas([]); // Reseta para array vazio em caso de erro
      }
    };

    if (id && token) {
      fetchDisciplinas();
    }
  }, [id, token]);

  const toggleExpand = (cardId) => {
    setExpandedCards((prev) => ({ ...prev, [cardId]: !prev[cardId] }));
  };
  const disciplinasFiltradas = disciplinas.filter(disciplina =>
    (disciplina.name || '').toLowerCase().includes((pesquisa || '').toLowerCase())
  );
  useFocusEffect(
    React.useCallback(() => {
        setPesquisa(""); // Reseta a pesquisa ao focar na página
    }, [setPesquisa])
  );
  return (
    <SafeAreaView style={styles.container}>
      <TopFlex titulo='Disciplinas' />
      <SearchContainer />
      <ScrollView style={styles.cardContainer}>
        {disciplinasFiltradas.length > 0 ? (
          disciplinasFiltradas.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => toggleExpand(item.id)}
            >
              <View style={[styles.card, expandedCards[item.id] ? styles.activeCard : styles.inactiveCard]}>
                <View style={styles.cardHeader}>
                  <Text style={[styles.subject, expandedCards[item.id] && styles.activeSubject]}>{item.name}</Text>
                  <Icon
                    name={expandedCards[item.id] ? 'chevron-down-circle-outline' : 'chevron-forward-circle-outline'}
                    size={20}
                    color={expandedCards[item.id] ? 'white' : 'black'}
                    style={styles.chevron}
                  />
                </View>
                <View style={styles.cardBody}>
                  {professores[item.id] && (
                    <Image
                      source={{ uri: professores[item.id].avatarUrl }}
                      style={styles.avatar}
                    />
                  )}
                  <Text style={[styles.teacher, expandedCards[item.id] && styles.activeTeacher]}>
                    {professores[item.id] ? professores[item.id].name : 'Carregando...'}
                  </Text>
                </View>
              </View>
              {expandedCards[item.id] && (
                <View style={styles.expandedContent}></View>
              )}
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.noData}>Nenhuma disciplina encontrada.</Text>
        )}
      </ScrollView>
      <MenuInferior overviewProp={false} calendarProp={true} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  cardContainer: {
    marginTop: 20,
  },
  card: {
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
    padding: 16,
    marginBottom: 0,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  activeCard: {
    backgroundColor: '#E91E63',
  },
  inactiveCard: {
    backgroundColor: '#F5F5F5',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subject: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 10,
  },
  activeSubject: {
    color: '#FFF',
  },
  cardBody: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  teacher: {
    fontSize: 14,
    marginLeft: 8,
    color: '#757575',
  },
  activeTeacher: {
    color: '#FFF',
  },
  expandedContent: {
    marginTop: 0,
    backgroundColor: '#FFF',
    borderTopWidth: 0,
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8,
    height: 100,
    borderColor: 'rgba(198, 198, 198, 1)',
    borderWidth: 1,
  },
  chevron: {
    position: 'absolute',
    right: 3,
  },
  avatar:{
    width: 17,
    height: 16,
    borderRadius: 3000
  }
});

export default Disciplinas;
