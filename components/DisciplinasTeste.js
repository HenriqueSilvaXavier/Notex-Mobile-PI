import React, { useState, useEffect, useContext } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../contexts/AuthContext';
import { ClassContext } from '../contexts/ClassContext';
import SquareRootOfX from '../assets/squareRoot';
import GlobeSVG from '../assets/globe';
import DoisPontosSVG from '../assets/DoisPontosSVG';

export default function DisciplinasOverview() {
  const navigation = useNavigation();
  const { authData } = useContext(AuthContext);
  const { token } = authData;
  const { classData } = useContext(ClassContext);
  const { id } = classData;
  const [disciplinas, setDisciplinas] = useState([]);

  useEffect(() => {
    const fetchDisciplinas = async () => {
      try {
        const response = await fetch(`http://192.168.1.12:4000/subjects/classe/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Erro ao buscar disciplinas');
        }

        const data = await response.json();
        setDisciplinas(data.subjects || []);
      } catch (error) {
        console.error('Erro ao buscar disciplinas:', error);
        setDisciplinas([]);
      }
    };

    if (id && token) {
      fetchDisciplinas();
    }
  }, [id, token]);

  return (
    <View style={styles.DisciplinasContainer}>
      <Text style={styles.DisciplinasTitulo}>Disciplinas</Text>
      <View style={styles.descricaoFlex}>
        <Text style={styles.DisciplinasDescricao}>Suas disciplinas</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Disciplinas')} style={styles.verTudoContainer}>
          <Text style={styles.verTudo}>Ver tudo</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.DisciplinasFlex}>
        {disciplinas.map((disciplina) => (
          <ImageBackground
            key={disciplina.id}
            source={getDisciplinaBackground(disciplina.name)}
            style={styles.card}
            imageStyle={styles.ImageBackground}
          >
            <View style={styles.header}>
              {disciplina.name === 'Matemática' ? (
                <SquareRootOfX style={styles.squareRoot} />
              ) : disciplina.name === 'Geografia' ? (
                <GlobeSVG />
              ) : null }
              <TouchableOpacity style={styles.doisPontos}>
                <DoisPontosSVG />
              </TouchableOpacity>
            </View>
            <Text style={styles.cardText}>{disciplina.name}</Text>
          </ImageBackground>
        ))}
      </View>
    </View>
  );
}

function getDisciplinaBackground(name) {
  switch (name) {
    case 'Matemática':
      return require('../assets/DisciplinaMatematicaFundo.png');
    case 'Geografia':
      return require('../assets/DisciplinaGeografiaFundo.png');
    default:
      return require('../assets/DisciplinaGeografiaFundo.png'); // Fundo padrão para disciplinas não reconhecidas
  }
}

const styles = StyleSheet.create({
  DisciplinasContainer: {
    width: '89%',
    paddingHorizontal: 20,
  },
  DisciplinasTitulo: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 20,
  },
  descricaoFlex: {
    flexDirection: 'row',
    marginBottom: 7,
  },
  DisciplinasDescricao: {
    fontFamily: 'Nunito_500Medium',
    color: 'rgba(188, 193, 205, 1)',
  },
  verTudo: {
    marginLeft: 120,
  },
  verTudoContainer: {
    backgroundColor: 'transparent',
  },
  DisciplinasFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  card: {
    flex: 1,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 15,
    padding: 10,
    justifyContent: 'space-between',
    height: 120,
  },
  cardText: {
    color: '#fff',
    fontFamily: 'Nunito_700Bold',
    fontSize: 16,
  },
  ImageBackground: {
    borderRadius: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  doisPontos: {
    marginLeft: 10,
  },
});
