import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './src/navigations/Navigator';

const App = ()=>{
  return(
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  )
}

export default App;

