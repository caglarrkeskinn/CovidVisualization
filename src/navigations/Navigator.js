import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from '../screens/Login';
import Account from "../screens/Account";
import Home from '../screens/Home';
import Statistics from '../screens/Statistics';
import News from '../screens/News';
import Map from '../screens/Map';
import stylesCatalog from "../components/stylesCatalog";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function AuthNavigator() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };
//  !!IMPORTANT!!
// here condition is 'not ! ' because of the see others screens!!! 
// delete it(!) before running product!!
  if (isAuthenticated) {
    return (
      <Tab.Navigator screenOptions={{ tabBarActiveTintColor: 'black', tabBarStyle: stylesCatalog.tabBarStyle }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown:false ,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Statistics"
          component={Statistics}
          options={{
            headerShown:false ,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="chart-box-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Map"
          component={Map}
          options={{
            headerShown:false ,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="map-legend" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="News"
          component={News}
          options={{
            headerShown:false ,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="newspaper-variant-multiple-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            headerShown:false ,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  } else {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
          initialParams={{ onLogin: handleLogin }}
        />
      </Stack.Navigator>
    );
  }
}

export default AuthNavigator

