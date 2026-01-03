import React, { useReducer } from "react";

type CounterState = {
    count: number;
}


type CounterAction = 
| {type: "INCREMENT"}
| {type: "DECREMENT"}
| {type: "RESET"};


function CounterReducer(state: CounterState, action: CounterAction): CounterState {
    switch(action.type){
        case "INCREMENT":
            return {count: state.count + 1};
            
            case "DECREMENT":
                return {count: state.count - 1};

                case "RESET":
                    return {count: 0};

                    default:
                        return state;
        }
}

const Counter: React.FC = () => {
    const initialState: CounterState = {count: 0};
    const [state, dispatch] = useReducer(CounterReducer, initialState);

    return(
        <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
    )
}

export default Counter;