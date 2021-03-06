import React, {useReducer} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

//cara 3

const increment_value = 15;
const reducer = (state, action) =>{
   //state === {red:number, green:number, blue:number}
   //action === {colorToChange: 'red'||'green' || 'blue', amount: 15||-15}
   //action === {type: 'change_red' || 'change_green'||'change_blue', payload: 15|| -15}
   switch(action.type) {
      case 'change_red' :

         return state.red + action.payload > 255 || state.red+action.payload < 0 
         ? state
         : {...state, red: state.red+ action.payload};
            
         //state = green:0, blue:0 auto delete case_value 'red'
      case 'change_green':
         return state.green + action.payload > 255 || state.green+action.payload < 0 
         ? state
         : {...state, green: state.green+ action.payload};

      case 'change_blue' :
         return state.blue + action.payload > 255 || state.blue+action.payload < 0 
         ? state
         : {...state, blue: state.blue + action.payload};
      default:
         return state;

   }
}

const SquareScreen = () => {
   const [state, dispatch] =useReducer(reducer, {red:0, green:0, blue:0});
   // console.log(state);
   console.log(dispatch);
   const {red, green, blue }= state;
   //state == {red:0, green:0, blue:0}
   //dispatch = {colorToChange: 'red'||'green' || 'blue', amount: 15||-15}


   return (
      <View>
         <ColorCounter 
            onIncrease = {() => 
               dispatch({type:'change_red', payload : increment_value})
            }
            onDecrease = {() => 
               dispatch({type:'change_red', payload : -1*increment_value})
            }
            color= 'Red'
         />

         <ColorCounter 
            onIncrease = {() =>
               dispatch({type:'change_blue', payload : increment_value})
            }
            onDecrease = {() =>
               dispatch({type:'change_blue', payload : -1 * increment_value})
            }
            color='Blue'
         />

         <ColorCounter 
            color="Green"
            onIncrease = {() => 
               dispatch({type:'change_green', payload : increment_value})
            }
            onDecrease = {() => 
               dispatch({type:'change_green', payload : -1 * increment_value})
            }
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