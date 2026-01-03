import React, { useReducer } from "react";

type FormState = {
    step: number;
    data: {
        name: string;
        email: string;
        address: string;
        city: string;
        newsletter: boolean;
    }
}

type FormAction = 
| {type: "NEXT_STEP"}
| {type: "PREVIOUS_STEP"}
| {type: "UPDATE_FIELD", field: keyof FormState["data"]; value: string | boolean}
| {type: "RESET_FORM"}

function formReducer(state: FormState, action: FormAction): FormState {
    switch(action.type){
        case "NEXT_STEP":
            return {...state, step: state.step + 1};
            case "PREVIOUS_STEP":
                return {...state, step: state.step - 1};
                case "UPDATE_FIELD": return { ...state, data: { ...state.data, [action.field]: action.value }, };
                   case "RESET_FORM":
                    return {
                        step: 1,
                        data: {name: " ", email: " ", address: " ", city: " ", newsletter: false},
                    };
                    default:
                        return state;
    
            }
        }

        const SingupWizard: React.FC = () => {
            const initialState: FormState = {
                step: 1,
                data: {name: " ", email: ".", address: " ", city: " ", newsletter: false},
            };

            const [state, dispatch] = useReducer(formReducer, initialState);

            const handleChange = (field: keyof FormState["data"], value: string | boolean) => {
                dispatch({type: "UPDATE_FIELD", field, value});
            };
            return(
                <div>
                    <h2>Signup Wizard - Step {state.step}</h2>

                    {state.step  === 1 &&  (
                        <div>
                             <input type="text" placeholder="Name" value={state.data.name} onChange={(e) => handleChange("name", e.target.value)}
          />
          <input type="email" placeholder="Email" value={state.data.email} onChange={(e) => handleChange("email", e.target.value)}
          />
                            </div>
                    )}
                     {state.step === 2 && (
        <div>
          <input type="text" placeholder="Address" value={state.data.address} onChange={(e) => handleChange("address", e.target.value)}
          />
          <input type="text" placeholder="City" value={state.data.city} onChange={(e) => handleChange("city", e.target.value)}
          />
        </div>
      )}
      {state.step === 3 && (
        <div>
          <label>
            <input type="checkbox" checked={state.data.newsletter} onChange={(e) => handleChange("newsletter", e.target.checked)}
            />
            Subscribe to Newsletter
          </label>
        </div>
      )}
        <div style={{ marginTop: "20px" }}>
        {state.step > 1 && (
          <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>Previous</button>
        )}
        {state.step < 3 && (
          <button onClick={() => dispatch({ type: "NEXT_STEP" })}>Next</button>
        )}
        {state.step === 3 && <button onClick={() => alert("Form Submitted!")}>Submit</button>}
        <button onClick={() => dispatch({ type: "RESET_FORM" })}>Reset</button>
      </div>
                </div>
            )
        }
        

        export default SingupWizard;
