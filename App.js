// import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import AuthNavigator from './src/navigations/Navigator';

// const App = ()=>{
//   return(
//     <NavigationContainer>
//       <AuthNavigator/>
//     </NavigationContainer>
//   )
// }

// export default App;

import { useState, useEffect } from "react";
import  supabase  from "./src/lib/supabase";

import Account from "./src/screens/Account";
import { View } from "react-native";
import { Session } from "@supabase/supabase-js";
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login'
import Home from './src/screens/Home';
import Statistics from './src/screens/Statistics';
import News from './src/screens/News';
import Map from './src/screens/Map';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function App  ()  {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();
  const [session, setSession] = useState(null);
  const [isAuthenticated,setIsAuthenticated]=useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <NavigationContainer>
      {session && session.user ? (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} options={{
            headerShown:false ,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home-outline" color={color} size={size} />
            ),
          }} />
          <Tab.Screen name="Statistics" component={Statistics}options={{
            headerShown:false ,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="chart-box-outline" color={color} size={size} />
            ),
          }} />
          <Tab.Screen name="Map" component={Map} options={{
            headerShown:false ,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="map-legend" color={color} size={size} />
            ),
          }}/>
          <Tab.Screen name="News" component={News} options={{
            headerShown:false ,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="newspaper-variant-multiple-outline"
                color={color}
                size={size}
              />
            ),
          }} />
          <Tab.Screen name="Account" component={Account} options={{
            headerShown:false ,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-outline" color={color} size={size} />
            ),
          }}/>
            
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;