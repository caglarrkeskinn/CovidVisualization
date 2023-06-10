// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
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
import { supabase } from "./src/lib/supabase";
import Login from './src/screens/Login'
import Account from "./src/screens/Account";
import { View } from "react-native";
import { Session } from "@supabase/supabase-js";


export default function App() {
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
    <View>
      {session && session.user ? (
        <Account key={session.user.id} session={session} />
      ) : (
        
        <Login />
      )}
    </View>
  );
}