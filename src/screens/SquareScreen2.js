import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
   const [red, setRed] = useState(0);
   const [green, setGreen] = useState(0);
   const [blue, setBlue] = useState(0);

   const increment_value = 15;
   const setColor = (color, change) => {
      //change = +15, -15
      // if (color === 'red'){
      //    if(color + change > 255 || color + change < 0){
      //       return ;
      //    } else {
      //       setRed(red + change);
      //    }
      // } cara 2--->

      switch(color) {
         case 'red' : 
         red + change > 255 || red + change < 0 ? null: setRed(red+change)
         return;
         case 'green' :
         green + change > 255 || green + change < 0 ? null: setGreen(green + change)
         return;
         case 'blue':
         blue + change > 255 || blue+ change < 0 ? null: setBlue(blue + change)
         default:
         return ;
      }
   }
   return (
      <View>
         <ColorCounter 
            onIncrease = {() => setColor('red',  increment_value)}
            onDecrease = {() => setColor('red', -1* increment_value)}
            color= 'Red'
         />

         <ColorCounter 
            onIncrease = {() =>setColor('blue', increment_value)}
            onDecrease = {() =>setColor('blue', -1* increment_value)}
            color='Blue'
         />

         <ColorCounter 
            color="Green"
            onIncrease = {() => setColor('green',  increment_value)}
            onDecrease = {() => setColor('green', -1* increment_value)}
         />

         <View 
            style = {{
               height: 150,
               width: 150,
               backgroundColor: `rgb(${red}, ${green}, ${blue})`
            }}
         />
      </View>
   )
}

const styles = StyleSheet.create ({

})

export default SquareScreen;