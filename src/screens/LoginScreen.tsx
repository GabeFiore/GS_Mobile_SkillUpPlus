import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useAuth } from '../hooks/useAuth';
import { Layout, Typography, Colors } from '../styles/Theme';

const LoginScreen = ({ navigation }: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert('Erro de Login', 'Por favor, preencha todos os campos.');
      return;
    }

    setLoading(true);
    try {
      await signIn(username, password);
    } catch (error) {
      Alert.alert('Erro de Login', (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>SkillUpPlus 2030+</Text>
      <Text style={styles.subtitle}>O Futuro do Trabalho Começa Aqui</Text>

      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Usuário:"
          placeholderTextColor={Colors.textSecondary}
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha:"
          placeholderTextColor={Colors.textSecondary}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          style={Layout.buttonPrimary}
          onPress={handleLogin}
          disabled={loading}>
          {loading ? (
            <ActivityIndicator color={Colors.card} />
          ) : (
            <Text style={Layout.buttonText}>ENTRAR</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPassword')}
          style={styles.linkContainer}>
          <Text style={styles.linkText}>Esqueci minha senha</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
          style={styles.linkContainer}>
          <Text style={styles.linkText}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Layout.container,
    alignItems: 'center',
    backgroundColor: Colors.background,
    paddingTop: 80,
  },

  logo: {
    ...Typography.title,
    fontSize: 34,
    textAlign: 'center',
    color: Colors.primary,
    textShadowColor: Colors.primary,
  },

  subtitle: {
    ...Typography.subtitle,
    color: Colors.textSecondary,
    marginBottom: 35,
    textAlign: 'center',
  },

  card: {
    width: '90%',
    backgroundColor: Colors.card,
    padding: 25,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.primary,
    shadowColor: Colors.primary,
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
  },

  input: {
    height: 50,
    backgroundColor: Colors.background,
    borderColor: Colors.border,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    color: Colors.text,
    fontSize: 16,
  },

  linkContainer: {
    marginTop: 15,
    alignItems: 'center',
  },

  linkText: {
    color: Colors.primary,
    fontWeight: '600',
    fontSize: 15,
  },
});

export default LoginScreen;
