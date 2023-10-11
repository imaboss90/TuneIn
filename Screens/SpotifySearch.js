import { View, Text, Image, FlatList, SafeAreaView, FormControl, Button, StyleSheet, EventEmitter } from 'react-native'
import { SearchBar } from 'react-native-elements';
import React, { useState, useEffect } from 'react'
import { Container, Form} from 'react-bootstrap'
import TrackSearchResults from '../data/TrackSearchResults';

//import { async } from '@firebase/util';
//import axios from 'axios'

const CLIENT_ID = "35913b49692d4acd8aa7334b4694f6df"
const CLIENT_SECRET = "14633c7524b4473683ff6ba77c47f2f6"

const SpotifySearch = () => {

    const [searchInput, setSearchInput] = useState("")
    const [accessToken, setAccessToken] = useState("")
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        var authParams = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
        }
        fetch('https://accounts/spotify.com/api/token', authParams)
            .then(result => result.json())
            .then(data => setAccessToken(data.access_token))
    },[])

    async function search(){
        console.log("Search for " + searchInput);

        var searchParameters = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer'+ accessToken
            }
        }

        var artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
        .then(response => response.json())
        .then(data => {return data.artists.items[0].id})

        console.log("Artist ID is " + artistID);

        var returnedAlbums = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album&market=US&limit=50', searchParameters)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setAlbums(data.items);
        });

    }
return(
    <View style={styles.container}>
        <SearchBar
        placeholder='Search Songs/Artists'
        value={searchInput}
        onKeyPress={event => {
            if (event.key == 'Enter') {
                search()
            }
        }}
        
        />
       
        {albums.map((album, i) => {
            console.log(album);
            return (
            <Image src={album.images[0].url}/>
                )
        })}

     
    </View>
)

        

}

const styles = StyleSheet.create({
    container: {
        marginTop: 70,
    },

})

export default SpotifySearch