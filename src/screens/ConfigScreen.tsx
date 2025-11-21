import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, Typography } from '../styles/Theme';
import { useAuth } from '../hooks/useAuth';

const ConfigScreen = () => {
  const { signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Alterar Tema - (Claro / Escuro)</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.logoutButton]}
        onPress={signOut}>
        <Text style={styles.logoutText}>Sair da Conta</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConfigScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 20,
  },
  title: {
    ...Typography.title,
    marginBottom: 30,
  },
  button: {
    backgroundColor: Colors.card,
    padding: 15,
    borderRadius: 10,
    marginBottom: 30,
  },
  buttonText: {
    ...Typography.body,
    color: Colors.text,
    textAlign: 'center',
  },
  logoutButton: {
    backgroundColor: Colors.danger,
  },
  logoutText: {
    ...Typography.body,
    color: Colors.text,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
