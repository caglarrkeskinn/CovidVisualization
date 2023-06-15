import React, { useState } from "react";
import { Alert, StyleSheet, View , Text , Image ,TouchableOpacity,TextInput } from "react-native";
import supabase from "../lib/supabase";
import { Button, Input } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "../navigations/Navigator";


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
    <View style={styles.boxLogin}>
    <Image style={{alignSelf:'center',right:5,top:'15%'}} source={require("../Images/virus.png")} ></Image>
    <Text style={styles.covidHeading}>Covid Visualization</Text>
    
    </View>
    <View style={styles.container}>
      <View style={[styles.verticallySpaced]}>
        <Text style={styles.labelStyle}>Email</Text>
          <TextInput
            label="Email"
            leftIcon={{ type: "font-awesome", name: "envelope" }}
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="email@address.com"
            autoCapitalize="none"
            style={styles.inputStyle}
          />
        </View>
        <View style={styles.verticallySpaced}>
        <Text style={styles.labelStyle}>Password</Text>
          <TextInput 
            label="Password"
            leftIcon={{ type: "font-awesome", name: "lock" }}
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
            placeholder="Password"
            autoCapitalize="none"
            style={styles.inputStyle}
            labelStyle={styles.labelStyle}
          />
        </View>
        <View style={[styles.verticallySpaced, styles.mt20]}>
          <TouchableOpacity
            style={styles.button}
            disabled={loading}
            onPress={() => signInWithEmail()}
            onPressOut={() => setLoading1(true)}
          >
            <Text style={{ color: 'white' }}>Sign In</Text>
          </TouchableOpacity>
          </View>
        <View style={styles.verticallySpaced}>
        <TouchableOpacity
            style={styles.button}
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

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    padding: 12,
  },
  boxLogin: {
    borderWidth: 2,
    borderColor: "#27546C",
    alignItems: "center",
    textAlign: "center",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: "#27546C",
    height: 300,
   
  },
  inputStyle:{
    
    padding: 13,
    borderWidth: 4,
    borderColor: "#27546C",
    borderRadius: 30,
    width: 350,
  },
  labelStyle:{
    color:'#27546C',
    fontSize:16,
    fontWeight:'700',
    padding:12,
  },
  covidHeading: {
    color: "#F19B1F",
    fontSize: 32,
    alignSelf: "center",
    fontWeight: "bold",
    margin: 25,
    marginTop: "15%",
  },
  verticallySpaced: {
    
    paddingTop: 2,
    paddingBottom: 4,
    alignSelf: "center",
    
  },
  button:{
    backgroundColor: '#27546C',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    alignSelf:'center',
    width:250

  },
  
  mt20: {
    marginTop: 10,
  },
});
