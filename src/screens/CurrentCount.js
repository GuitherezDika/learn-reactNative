import React, {useReducer} from 'react';
import {Text, View, Button} from 'react-native';

const reducer = (state, action) => {
   switch(action.type){
      case 'increment' :
         return {...state, count: state.count + action.payload};
      case 'decrement' :
         return {...state, count: state.count - action.payload};
      }
}

const CurrentCount = () =>{
   const [state, dispatch] = useReducer(reducer, {count: 0})

   return (
      <View>
         <Button title='increase' onPress={()=>{
            dispatch({type: 'increment', payload: 1})
            }}
         />
         <Button title='decrease' onPress={()=>{
            dispatch({type: 'decrement', payload: 1})
         }}
      />

      <Text>Current Count : {state.count}</Text>
      </View>
   )
}

export default CurrentCount;