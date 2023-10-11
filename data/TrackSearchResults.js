import React from 'react'
import { StyleSheet } from 'react-native'

export default function TrackSearchResults({track}) {
  return (
    <div className="d-flex m-2 align-items-center">
        <img src={track.albumUrl} style={{height: '64px', width: "64px"}}/>
    </div>
  )
}
