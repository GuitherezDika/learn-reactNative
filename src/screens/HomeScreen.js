import React from 'react';
import { Text, StyleSheet, Button, View } from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Hai Mahardika!</Text>
      <Button 
        onPress= {() => console.log('Button pressed')}
        title='Go to the Components Demo'/>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
