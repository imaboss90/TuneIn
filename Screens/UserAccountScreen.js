import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { authentication } from '../firebase'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import { View, Text, SafeAreaView, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, Image } from 'react-native'
import SignOut from './SignOut'


const UserAccountScreen = () => {

    const navigation = useNavigation();
    const handleSignOut = () => {
        navigation.replace("Signout")
      }

    return(
        <View style={styles.container}>
            <Image 
            style={styles.userImage}
            source={{uri: 'https://samoyedcoin.com/wp-content/uploads/2021/05/cropped-cropped-samocoinicon-1.png'}}  
            />
            <Text style={styles.textStyle}>Library</Text>
            <Text style={styles.textStyle}>Privacy</Text>
            <Text style={styles.textStyle}>Settings</Text>
            <Text 
            style={styles.textStyle}
            onPress={handleSignOut}>Sign out</Text>
        </View>
    )
}        

const Icon = ({imgStyle, imgUrl}) => (
    <TouchableOpacity>
        <Image style={imgStyle} source={{uri: imgUrl}} />
    </TouchableOpacity>
)

export default UserAccountScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#282b30',
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    textStyle: {
        color: 'white',
        fontWeight: '700',
        fontSize: 20,
        padding: 5,
    },
    userImage: {
        marginTop: 50,
        height: 150,
        width: 150,
        borderRadius: 75,
        padding: 10,
    },
})