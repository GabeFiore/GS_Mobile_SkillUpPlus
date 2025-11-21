import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { useAuth } from '../hooks/useAuth';
import { Colors, Typography } from '../styles/Theme';

const CustomDrawerContent = (props: any) => {
  const { user } = useAuth();

  return (
    <DrawerContentScrollView
      {...props}
      style={{ backgroundColor: Colors.card }}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>SkillUpPlus 2030+</Text>
        <Text style={styles.headerSubtitle}>Bem-vindo, {user?.username}!</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: Colors.card,
    marginBottom: 15,
    borderBottomWidth: 3,
    borderBottomColor: Colors.border,
  },
  headerTitle: {
    ...Typography.title,
    color: Colors.primary,
    fontSize: 24,
  },
  headerSubtitle: {
    ...Typography.body,
    color: Colors.text,
  },
});

export default CustomDrawerContent;
