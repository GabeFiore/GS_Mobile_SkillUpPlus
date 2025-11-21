import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Typography } from '../styles/Theme';

interface ProgressBarProps {
  progress: number;
  label: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, label }) => {
  const validProgress = Math.min(100, Math.max(0, progress));
  const progressWidth = `${validProgress}%`;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={Typography.body}>{label}</Text>
        <Text style={Typography.body}>{validProgress}%</Text>
      </View>
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: progressWidth }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  progressBar: {
    height: 12,
    backgroundColor: Colors.background,
    borderRadius: 6,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: Colors.textSecondary,
  },
  progressFill: {
    height: '100%',
    backgroundColor: Colors.danger,
    borderRadius: 6,
  },
});

export default ProgressBar;
