import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavDerma from './src/components/BottomNavDerma';
import Onboarding from './src/screens/Onboarding';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import ListReport from './src/components/Derma/ListReport';
import LocationData from './src/screens/LocationData';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          animationTypeForReplace: 'pop',
        }}
      >
        <Stack.Screen name="Derma" component={BottomNavDerma} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="listreport" component={ListReport} />
        <Stack.Screen name="locationData" component={LocationData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
