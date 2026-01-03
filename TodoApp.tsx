import React, { useReducer, useState } from 'react';
type Todo = {
    id: number;
    text: string;
    completed: boolean;
};

type State = Todo[];

type Action = 
| {type: "ADD"; payload: string}
| {type: "DELETE"; payload: number}
| {type: "TOGGLE"; payload: number}


function reducer(state: State, action: Action): State {
    switch(action.type){
        case "ADD":
            return [
                ...state,
                {id: Date.now(), text: action.payload, completed: false}
            ];
            case "DELETE":
                return state.filter((todo) => todo.id !== action.payload);
                case "TOGGLE":
                    return state.map((todo) => 
                    todo.id === action.payload 
                    ? {...todo, completed: !todo.completed}:
                    todo
                    );
                    default:
                        return state;
    }
}

const TodoApp:React.FC = () => {
    const [state, dispatch] = useReducer(reducer, []);
    const [input, setInput] = useState(" ");

    const handleAdd = () => {
        if (input.trim() !== " ") {
            dispatch({type: "ADD", payload: input});
            setInput(" ");
        }
    };
    return(
        <div>
            <h1>Todo App</h1>
            <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter task..."/>
            <button onClick={handleAdd}>Add</button>

            <ul>
                {state.map((todo) =>(
                    <li key ={todo.id}>
                        <span style={{textDecoration: todo.completed ? "line-through":  "none",}}
                        onClick={() => dispatch({type: "TOGGLE", payload: todo.id})}>
                          {todo.text}
                        </span>
                    <button onClick={() => dispatch({type: "DELETE", payload: todo.id})}>
                        Delete
                    </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoApp;