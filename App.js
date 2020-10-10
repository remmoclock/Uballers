import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home/Home';
import Ground from './components/Ground/Ground';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Accueil" component={Home} />
      <Stack.Screen name="Terrain" component={Ground} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

