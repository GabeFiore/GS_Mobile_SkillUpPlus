import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Layout, Typography, Colors } from '../styles/Theme';
import ProgressBar from '../components/ProgressBar';

const ProgressScreen = () => {
  return (
    <ScrollView style={Layout.container}>
      <Text style={Typography.title}>Seu Progresso</Text>
      <Text style={Typography.subtitle}>Monitoramento de Requalificação</Text>

      <View style={Layout.card}>
        <Text style={Typography.subtitle}>Progresso Geral</Text>
        <ProgressBar progress={46} label="Conclusão de Trilhas" />
      </View>

      <View style={Layout.card}>
        <Text style={Typography.subtitle}>Trilhas em Andamento</Text>
        <ProgressBar
          progress={40}
          label="Inteligência Artificial para Negócios"
        />
        <ProgressBar progress={75} label="Análise de Dados e Big Data" />
        <ProgressBar progress={25} label="Cibersegurança no Mundo Digital" />
      </View>

      <View style={Layout.card}>
        <Text style={Typography.subtitle}>Linha do Tempo de Estudos</Text>
        <View style={styles.timelineItem}>
          <View style={styles.timelineDot} />
          <View style={styles.timelineContent}>
            <Text style={Typography.body}>
              04/11/2025: Conclusão da Autoavaliação.
            </Text>
          </View>
        </View>
        <View style={styles.timelineItem}>
          <View style={styles.timelineDot} />
          <View style={styles.timelineContent}>
            <Text style={Typography.body}>
              07/11/2025: Conclusão da metade da trilha 06: Análise de Dados e
              Big Data.
            </Text>
            <Text style={Typography.small}>Pontuação no CheckPoint: 88%.</Text>
          </View>
        </View>
        <View style={styles.timelineItem}>
          <View style={styles.timelineDot} />
          <View style={styles.timelineContent}>
            <Text style={Typography.body}>
              10/11/2025: Início da Trilha de Cibersegurança no Mundo Digital.
            </Text>
            <Text style={Typography.small}>2 horas de estudo registradas.</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  timelineItem: {
    flexDirection: 'row',
    marginBottom: 15,
    paddingLeft: 10,
    borderLeftWidth: 2,
    borderLeftColor: Colors.primary,
  },
  timelineDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.primary,
    position: 'absolute',
    left: -6,
    top: 5,
  },
  timelineContent: {
    marginLeft: 10,
    flex: 1,
  },
});

export default ProgressScreen;
