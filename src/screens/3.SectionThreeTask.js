import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const CustomerList = ( ) => {
   const customer = [
      {name: 'Friend 1 ', key: '20'},
      {name: 'Friend 2 ', key: '45'},
      {name: 'Friend 3 ', key: '32'},
      {name: 'Friend 4 ', key: '27'},
      {name: 'Friend 5 ', key: '53'},
      {name: 'Friend 7 ', key: '30'}

   ];

   const styles = StyleSheet.create ({
      editText: {
         marginVertical:5,
      }
   })

   return (
      <FlatList 
         keyExtractor = {customer => customer.name}
         data = {customer} 
         renderItem={({item}) => {
            return <Text style={styles.editText}>{item.name} - Age {item.key}</Text>
         }} 
      />
   );
}

export default CustomerList;