import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Layout, Typography, Colors } from '../styles/Theme';

const focusAreas = [
  { label: 'Selecione uma Área de Foco:', value: '' },
  { label: 'Inteligência Artificial e Machine Learning', value: 'IA' },
  { label: 'Cibersegurança e Privacidade de Dados', value: 'Cyber' },
  { label: 'Sustentabilidade e ESG', value: 'ESG' },
  { label: 'Desenvolvimento Cloud e DevOps', value: 'Cloud' },
  { label: 'Análise de Dados', value: 'Dados' },
];

const questions = [
  {
    id: 1,
    text: 'Você se sente confortável em aprender novas tecnologias de forma autônoma?',
  },
  {
    id: 2,
    text: 'Você se sente confortável e eficiente ao se comunicar por meio de plataformas digitais, como e-mail, videoconferências e chats corporativos?',
  },
  {
    id: 3,
    text: 'Qual seu nível de habilidade em trabalhar em equipe e colaborar em projetos remotos?',
  },
  {
    id: 4,
    text: 'Você busca ativamente conhecimento sobre IA, automação e seus impactos no seu setor?',
  },
  {
    id: 5,
    text: 'Qual é o seu nível de conforto em trabalhar com dados e tirar conclusões a partir de informações quantitativas e qualitativas?',
  },
];

const AssessmentScreen = () => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [selectedFocusArea, setSelectedFocusArea] = useState('');

  const handleAnswer = (questionId: number, score: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: score }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length !== questions.length) {
      Alert.alert(
        'Atenção',
        'Por favor, responda todas as perguntas antes de finalizar.'
      );
      return;
    }

    const totalScore = Object.values(answers).reduce(
      (sum, score) => sum + score,
      0
    );
    const maxScore = questions.length * 5;
    const percentage = ((totalScore / maxScore) * 100).toFixed(0);

    Alert.alert(
      'Autoavaliação Concluída',
      `Sua pontuação total é ${totalScore} de ${maxScore} (${percentage}%).\n\nRecomendamos focar em áreas com pontuação mais baixa para iniciar sua requalificação.`
    );
  };

  return (
    <ScrollView style={Layout.container}>
      <Text style={Typography.title}>Autoavaliação de Competências</Text>
      <Text style={Typography.subtitle}>
        Identifique seus pontos fortes e áreas de melhoria para se preparar para
        os desafios do futuro do trabalho.
      </Text>

      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Área de Foco Profissional:</Text>

        <View style={styles.pickerWrapper}>
          <Picker
            mode="dropdown"
            selectedValue={selectedFocusArea}
            dropdownIconColor={Colors.text}
            onValueChange={(value) => setSelectedFocusArea(value)}
            style={styles.picker}>
            {focusAreas.map((area) => (
              <Picker.Item
                key={area.value}
                label={area.label}
                value={area.value}
                color={Colors.text}
              />
            ))}
          </Picker>
        </View>
      </View>

      {questions.map((q) => (
        <View key={q.id} style={Layout.card}>
          <Text style={Typography.body}>
            {q.id}. {q.text}
          </Text>

          <View style={styles.scoreContainer}>
            {[1, 2, 3, 4, 5].map((score) => (
              <TouchableOpacity
                key={score}
                style={[
                  styles.scoreButton,
                  answers[q.id] === score && styles.scoreButtonActive,
                ]}
                onPress={() => handleAnswer(q.id, score)}>
                <Text
                  style={[
                    styles.scoreText,
                    answers[q.id] === score && styles.scoreTextActive,
                  ]}>
                  {score}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={Typography.small}>1 (Baixo) a 5 (Alto)</Text>
        </View>
      ))}

      <TouchableOpacity style={Layout.buttonPrimary} onPress={handleSubmit}>
        <Text style={Layout.buttonText}>FINALIZAR AVALIAÇÃO</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  pickerContainer: {
    ...Layout.card,
    padding: 15,
    marginBottom: 20,
  },
  pickerLabel: {
    ...Typography.body,
    color: Colors.text,
    marginBottom: 10,
  },
  pickerWrapper: {
    borderColor: Colors.border,
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: Colors.card, 
  },
  picker: {
    height: 50,
    color: Colors.text, 
    backgroundColor: Colors.card, 
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
    marginBottom: 5,
  },
  scoreButton: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.textSecondary,
    width: 40,
    alignItems: 'center',
  },
  scoreButtonActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  scoreText: {
    color: Colors.text,
    fontWeight: '600',
  },
  scoreTextActive: {
    color: Colors.card,
  },
});

export default AssessmentScreen;
