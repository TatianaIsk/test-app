import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './features/HomeScreen';
import ListScreen from './features/ListScreen';
import UserDetailsScreen from './features/UserDetailsScreen';
import SettingsScreen from './features/SettingsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="List"
                component={ListScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="UserDetails"
                component={UserDetailsScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Settings"
                component={SettingsScreen}
                options={{ headerShown: false }}
            />
          </Stack.Navigator>
          <StatusBar style="auto" />
      </NavigationContainer>
  );
};

export default App;