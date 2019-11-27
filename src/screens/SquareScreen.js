import React, {useReducer} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

//cara 3

const increment_value = 15;
const reducer = (state, action) =>{
   //state === {red:number, green:number, blue:number}
   //action === {colorToChange: 'red'||'green' || 'blue', amount: 15||-15}
   
   switch(action.colorToChange) {
      case 'red' :
         return {...state, red: state.red+ action.amount};
         //state = green:0, blue:0 auto delete case_value 'red'
      case 'green':
         return {...state, green: state.green+ action.amount};
      case 'blue' :
         return {...state, blue: state.blue + action.amount};
   }
}

const SquareScreen = () => {
   const [state, dispatch] =useReducer(reducer, {red:0, green:0, blue:0});
   const {red, green, blue }= state;
   //state == {red:0, green:0, blue:0}
   //dispatch = {colorToChange: 'red'||'green' || 'blue', amount: 15||-15}


   return (
      <View>
         <ColorCounter 
            onIncrease = {() => dispatch({colorToChange:'red', amount : increment_value})}
            onDecrease = {() => dispatch({colorToChange:'red', amount : -1*increment_value})}
            color= 'Red'
         />

         <ColorCounter 
            onIncrease = {() =>dispatch({colorToChange:'blue', amount : increment_value})}
            onDecrease = {() =>dispatch({colorToChange:'blue', amount : -1 * increment_value})}
            color='Blue'
         />

         <ColorCounter 
            color="Green"
            onIncrease = {() => dispatch({colorToChange:'green', amount : increment_value})}
            onDecrease = {() => dispatch({colorToChange:'green', amount : -1 * increment_value})}
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