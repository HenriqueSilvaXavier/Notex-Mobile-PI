import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Platform } from 'react-native';

const LoginForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');

  const toggleCheckbox = () => setIsChecked(!isChecked);

  return (
    <View style={styles.LoginFormcontainer}>
      <Text style={styles.label}>Matrícula</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua matrícula"
        value={matricula}
        onChangeText={setMatricula}
        autoCapitalize="none"
        keyboardType="numeric"
      />
      <View style={styles.separator} />
      <Text style={styles.label}>Senha</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.input, styles.passwordInput]}
          placeholder="Digite sua senha"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
          autoCapitalize="none"
        />
      </View>
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
    marginTop: Platform.OS === 'android' ? 20 : 60,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    justifyContent: 'center',
    marginBottom: 15,
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
    width: 16, // Alterado de 24 para 16
    height: 16, // Alterado de 24 para 16
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    borderRadius: 4,
  },
  checkmark: {
    color: '#fff',
    fontSize: 8, // Reduzido de 16 para 12 para ajustar ao tamanho do checkbox
  },
  checked: {
    backgroundColor: '#894E9A',
  },
  checkboxLabel: {
    fontSize: 16,
    color: '#333',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
  },
  eyeButton: {
    marginLeft: 8,
  },
});

export default LoginForm;
