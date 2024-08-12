import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import PlanetDetail from './src/screens/PlanetDetailScreen';
import { LanguageProvider } from './src/context/LanguageContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <LanguageProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="PlanetDetail" component={PlanetDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </LanguageProvider>
  );
}
