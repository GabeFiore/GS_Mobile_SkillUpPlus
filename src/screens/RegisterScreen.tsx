import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, Typography, Layout } from '../styles/Theme';

const RegisterScreen = ({ navigation }: any) => {
  return (
    <View style={[Layout.container, styles.centerContent]}>
      <View style={styles.box}>
        <Text style={styles.title}>Criar Conta</Text>

        <Text style={styles.subtitle}>
          Preencha seus dados na próxima etapa para criar sua conta (teste do
          funcionamento do stack).
        </Text>

        <TouchableOpacity
          style={[Layout.buttonPrimary, styles.button]}
          onPress={() => navigation.navigate('Login')}>
          <Text style={Layout.buttonText}>Voltar para Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: '85%',
    backgroundColor: Colors.card,
    padding: 25,
    borderRadius: 15,
    elevation: 5,
  },
  title: {
    ...Typography.title,
    textAlign: 'center',
    marginBottom: 15,
  },
  subtitle: {
    ...Typography.body,
    textAlign: 'center',
    marginBottom: 25,
  },
  button: {
    marginTop: 10,
    backgroundColor: Colors.primary,
  },
});

export default RegisterScreen;
