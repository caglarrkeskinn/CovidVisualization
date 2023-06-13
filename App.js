import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./src/navigations/Navigator";

const App = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default App;
