import React, { useEffect, useState, useContext } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import TopFlex from "../components/TopFlex";
import SearchContainer from "../components/SearchContainer";
import { useClass } from '../contexts/ClassContext'; // Usando o hook para acessar o contexto
import { AuthContext } from '../contexts/AuthContext';
import { SearchContext } from "../contexts/SearchContext";

const Conceitos = () => {
  const { classData } = useClass(); // Obtendo o classData usando o hook
  const { id } = classData; // classeId
  const { authData } = useContext(AuthContext);
  const { studentId, token } = authData;
  const [disciplinas, setDisciplinas] = useState([]);
  const [conceitos, setConceitos] = useState([]);
  const [loading, setLoading] = useState(true); // Controle de carregamento
  const { pesquisa, setPesquisa } = useContext(SearchContext);

  useEffect(() => {
    const fetchDisciplinas = async () => {
      try {
        const response = await fetch(`http://192.168.1.12:4000/subjects/classe/${id}`, {
            method: "GET",
            headers: {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });
        const data = await response.json();
        setDisciplinas(data.subjects);
      } catch (error) {
        console.error("Erro ao buscar disciplinas:", error);
      }
    };

    const fetchConceitos = async () => {
      try {
        const response = await fetch(`http://192.168.1.12:4000/concepts/student/${studentId}`, {
            method: "GET",
            headers: {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });
        const data = await response.json();
        setConceitos(data.concepts);
      } catch (error) {
        console.error("Erro ao buscar conceitos:", error);
      }
    };

    if (id && studentId) {
      fetchDisciplinas();
      fetchConceitos();
    }

    setLoading(false);  // Após carregar as informações
  }, [id, studentId]);

  // Função para converter conceito em valor numérico
  const getConceitoValue = (conceito) => {
    switch (conceito) {
      case "RUIM":
        return 1;
      case "INSUFICIENTE":
        return 2;
      case "BOM":
        return 3;
      case "ÓTIMO":
        return 4;
      case "EXCELENTE":
        return 5;
      default:
        return null;
    }
  };

  // Mapeando os conceitos para as disciplinas correspondentes
  const getConceitoFromValue = (value) => {
    if (value <= 2) return "RUIM";
    if (value <= 4) return "INSUFICIENTE";
    if (value <= 6) return "BOM";
    if (value <= 8) return "ÓTIMO";
    return "EXCELENTE";
  };

  const disciplinasFiltradas = disciplinas.filter(disciplina =>
    (disciplina.name || '').toLowerCase().includes((pesquisa || '').toLowerCase())
  );

  // Mapeando os conceitos para as disciplinas correspondentes
  const dados = disciplinasFiltradas.map(disciplina => {
    const conceito = conceitos.find(con => con.subjectId === disciplina.id);
    const av1Value = conceito ? getConceitoValue(conceito.av1) : null;
    const av2Value = conceito ? getConceitoValue(conceito.av2) : null;
  
    let soma = null;
    let somaEmConceito = "";
    let situacao = null;
  
    // Só calcula a média e situação se ambos os valores de AV1 e AV2 estiverem preenchidos
    if (av1Value !== null && av2Value !== null) {
      soma = av1Value + av2Value; // Média real
      somaEmConceito = getConceitoFromValue(soma); // Média em conceito
      situacao = soma > 4 ? "Aprovado" : "Reprovado"; // Critério de aprovação
    }
  
    return {
      disciplina: disciplina.name,
      av1: conceito ? conceito.av1 : "",
      av2: conceito ? conceito.av2 : "",
      somaEmConceito: somaEmConceito,
      situacao: situacao,
    };
  });

useFocusEffect(
  React.useCallback(() => {
      setPesquisa(""); // Reseta a pesquisa ao focar na página
  }, [setPesquisa])
);

  const renderHeader = () => (
    <View style={[styles.row, styles.headerRow]}>
      <Text style={[styles.cell, styles.headerText]}>Disciplina</Text>
      <Text style={[styles.cell, styles.headerText]}>AV1</Text>
      <Text style={[styles.cell, styles.headerText]}>AV2</Text>
      <Text style={[styles.cell, styles.headerText]}>Média</Text>
      <Text style={[styles.cell, styles.headerText]}>Situação</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.disciplina}</Text>
      <Text style={styles.cell}>{item.av1}</Text>
      <Text style={styles.cell}>{item.av2}</Text>
      <Text style={styles.cell}>{item.somaEmConceito}</Text>
      <Text style={styles.cell}>{item.situacao}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TopFlex titulo="Conceitos" />
      <SearchContainer />
      <FlatList
        data={dados}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={renderHeader}
        renderItem={renderItem}
        style={styles.tabela}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f8f8",
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 10,
  },
  headerRow: {
    backgroundColor: "#f0f0f0",
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
  },
  cell: {
    flex: 1,
    textAlign: "center",
    fontSize: 12,
    color: "#333",
  },
  headerText: {
    fontWeight: "bold",
    color: "#555",
  },
  tabela: {
    marginTop: 20,
  },
});

export default Conceitos;
