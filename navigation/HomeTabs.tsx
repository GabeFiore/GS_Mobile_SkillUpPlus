import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../src/screens/HomeScreen';
import TracksScreen from '../src/screens/TracksScreen';
import AssessmentScreen from '../src/screens/AssessmentScreen';
import ProgressScreen from '../src/screens/ProgressScreen';
import { Colors } from '../src/styles/Theme';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textSecondary,
        tabBarStyle: {
          backgroundColor: Colors.card,
          borderTopWidth: 0,
          elevation: 5,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;

          if (route.name === 'Início') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Trilhas') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Autoavaliação') {
            iconName = focused
              ? 'checkmark-circle'
              : 'checkmark-circle-outline';
          } else if (route.name === 'Progresso') {
            iconName = focused ? 'analytics' : 'analytics-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Início" component={HomeScreen} />
      <Tab.Screen name="Trilhas" component={TracksScreen} />
      <Tab.Screen name="Autoavaliação" component={AssessmentScreen} />
      <Tab.Screen name="Progresso" component={ProgressScreen} />
    </Tab.Navigator>
  );
};

export default HomeTabs;
