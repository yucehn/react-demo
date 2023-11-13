// import {configureStore} from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux"; 

// const increment = () => {
//   return {
//     type: "INCREMENT", //action Name
//   }
// }
// const decrement = () => {
//   return {
//     type: "DECREMENT", //action Name
//   }
// }

// const counter = (state = 0, action) => {
//   switch(action.type){
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       return state;
//   }
// }

// const store = configureStore({
//   reducer: counter,
// });

// store.subscribe(()=>console.log(store.getState()));
// store.dispatch(increment());

import {increment, decrement} from "../../../action"

const ReduxCounter = () => {
  const currentNum = useSelector((state)=>state.counterReducer)
  const dispatch = useDispatch();

  return (
    <div>
      ReduxCounter
      <button onClick={()=> dispatch(decrement())}>-</button>
      {/* {store.getState()} */}
      <p>{currentNum}</p>
      <button onClick={()=> dispatch(increment())}>+</button>
    </div>
  )
}

export default ReduxCounter;