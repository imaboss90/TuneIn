import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import React, { useState, useEffect } from 'react'
import Header from '../components/home/Header'
import Post from '../components/home/Post'
import { ScrollView } from 'react-native'
import {POSTS } from '../data/posts'
import Bottom from '../components/home/Bottom'
import { db } from '../firebase'
import { onSnapshot, orderBy, collectionGroup, query } from 'firebase/firestore'

const HomeScreen = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const post = collectionGroup(db, 'posts')
        const postQuery = query(post)
        onSnapshot(postQuery, (snapshot) => {setPosts(snapshot.docs.map(doc => doc.data()))
        })
    }, []) 

  return (
    <SafeAreaView style={styles.container}>
        <Header />
        <ScrollView>
            {posts.map((post, index) => (
                <Post post={post} key={index} />
            ))}
        </ScrollView>
        <Bottom />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    },
})

export default HomeScreen