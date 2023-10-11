import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { firebase, db } from '../../firebase'

const postFooterIcons = [
    {
      name: 'Like',
      imageUrl: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/music.png',
      likedImageUrl: 'https://img.icons8.com/fluency-systems-regular/48/ff0000/music.png'
    },
  
    {
      name: 'Comment',
      imageUrl: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/speech-bubble--v1.png'
    }
  ]

const Post = ({post}) => {
  /*const handleLike = post => {
    const currentLikeStatus = !post.likes_by_users.includes(
      firebase.auth().currentUser.email
    )

    db.collection('users')
    .doc(post.owner_email)
    .collection('posts')
    .doc(post.id)
    .update({
      likes_by_users: currentLikeStatus ? firebase.firestore.FieldValue.arrayUnion(firebase.auth().currentUser.email) 
      : firebase.firestore.FieldValue.arrayRemove(firebase.auth().currentUser.email),
    }).then() */
  //}
  return (
    <View style={{marginBottom: 30, marginTop: 50}}>
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{marginHorizontal: 15, marginTop: 10}}>
        <PostFooter post={post}  /> 
        <Caption post={post} />
      </View>
    </View>
  )
}
//handleLike={handleLike} insert in PostFooter

const PostHeader = ({post}) => (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        alignItems: 'center'
    }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={{ uri: post.profile_picture }} style={styles.story}/>
            <Text style={{color: 'white', marginLeft: 5, fontWeight: '700'}}>
                {post.user}
            </Text>
        </View>
    </View>
)

const PostImage = ({post}) => (
    <View style={{width: '100%', height: 450}}>
        <Image source={{uri: post.imageUrl}} style={{height: '100%', resizeMode: 'cover'}} />
    </View>
)

const PostFooter = ({handleLike, post}) => (
    <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '20%'}}>
      <TouchableOpacity onPress={() => handleLike(post)}>
        <Image style={styles.footerIcon} source={{uri: postFooterIcons[0].imageUrl}} />
        </TouchableOpacity>
        <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl} />
    </View>
)
/*post.likes_by_users.includes(firebase.auth().currentUser.email)
? postFooterIcons[0].likedImageUrl 
: postFooterIcons[0].imageUrl */

const Icon = ({imgStyle, imgUrl}) => (
    <TouchableOpacity>
        <Image style={imgStyle} source={{uri: imgUrl}} />
    </TouchableOpacity>
)

const Like = ({ post }) => (
  <View style={{ flexDirection: 'row', marginTop: 4}}>
    <Text>
      {post.likes_by_users.length.toLocaleString('en')} likes
    </Text>
  </View>
)

const Caption = ({post}) => (
  <View style={{marginTop: 5}}>
    <Text style={{color: 'white', fontSize: 20, marginRight: 20}}>
      <Text> {post.caption}</Text>
    </Text>
  </View>
)

const styles = StyleSheet.create({
    story: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1.6,
        borderColor: '#ff8501'
    },

    footerIcon: {
        width: 33,
        height: 33
    }
})

export default Post