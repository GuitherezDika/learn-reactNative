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

      <Button 
        title = 'Check the count result :'
        onPress = {()=> navigation.navigate('Counter')}
      />

      <Button 
        title='Go to Color Demo!'
        onPress = {() => navigation.navigate('Color')} 
      />

      <Button 
        title = 'Go to Square Demo'
        onPress = {() => navigation.navigate('Square')}
      />

      <Button 
        title = 'Go to Current Count Demo'
        onPress = {() => navigation.navigate('Count')}
        />
      
      <Button 
        title = 'Go to Text Demo'
        onPress = {() => navigation.navigate('Text')}
        />

      <Button 
        title = 'Go to Password Demo'
        onPress = {() => navigation.navigate('Password')}
      />

      <Button 
        title = 'Go to Box Demo'
        onPress = {() => navigation.navigate('Box')}
      />

      <Button 
        title = 'Go to BoxExercise Demo'
        onPress = {() => navigation.navigate('BoxExercise')}
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
