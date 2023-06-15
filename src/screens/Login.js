import React, { useState } from "react";
import { Alert, View , Text , Image ,TouchableOpacity,TextInput } from "react-native";
import supabase from "../lib/supabase";
import { Button, Input } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "../navigations/Navigator";
import stylesCatalog from "../components/stylesCatalog";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }
  return (
    <>
    <View style={stylesCatalog.LoginboxLogin}>
    <Image style={{alignSelf:'center',right:5,top:'15%'}} source={require("../Images/virus.png")} ></Image>
    <Text style={stylesCatalog.LogincovidHeading}>Covid Visualization</Text>
    
    </View>
    <View style={stylesCatalog.Logincontainer}>
      <View style={[stylesCatalog.LoginverticallySpaced]}>
        <Text style={stylesCatalog.LoginlabelStyle}>Email</Text>
          <TextInput
            label="Email"
            leftIcon={{ type: "font-awesome", name: "envelope" }}
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="email@address.com"
            autoCapitalize="none"
            style={stylesCatalog.LogininputStyle}
          />
        </View>
        <View style={stylesCatalog.LoginverticallySpaced}>
        <Text style={stylesCatalog.LoginlabelStyle}>Password</Text>
          <TextInput 
            label="Password"
            leftIcon={{ type: "font-awesome", name: "lock" }}
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
            placeholder="Password"
            autoCapitalize="none"
            style={stylesCatalog.LogininputStyle}
            labelStyle={stylesCatalog.LoginlabelStyle}
          />
        </View>
        <View style={[stylesCatalog.LoginverticallySpaced, stylesCatalog.Loginmt20]}>
          <TouchableOpacity
            style={stylesCatalog.Loginbutton}
            disabled={loading}
            onPress={() => signInWithEmail()}
            onPressOut={() => setLoading1(true)}
          >
            <Text style={{ color: 'white' }}>Sign In</Text>
          </TouchableOpacity>
          </View>
        <View style={stylesCatalog.LoginverticallySpaced}>
        <TouchableOpacity
            style={stylesCatalog.Loginbutton}
            disabled={loading}
            onPress={() => signUpWithEmail()}
          >
            <Text style={{ color: 'white' }}>Sign Up</Text>
          </TouchableOpacity>
        
        </View>
      
      
    </View>
    </>
  );
}


