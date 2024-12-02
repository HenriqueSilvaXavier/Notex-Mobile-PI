import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Logo from '../assets/mediotec-mobile 8';
import EntrarBtn from '../components/EntrarBtn';

export default function Home() {

  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Logo width='222' height='91' />
      </View>
      <EntrarBtn page="Login" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',  // Garantir que o logo e o botão fiquem nas posições corretas
    alignItems: 'center',
  },
  logoWrapper: {
    flex: 1,  // Faz a logo ocupar o espaço restante e se centralizar
    justifyContent: 'center',  // Centraliza a logo verticalmente
    alignItems: 'center',  // Centraliza a logo horizontalmente
  },
  logo: {
    width: 128,
    height: 128,
  }
});

