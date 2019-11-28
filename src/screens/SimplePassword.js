import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

const SimplePassword = () => {
   const [password, setPassword] = useState('')
   return (
      <View>
         <Text>Enter Password : </Text>
         <TextInput 
            style={styles.input}
            autoCorrect={false}
            autoCapitalize= 'none'
            value={password}
            onChangeText = {newValue => setPassword(newValue)}
         />
         {password.length <= 4 ? <Text>Password must be 4 at characters</Text> : null}
      </View>
   )
}

const styles = StyleSheet.create({
   input : {
      margin: 15,
      borderColor: 'black',
      borderWidth: 1,
   }
});

export default SimplePassword;