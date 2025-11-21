import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../src/hooks/useAuth';
import AuthStack from './AuthStack';
import AppDrawer from './AppDrawer';

const AppNavigator = () => {
  const { user } = useAuth();

  let content;

  if (user) {
    content = <AppDrawer />;
  } else {
    content = <AuthStack />;
  }

  return <NavigationContainer>{content}</NavigationContainer>;
};

export default AppNavigator;
