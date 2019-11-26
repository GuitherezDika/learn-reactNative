import React from 'react';
import { Text, StyleSheet, Button, View, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {

  return (
    <View>
      <Text style={styles.text}>Hai Mahardika!</Text>
      <Button 
        onPress= {() => navigation.navigate('Components')}
        title='Go to the Components Demo'
      />

      <Button 
        onPress = {() => navigation.navigate('List')}
        title ='Please look our customer data'
      />

      <Button 
        onPress = {() => navigation.navigate('Image')}
        title = 'How to display image?'
      />

    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
