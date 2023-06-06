import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity ,Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginPage = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showSignInForm, setShowSignInForm] = useState(false);
  const renderLoginForm = () => (
    <View>
      
      <Image style={{left:'5%'}} source={require('../Images/virus.png')} />
      <Text style={styles.title}>COVID TRACKER</Text>
      <TouchableOpacity style={styles.button} onPress={() => setShowSignInForm(true)}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setShowSignUpForm(true)}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );

  const renderSignUpForm = () => (
    <View>
      <TouchableOpacity style={styles.backButton2} onPress={() => setShowSignUpForm(false)}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <TextInput style={styles.input} placeholder="Name" />
      <TextInput style={styles.input} placeholder="Surname" />
      <TextInput style={styles.input} placeholder="Age" />
      <TextInput style={styles.input} placeholder="Blood Type" />
      <TextInput style={styles.input} placeholder="Gender" />
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );

  const renderSignInForm = () => (
    <View>
      <TouchableOpacity style={styles.backButton1} onPress={() => setShowSignInForm(false)}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgotPasswordButton}>
        <Text style={styles.forgotPasswordText}>Forget Password?</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {(!showSignInForm && !showSignUpForm) && renderLoginForm()}
      {showSignUpForm && !showSignInForm && renderSignUpForm()}
      {showSignInForm && !showSignUpForm && renderSignInForm()}


    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#27546C",
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center'
  },
  button: {
    backgroundColor: "#191c2b",
    width: 230,
    height: 50,
    padding: 12,
    marginBottom: 16,
    borderRadius: 30,
    
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  backButton1: {
    position: 'absolute',
    top: "-80%",
    left: "-15%",
    color: "#191c2b"
  },
  backButton2: {
    position: 'absolute',
    top: "-3%",
    left: "-15%",
    color: "#191c2b"
  },
  backButtonText: {
    fontSize: 17,
    color: "#191c2b",
    textDecorationLine: 'underline',
    
  },
  input: {
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#191c2b",
    borderRadius: 30,
    width: 250,
  },
  signInButton: {
    backgroundColor: "#191c2b",
    padding: 12,
    marginBottom: 8,
    borderRadius: 30
  },
  forgotPasswordButton: {
    marginBottom: 16,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: 'white',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
};

export default LoginPage;
