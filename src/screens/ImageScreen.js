import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageDetail from '../components/ImageDetail';


const ImageScreen = () => {
   return (
      <View>
         <ImageDetail judul='Beach' asal= {require('../../assets/beach.jpg')} nilai= {7} />
         <ImageDetail judul='Forest' asal= {require('../../assets/forest.jpg')} nilai= {9}/>
         <ImageDetail judul='Mountain' asal= {require('../../assets/mountain.jpg')} nilai= {8}/>
      </View>
   )
}

const styles = StyleSheet.create ({
   changeForm: {
      color: 'brown',
      fontSize: 24,
   }
})

export default ImageScreen;

