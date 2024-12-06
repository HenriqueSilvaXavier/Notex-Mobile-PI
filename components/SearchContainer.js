import { StyleSheet, View, Text, SafeAreaView, TextInput, ScrollView } from "react-native";
import SearchSymbol from "../assets/search";
import { SearchContext } from "../contexts/SearchContext";
import { useContext } from "react";

export default function SearchContainer() {
  const { pesquisa, setPesquisa } = useContext(SearchContext);
  return (
      <View style={styles.searchContainer}>
        <TextInput placeholder="Procurar..." style={styles.searchInput} value={pesquisa} onChangeText={(e)=> setPesquisa(e)}/>
        <SearchSymbol style={styles.searchIcon} />
      </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center", // Alinha o conteúdo verticalmente no centro
    marginTop: 25, // Adiciona espaço acima do campo de pesquisa
    height: 35,
    width: 250,
    marginHorizontal: 'auto'
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
    right: 5, // Ajuste a posição do ícone
  },
});
