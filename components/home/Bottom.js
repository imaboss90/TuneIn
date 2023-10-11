import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core'

const Bottom = () => {

    const navigation = useNavigation();
    const Post = () => {
        navigation.navigate("NewPost")
      }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={Post}>
        <Image 
            source={{
                uri: 'https://img.icons8.com/windows/100/ffffff/filled-plus-2-math.png'
            }}
            style={styles.icon}
        />
      </TouchableOpacity>
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

    icon: {
        width: 30,
        height: 30,
        marginLeft: 155,
        resizeMode: 'contain',
    }
})

export default Bottom