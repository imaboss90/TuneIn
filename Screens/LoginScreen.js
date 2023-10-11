//import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
//import { authentication } from '../firebase'
//import firebase from '../firebase'
import React, { useEffect, useState } from 'react'
//import { useNavigation } from '@react-navigation/core'
import { View, Text, SafeAreaView, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, Image } from 'react-native'
import LoginForm from '../components/loginScreen/LoginForm'

const LoginScreen = ({navigation}) => (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={{width: 100, height: 50, resizeMode: 'contain'}} source={require('../assets/logo.png')} />
      </View>
      <LoginForm navigation={navigation} />
    </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282b30',
    paddingTop: 50,
    paddingHorizontal: 12,
  },

  logoContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
})


export default LoginScreen
/*const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  useEffect(() => {
   const unsubscribe = authentication.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Home")
      }
    })

    return unsubscribe
  }, [])

  const SignInUser = () =>{
  createUserWithEmailAndPassword(authentication, email, password)
    .then((userCredentials) => {
        const user = userCredentials.user;
        console.log('Registered in with:', user.email);

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

    });
  }
  
  const handleLogin = () =>{
  signInWithEmailAndPassword(authentication, email, password)
    .then((userCredentials) => {
      const user = userCredentials.user;
      console.log('Logged in with:', user.email);

    })
    .catch((error) => {
     const errorCode = error.code;
      const errorMessage = error.message;

    });
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Email"
          placeholderTextColor="white" 
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        
        />
        <TextInput 
          placeholder="Password"
          placeholderTextColor="white" 
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={SignInUser}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>

  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#282b30',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: '#1e2124', //white
    color: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9', //#0782F9
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
}) */


