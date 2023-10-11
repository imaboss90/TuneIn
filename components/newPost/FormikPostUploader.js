import { View, Text, Image, Button, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Divider } from 'react-native-elements'
import { authentication, db } from '../../firebase'
import { collection, onSnapshot, limit, query, addDoc, where } from 'firebase/firestore'

const PLACEHOLDER_IMG = 'https://www.brownweinraub.com/wp-content/uploads/2017/09/placeholder.jpg'

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200, 'Caption has reached the character limit.')
})

const FormikPostUploader = () => {
    const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG)
    const [currentLoggedInUser, setCurrentLoggedInUser] = useState(null)

    const getUsername = () => {
        const user = authentication.currentUser
        const q = query(collection(db, 'users'), where('owner_id', '==', user.uid), limit(1));
        const unsubscribe = onSnapshot(q, (snapshot) => snapshot.docs.map(doc => {
            setCurrentLoggedInUser({
                username: doc.data().username,
                profilePicture: doc.data().profile_picture
            })
        }))
        return unsubscribe
    }

    /* const getUsername = () => {
        const user = authentication.currentUser
        const unsubscribe = db.collection('users').where('owner_id', '==', user.uid).limit(1).onSnapshot(
            snapshot => snapshot.docs.map(doc => {
                setCurrentLoggedInUser({
                    username: doc.data().username,
                    profilePicture: doc.data().profile_picture
                })
            })
        )
        return unsubscribe
    } */

      /*const getUsername = () => {
          const user = authentication.currentUser
          const q = query(collection(db, "users"), where("owner_id", "==", user.uid), limit(1));
          const unsubscribe = onSnapshot(snapshot => snapshot.docs.map(doc => {
              setCurrentLoggedInUser({
                  username: doc.data().username,
                  profilePicture: doc.data().profile_picture
                })
            }
        } */
    
        

    useEffect(() => {
        getUsername()
    }, [])

    /*const uploadPostToFirebase = (imageUrl, caption) => {
        const unsubscribe = db
        .collection('users')
        .doc(firebase.auth().currentUser.email)
        .collection('posts')
        .add({
            imageUrl: imageUrl,
            user: currentLoggedInUser.profilePicture,
            profile_picture: currentLoggedInUser.profilePicture,
            owner_uid: firebase.auth().currentUser.uid,
            caption: caption,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            likes: 0,
            likes_by_users: [],
            comments: []
        })
        .then(() => navigation.goBack())

    return unsubscribe
    } */

    const uploadPostToFirebase = (imageUrl, caption) => { 
        const unsubscribe = addDoc(collection(db, 'users', authentication.currentUser.email, 'posts'), {
            imageUrl: imageUrl,
            user: currentLoggedInUser.username,
            profile_picture: currentLoggedInUser.profilePicture,
            owner_uid: authentication.currentUser.uid,
            caption: caption,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            likes: 0,
            likes_by_users: [],
            comments: []
        })
        .then(() => navigation.goBack())

    return unsubscribe
    }
  
    return (
    <Formik initialValues={{caption: '', imageUrl: ''}} onSubmit={values => {uploadPostToFirebase(values.imageUrl, values.caption)}} validatonSchema={uploadPostSchema}
        validateOnMount={true} >
        {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
            <>
            <View style={{margin: 20, justifyContent: 'space-between', flexDirection: 'row'}}>
                <Image source={{uri: thumbnailUrl ? thumbnailUrl : PLACEHOLDER_IMG}} style={{width: 100, height: 100}}/>

                <View style={{ flex: 1, marginLeft: 12 }}>
                    <TextInput style={{color: 'white', fontSize: 20}} placeholder='Write a caption...' placeholderTextColor='gray' multiline={true}
                        onChangeText={handleChange('caption')}
                        onBlur={handleBlur('caption')}
                        value={values.caption}
                    />
                </View>
            </View>
            <Divider width={0.2} orientation='vertical' />
            <TextInput style={{color: 'white', fontSize: 18}} placeholder='Enter Image Url' placeholderTextColor='gray' 
                onChangeText={handleChange('imageUrl')}
                onBlur={handleBlur('imageUrl')}
                value={values.imageUrl}
                onChange={e => setThumbnailUrl(e.nativeEvent.text)}
            />
            {errors.imageUrl && (
                <Text style={{ fontSize: 10, color: 'red' }}>
                    {errors.imageUrl}
                </Text>
            )}

            <Button onPress={handleSubmit} title='Share' disabled={!isValid} />
            </>
        )}
    </Formik>
  )
}

export default FormikPostUploader