//import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { authentication } from '../firebase'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import { View, Text, SafeAreaView, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'


const SignOut = () => {

    const navigation = useNavigation()

    const handleSignout = () =>{
        authentication
            .signOut()
            .then(() =>{
                navigation.replace("Login")
            })
            .catch(error => alert(error.message))
    }

    return(
        <View style={styles.container}>
            <Text style={styles.textStyle}>Would you like to sign out of: {authentication.currentUser?.email}</Text>
            <TouchableOpacity
                onPress={handleSignout}
                style={styles.button}
            >
            <Text style={styles.buttonText}>Sign out</Text>
            </TouchableOpacity>
        </View>
    )
}        

export default SignOut

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#282b30',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#0782F9', //#0782F9
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    textStyle: {
        color: 'white',
        fontWeight: '700',
        fontSize: 20,
        padding: 5,
    }
})