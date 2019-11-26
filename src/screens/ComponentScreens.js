import React from 'react';
import {Text, StyleSheet, View } from 'react-native';

const name = 'Guitherez Mahardika Sinaga';

const ComponentScreens = () => {
   return (
      <View>
         <Text style={ColorSection.textStyle}>Getting started with React-Native</Text>
         <Text style={ColorSection.subSentence}>My name is {name}</Text>
      </View>
   )
};

const ColorSection = StyleSheet.create ({
   textStyle : {
      fontSize: 45,
      color: 'blue'
   },
   subSentence : {
      fontSize: 27,
      color: 'green',
   }
}) 

export default ComponentScreens;