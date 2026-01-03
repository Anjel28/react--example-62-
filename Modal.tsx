import React, { useReducer } from "react";


type ModalState = {
   login: boolean;
   settings: boolean;
   confirmation: boolean;
};

type ModalAction = 
| {type: "OPEN_MODAL"; modal: keyof ModalState}
| {type: "CLOSE_MODAL"; modal: keyof ModalState}
| {type: "TOGGLE_MODAL"; modal: keyof ModalState}
| {type: "CLOSE_ALL"};

function modalReducer(state: ModalState, action: ModalAction): ModalState  {
    switch (action.type){
        case "OPEN_MODAL":
            return {...state, [action.modal]: true};

            case "CLOSE_MODAL":
                return {...state, [action.modal]: false};

                case "TOGGLE_MODAL":
                    return {...state, [action.modal]: !state[action.modal]};

                    case "CLOSE_ALL":
                        return {login: false, settings: false, confirmation: false};

                        default:
                            return state;
    }
}

const Modal:React.FC = () => {
    const initialState: ModalState = {
        login: false,
        settings: false,
       confirmation:false,

    };

    const [state,dispatch] = useReducer(modalReducer, initialState);
    return(
        <div>
            <h1>Modal System Example</h1>

            <button onClick={() => dispatch({type: "OPEN_MODAL", modal: "login"})}>
                Open Login
            </button>

            <button onClick={() => dispatch({ type: "TOGGLE_MODAL", modal: "settings" })}
      >
        Toggle Settings
      </button>

       <button onClick={() => dispatch({ type: "OPEN_MODAL", modal: "confirmation" })}
      >
        Open Confirmation
      </button>
      <button onClick={() => dispatch({ type: "CLOSE_ALL" })}>Close All</button>


      {state.login &&  <div className="modal">Login Modal</div>}
      {state.settings && <div className="modal">Settings Modal </div>}
      {state.confirmation && <div className="modal">Confirmation Modal </div>}
        </div>


    )
}

export default Modal;