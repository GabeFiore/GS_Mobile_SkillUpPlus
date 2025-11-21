import React from 'react';
import { View, Text } from 'react-native';
import { Layout, Typography } from '../styles/Theme';
import { useAuth } from '../hooks/useAuth';

const ProfileScreen = () => {
  const { user } = useAuth();

  return (
    <View style={Layout.container}>
      <Text style={Typography.title}>Meu Perfil</Text>

      <View style={Layout.card}>
        <Text style={Typography.subtitle}>Informações Pessoais:</Text>
        <Text style={Typography.body}>Usuário: {user?.username}</Text>
        <Text style={Typography.body}>Status: Requalificação em Andamento</Text>
        <Text style={Typography.body}>
          Áreas de Interesse: IA, Engenharia de Software e Cyber
        </Text>
      </View>

      <View style={Layout.card}>
        <Text style={Typography.subtitle}>Estatísticas:</Text>
        <Text style={Typography.body}>Trilhas Concluídas: 0</Text>
        <Text style={Typography.body}>Horas de Estudo: 12h</Text>
        <Text style={Typography.body}>Última Avaliação: 88%</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
