import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from '../src/components/CustomDrawerContent';
import HomeTabs from './HomeTabs';
import ProfileScreen from '../src/screens/ProfileScreen';
import ConfigScreen from '../src/screens/ConfigScreen';
import { Colors } from '../src/styles/Theme';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.card,
        },
        drawerContentStyle: {
          backgroundColor: Colors.card,
        },
        headerTintColor: Colors.primary,
        drawerActiveTintColor: Colors.primary,
        drawerInactiveTintColor: Colors.text,
      }}>
      <Drawer.Screen
        name="HomeStack"
        component={HomeTabs}
        options={{
          title: 'Início',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          title: 'Meu Perfil',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Configurações"
        component={ConfigScreen}
        options={{
          title: 'Configurações',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppDrawer;
