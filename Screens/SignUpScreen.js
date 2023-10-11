import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import SignupForm from '../components/signupScreen/SignupForm'
import { authentication } from '../firebase'

const SignUpScreen = ({navigation}) => (
    <View style={styles.container}>      
        <View style={styles.logoContainer}>
            <Image style={{width: 100, height: 50, resizeMode: 'contain'}} source={require('../assets/logo.png')} />
        </View>
        <SignupForm navigation={navigation} />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#282b30',
        paddingTop: 50, 
        paddingHorizontal: 12
    },

    logoContainer: {
        alignItems: 'center',
        marginTop: 60,
      },
})

export default SignUpScreen