import React from 'react';
import 'react-native-gesture-handler';
import { AuthProvider } from './src/hooks/useAuth';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}
