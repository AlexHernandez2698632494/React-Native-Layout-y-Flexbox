import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PlanetDetailScreen from '../screens/PlanetDetailScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Hogar">
        <Stack.Screen name="Hogar" component={HomeScreen} options={{ title: 'Solar System Explorer' }} />
        <Stack.Screen name="PlanetDetail" component={PlanetDetailScreen} options={({ route }) => ({ title: route.params.planet.name })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
