import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from 'styled-components';
import { Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

const { Navigator, Screen } = createBottomTabNavigator();

import { Dashboard } from '../screens/Dashboard';
import { Register } from '../screens/Register';

export function AppRoutes() {
  const theme = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.secondary, //Cor quando est� ativo
        tabBarInactiveTintColor: theme.colors.text,// Cor quando est� inativo
        tabBarLabelPosition: 'beside-icon', //deixa �cone ao lado do texto
        tabBarStyle: {
          height: 88,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0, //colocar padding maior no ios

        }
      }}
    >
      <Screen 
        name="Listagem"
        component={Dashboard}
        options={{
          tabBarIcon: (({ size, color }) => 
            <MaterialIcons 
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          )
        }}
      />
      <Screen 
        name="Cadastrar"
        component={Register}
        options={{
          tabBarIcon: (({ size, color }) => 
            <MaterialIcons 
              name="attach-money"
              size={size}
              color={color}
            />
          )
        }}
      />
      <Screen 
        name="Resumo"
        component={Register}
        options={{
          tabBarIcon: (({ size, color }) => 
            <MaterialIcons 
              name="pie-chart"
              size={size}
              color={color}
            />
          )
        }}
      />
    </Navigator>
  )
}