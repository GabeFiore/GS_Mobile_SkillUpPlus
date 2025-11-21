import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Layout, Typography, Colors } from '../styles/Theme';

const TrackCard: React.FC<{
  title: string;
  description: string;
  progress: number;
}> = ({ title, description, progress }) => (
  <TouchableOpacity style={Layout.card}>
    <Text style={Typography.subtitle}>{title}</Text>
    <Text style={Typography.body}>{description}</Text>
    <View style={styles.progressContainer}>
      <View style={[styles.progressBar, { width: `${progress}%` }]} />
    </View>
    <Text style={Typography.small}>{progress}% Concluído</Text>
  </TouchableOpacity>
);

const TracksScreen = () => {
  return (
    <ScrollView style={Layout.container}>
      <Text style={Typography.title}>Trilhas de Requalificação</Text>
      <Text style={Typography.subtitle}>Em Andamento:</Text>

      <TrackCard
        title="Trilha 5: Inteligência Artificial para Negócios"
        description="Como implementar IA para otimizar processos empresariais e tomar decisões baseadas em dados."
        progress={40}
      />
      <TrackCard
        title="Trilha 6: Análise de Dados e Big Data"
        description="Fundamentos de análise de grandes volumes de dados e sua aplicação em soluções de negócios."
        progress={75}
      />

      <TrackCard
        title="Trilha 4: Cibersegurança no Mundo Digital"
        description="Proteção de dados e privacidade em plataformas digitais, e como manter um ambiente online seguro."
        progress={25}
      />

      <Text style={Typography.subtitle}>Disponíveis:</Text>
      <TrackCard
        title="Trilha 2: Empreendedorismo Digital"
        description="Como iniciar e gerenciar negócios digitais no cenário atual, com foco em inovação e escalabilidade."
        progress={0}
      />
      <TrackCard
        title="Trilha 7: Design de Experiência do Usuário (UX/UI)"
        description="Como criar interfaces e experiências que sejam intuitivas, acessíveis e focadas no usuário."
        progress={0}
      />
      <TrackCard
        title="Trilha 3: Gestão Ágil de Projetos"
        description="Aprenda sobre metodologias ágeis, como Scrum e Kanban, para melhorar a produtividade em equipes e projetos."
        progress={0}
      />
      <TrackCard
        title="Trilha 1: Sustentabilidade"
        description="Novas carreiras e oportunidades no mercado de trabalho sustentável (ODS 8)."
        progress={0}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  progressContainer: {
    height: 5,
    backgroundColor: Colors.background,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 5,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: Colors.danger,
  },
});

export default TracksScreen;
