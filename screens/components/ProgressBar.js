import * as React from 'react'
import { Button, Text, View, StyleSheet, Dimensions } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import Card from './CardUnit'
import { Ionicons } from '@expo/vector-icons';

const {width, height} = Dimensions.get('screen'); 

export default function ProgressBar(props) {
  
  return (
   <View style={styles().barContainer}>
     <View style={styles(props.progress).rectangle}>
     </View>
   </View> 
  )
}

const styles = (a) =>  StyleSheet.create({
  barContainer: {
    width: width<600 ? width-80 : width-300,
    height: 10,
    backgroundColor: '#e6e6e6',
    borderRadius: 5,
    alignItems: 'flex-start',
  },
  rectangle: {
    width: width<600 ? a * (width-80) : a*(width-300),
    height: 10,
    backgroundColor: 'orange',
    borderRadius: 5,    

  }
})