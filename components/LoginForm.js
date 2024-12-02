import React, { useState, useEffect } from 'react'; 
import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native';
import { useAuth } from '../contexts/AuthContext'; // Importa o contexto de autenticação

const LoginForm = ({ onLoginSuccess }) => {
  const { setAuthData } = useAuth(); // Obtém a função para definir os dados de autenticação
  const [CPF, setCPF] = useState('');
  const [senha, setSenha] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  // Atualiza os dados de autenticação sempre que CPF ou senha mudam
  useEffect(() => {
    setAuthData({ CPF, senha });
  }, [CPF, senha, setAuthData]);

  const toggleCheckbox = () => setIsChecked(!isChecked);

  return (
    <View style={styles.LoginFormcontainer}>
      <Text style={styles.label}>CPF</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu CPF"
        value={CPF}
        onChangeText={setCPF}
        autoCapitalize="none"
        keyboardType="numeric"
      />
      <View style={styles.separator} />
      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
        autoCapitalize="none"
      />
      <View style={styles.separator} />
      <View style={styles.checkboxContainer}>
        <Pressable
          onPress={toggleCheckbox}
          style={[styles.checkbox, isChecked && styles.checked]}
          accessibilityRole="checkbox"
          accessibilityState={{ checked: isChecked }}
        >
          {isChecked && <Text style={styles.checkmark}>✔</Text>}
        </Pressable>
        <Text style={styles.checkboxLabel}>Manter conectado</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  LoginFormcontainer: {
    borderWidth: 1,
    borderColor: '#d9d9d9',
    padding: 16,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    marginTop: 20,
    borderRadius: 8,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#d9d9d9',
    fontSize: 16,
    paddingVertical: 8,
    color: '#000',
  },
  separator: {
    height: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    borderRadius: 4,
  },
  checkmark: {
    color: '#fff',
    fontSize: 8,
  },
  checked: {
    backgroundColor: '#894E9A',
  },
  checkboxLabel: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    marginTop: 16,
    backgroundColor: '#894E9A',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginForm;
