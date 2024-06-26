import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Home from './Derma/Home';
import Maps from './Derma/Maps';
import Booking from './Derma/Booking';
import Settings from './Derma/Settings';
import Header from './Header';

const Tab = createBottomTabNavigator();

const BottomNavDerma = () => {
  return (
    <>
    <Header/>
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Maps') {
            iconName = focused ? 'map' : 'map-outline';
          } else if (route.name === 'Bookings') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'cog' : 'cog-outline'; // Assuming 'cog' is the icon for settings
          }

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
      
        tabBarActiveTintColor: '#4287f5',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen options={{ headerShown: false }} name="Home" component={Home} />
      <Tab.Screen options={{ headerShown: false }} name="Maps" component={Maps} />
      <Tab.Screen options={{ headerShown: false }} name="Bookings" component={Booking} />
      <Tab.Screen options={{ headerShown: false }} name="Settings" component={Settings} />
    </Tab.Navigator>
    </>
  );
};

export default BottomNavDerma;
