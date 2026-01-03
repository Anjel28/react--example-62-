import React, { useReducer } from "react";

type FormState = {
    name: string;
    email: string;
    password: string;
};

type Action =
| {type: "SET_NAME"; payload: string}
| {type: "SET_EMAIL"; payload: string}
| {type: "SET_PASSWORD"; payload: string}

const reducer = (state: FormState, action: Action): FormState  => {
    switch(action.type){
        case "SET_NAME":
            return {...state, name: action.payload};
            case "SET_EMAIL":
                return {...state, email: action.payload};
                case "SET_PASSWORD":
                    return {...state, password: action.payload};
                    default:
                        return state;
    }
}

const FormComponents: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, {
        name: " ",
        email: " ",
        password: " ",
    });
    return(
        <div>
            <input
            value={state.name}
            onChange={(e) => dispatch({type: "SET_NAME", payload: e.target.value})}/>
            <input
            value={state.email}
            onChange={(e) => dispatch({type: "SET_EMAIL", payload: e.target.value})}/>
            <input 
            value={state.password}
            onChange={(e) => dispatch({type: "SET_PASSWORD", payload: e.target.value})}/>
        </div>
    )
}


export default FormComponents;