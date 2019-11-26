import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const CallText = () => {
   const Name = <Text style={NameStyle.textStyle}>My name is Guitherez</Text>
   const NameTwo=<Text style={CallTextStyle.subHeaderStyle}>Her name is Javascript</Text>
   return (
      <View>
         <Text style={CallTextStyle.textStyle}>
            Getting Started with React-Native
         </Text>
         {Name}
         {NameTwo}
      </View>
   )
}

const NameStyle = StyleSheet.create ({
   textStyle: {
      fontSize:20,
      color:'blue',
   } 
})

const CallTextStyle = StyleSheet.create ({
   textStyle : { 
      fontSize:45,
      color: 'red',
   },
   subHeaderStyle : {
      fontSize:30,
      color: 'green'
   }
});


export default CallText;