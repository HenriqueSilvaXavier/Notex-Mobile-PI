import React, { useState } from 'react'; // Certifique-se de que o React está importado
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import EntrarBtn from '../components/EntrarBtn';
import Logo from '../assets/mediotec-mobile 8';
import LoginForm from '../components/LoginForm';

export default function Login() {
  return (
    <View style={styles.LoginContainer}>
      <View style={styles.logoWrapper}>
        <Logo width='222' height='91' />
      </View>
      <Text style={styles.Ola}>Olá novamente!</Text>
      <LoginForm />
      <EntrarBtn page="Overview" />

      <Text style={styles.problemas}>
        Problemas para fazer login?{' '}
        <Text style={{ color: 'blue' }}>Suporte</Text>
      </Text>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  LoginContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  logoWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 128,
    height: 128,
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
  },
  Ola:{
    fontSize: 20,
  },
  problemas:{
    fontSize: 10,
  }
});
