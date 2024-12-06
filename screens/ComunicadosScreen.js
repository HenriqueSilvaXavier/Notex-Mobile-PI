import React, { useState, useEffect, useContext } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import TopFlex from "../components/TopFlex";
import { useNavigation } from '@react-navigation/native';
import SearchContainer from "../components/SearchContainer";
import MenuInferior from "../components/MenuInferior";
import { AuthContext } from "../contexts/AuthContext";
import { SearchContext } from "../contexts/SearchContext";

const Comunicados = () => {
  const { authData } = useContext(AuthContext);
  const { token } = authData; // Pega o token aqui
  const [comunicados, setComunicados] = useState([]); // Estado para armazenar os comunicados
  const [loading, setLoading] = useState(true); // Estado para indicar se os dados estão sendo carregados
  const { pesquisa, setPesquisa } = useContext(SearchContext);

  useEffect(() => {
    // Função para buscar os dados da API
    const fetchComunicados = async () => {
      try {
        const response = await fetch("http://192.168.1.12:4000/reports", {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        // Transformando os dados para o formato que a FlatList espera
        const comunicadosData = data.reports.map(report => ({
          id: String(report.id), // Garantir que o id seja uma string
          titulo: report.title,
          autor: report.creator.name,
          data: new Date(report.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
          descricao: report.description,
        }));
        setComunicados(comunicadosData);
        console.log(comunicadosData);
      } catch (error) {
        console.error("Erro ao buscar comunicados:", error);
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    };

    fetchComunicados(); // Chama a função de busca ao carregar o componente
  }, [token]); // Agora depende do token, para garantir que ele seja atualizado caso mude
  const comunicadosFiltrados = comunicados.filter(comunicado =>
    (comunicado.titulo || '').toLowerCase().includes((pesquisa || '').toLowerCase())
  );
useFocusEffect(
  React.useCallback(() => {
      setPesquisa(""); // Reseta a pesquisa ao focar na página
  }, [setPesquisa])
);
  const Comunicado = ({ titulo, autor, data, descricao, style }) => {
    return (
      <View style={[styles.card, style]}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.autor}>Criado por {autor}</Text>
        <Text style={styles.descricao}>{descricao}</Text>
        <View style={styles.dataContainer}>
          <Text style={styles.data}>{data}</Text>
        </View>
      </View>
    );
  };
  

  return (
    <SafeAreaView style={styles.container}>
      <TopFlex titulo='Comunicados'/>
      <SearchContainer />
      {loading ? (
        <Text>Carregando...</Text> // Exibe uma mensagem enquanto os dados estão sendo carregados
      ) : (
        <FlatList
          style={styles.ComunicadosContainer}
          data={comunicadosFiltrados}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <Comunicado
              titulo={item.titulo}
              autor={item.autor}
              data={item.data}
              descricao={item.descricao}
              style={index === comunicadosFiltrados.length - 1 ? styles.lastItem : {}}
            />
          )}
        />
      )}
      <MenuInferior overviewProp={true} calendarProp={false}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginBottom: 0,
    flex: 1,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2, // Sombras no Android
    shadowColor: "#000", // Sombras no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  autor: {
    fontSize: 14,
    color: "#555",
    marginBottom: 8,
  },
  descricao: {
    fontSize: 14,
    color: "#666",
    marginBottom: 16,
  },
  dataContainer: {
    alignSelf: "flex-end",
    backgroundColor: "rgba(137, 78, 154, 1)",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  data: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
  ComunicadosContainer:{
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  contentContainerStyle: {
    paddingBottom: 16,
  },
  lastItem: {
    marginBottom: 50, // valor maior para o último item
  },
});

export default Comunicados;
