import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const ImageDetail = ({asal, judul, nilai}) => {
   return (
      <View>
         <Image source={asal} />
         <Text style={styles.changeForm}>{judul}</Text>
         <Text style={styles.changeForm}>Image score - {nilai}</Text>         
      </View>
   )
}

const styles = StyleSheet.create ({
   changeForm: {
      color: 'black',
      fontSize: 20,
      fontWeight:"bold"
   }
})

export default ImageDetail;

