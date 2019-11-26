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
        onPress = {() => navigation.navigate('Task')}
        title ='Please look our duty'
      />
      
      {/* <TouchableOpacity onPress={() => props.navigation.navigate('Task') }>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
