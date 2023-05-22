import React from 'react';

import Statistics from '../screens/Statistics';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import News from '../screens/News';
import Map from '../screens/Map';
import Login from '../screens/Login';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';




const Tab = createBottomTabNavigator();




function MyTabs(){
    return(
        <Tab.Navigator  screenOptions={{
            tabBarActiveTintColor: 'black',
          }}>
            <Tab.Screen name="Login" component={Login} options={{
              headerShown:false ,
            tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="login" color={color='black'} size={size=30} />
          ),}}/>
            <Tab.Screen name="Home" component={Home} options={{
              headerShown:false ,
            tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="home-outline" color={color='black'} size={size=30} />
          ),}}/>
            <Tab.Screen name="Statistics" component={Statistics}  options={{
              headerShown:false,
              tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="chart-box-outline" color={color='black'} size={size=30} />
          ),}}/>
            <Tab.Screen name="Map" component={Map}  options={{
              headerShown:false,
              tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="map-legend" color={color='black'} size={size=30} />
          ),}}/>
            <Tab.Screen name="News" component={News}  options={{
              headerShown:false,
              tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="newspaper-variant-multiple-outline" color={color='black'} size={size=30} />
          ),}}/>
        </Tab.Navigator>
    )
}


export default MyTabs;

   