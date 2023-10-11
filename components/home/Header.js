import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core'

const Header = () => {

  const navigation = useNavigation();
  const handleSignOut = () => {
    navigation.replace("UserAccount")
  }

  const handleSearch = () => {
    navigation.replace("SpotifySearch")
  }

  return (
    <View style={styles.container}>
         <View style={styles.iconsContainer}>
        <TouchableOpacity
          onPress={handleSearch}>
            <Image
                source={{
                    uri: 'https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/96/ffffff/external-friends-user-tanah-basah-basic-outline-tanah-basah.png'
                }}
                style={styles.icon}
            />

        </TouchableOpacity>
      </View>
        <TouchableOpacity>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
        <TouchableOpacity
          onPress={handleSignOut}
        >
            <Image
                source={{
                    uri: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/user.png'
                }}
                style={styles.icon}
            />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
    },

    iconsContainer: {
        flexDirection: 'row',
    },

    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
    },

    icon: {
        width: 30,
        height: 30,
        marginLeft: 10,
        resizeMode: 'contain',
    }
})


export default Header