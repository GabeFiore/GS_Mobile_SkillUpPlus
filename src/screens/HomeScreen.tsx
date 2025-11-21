import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { Layout, Typography } from '../styles/Theme';
import { useAuth } from '../hooks/useAuth';

const bannerImg = require('../../assets/img/bannerhome.jpg');

const HomeScreen = () => {
  const { user } = useAuth();

  return (
    <ScrollView style={Layout.container}>
      <Image source={bannerImg} style={styles.banner} />

      <Text style={Typography.title}>Bem-vindo, {user?.username}!</Text>
      <Text style={Typography.subtitle}>
        Confira seu caminho e sugestões para sua requalificação contínua.
      </Text>

      <View style={Layout.card}>
        <Text style={Typography.subtitle}>Destaque Semanal</Text>
        <Text style={Typography.body}>
          Trilha de Análise de Dados: Este é um curso completo sobre como
          analisar grandes volumes de dados e interpretar resultados para
          melhorar tomada de decisões.
        </Text>
      </View>

      <View style={Layout.card}>
        <Text style={Typography.subtitle}>ODS em Foco</Text>
        <Text style={Typography.body}>
          O SkillUpPlus 2030+ apoia o ODS 4 (Educação de Qualidade) e o ODS 8
          (Trabalho Decente).
        </Text>
      </View>

      <View style={Layout.card}>
        <Text style={Typography.subtitle}>Próximos Passos</Text>
        <Text style={Typography.body}>
          Recomendamos que comece sua jornada realizando a Autoavaliação para
          mapear suas principais competências.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 20,
  },
});

export default HomeScreen;
