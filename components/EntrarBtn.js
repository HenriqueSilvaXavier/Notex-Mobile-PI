import React, { useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native'; 
import { LinearGradient } from 'expo-linear-gradient'; 
import { useNavigation } from '@react-navigation/native'; 
import { AuthContext } from '../contexts/AuthContext';  // Importa o contexto de autenticação
import axios from 'axios';

export default function EntrarBtn({ page }) {
  const { authData, setAuthData } = useContext(AuthContext); // Obtém os dados de autenticação
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (page === "Overview") {
      const { CPF, senha, nome, studentId } = authData;
  
      if (!CPF || !senha) {
        Alert.alert('Erro', 'CPF e senha são obrigatórios!');
        return;
      }
  
      console.log('Dados enviados:', { cpf: CPF, password: senha });
  
      try {
        const response = await axios.post('http://192.168.1.12:4000/login', {
          cpf: CPF,
          password: senha,
        }, { headers: { 'Content-Type': 'application/json' } });
        console.log('Resposta da API:', response.data);
        
        if (response.data.token) {
          setAuthData({ CPF, senha, studentId: response.data.user.id, token: response.data.token, nome: response.data.user.name, foto: response.data.user.avatarUrl});
          console.log('Auth Data:', authData);
          navigation.navigate(page);
        } else {
          Alert.alert('Erro', response.data.message || 'Erro ao fazer login');
        }
      } catch (error) {
        console.log('Erro na requisição:', error); // Log do erro
        Alert.alert(
          'Erro',
          error.response?.data?.message || 'Não foi possível realizar o login'
        );
      }
    } else if (page === "Login") {
      navigation.navigate(page);
    }
  };
  

  return (
    <View style={styles.buttonWrapper}>
      <TouchableOpacity 
        style={styles.buttonContainer} 
        onPress={handleLogin}  // Chama a função handleLogin ao clicar no botão
      >
        <LinearGradient 
          colors={['#894E9A', '#DA3181']} 
          start={{ x: 0, y: 0 }} 
          end={{ x: 1, y: 0 }} 
          style={styles.buttonGradient}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
