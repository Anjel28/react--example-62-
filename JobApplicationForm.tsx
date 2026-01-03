import React, { useReducer } from "react";

type FormState = {
    name: string;
    email: string;
    phone: string;
    experience: string;
    skills: string;
}

type FormAction = 
| {type: "UPDATE_FIElD", field:keyof FormState, value: string };


function formReducer(state: FormState, action: FormAction): FormState {
    switch(action.type){
        case "UPDATE_FIElD":
            return {...state, [action.field]: action.value};
            default: 
            return state;

    }
}



const JobApplicationForm: React.FC = () => {
  const initialState: FormState = {
    name: "",
    email: "",
    phone: "",
    experience: "",
    skills: "",
  };

  const [state, dispatch] = useReducer(formReducer, initialState);

 const handleChange = (field: keyof FormState, value: string) => {
  dispatch({type: "UPDATE_FIElD", field, value });
 }

  return (
    <div>
      <h2>Job Application Form</h2>

      <input
        type="text"
        placeholder="Name"
        value={state.name}
        onChange={(e) => handleChange("name", e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={state.email}
        onChange={(e) => handleChange("email", e.target.value)}
      />

      <input
        type="tel"
        placeholder="Phone"
        value={state.phone}
        onChange={(e) => handleChange("phone", e.target.value)}
      />

      <input
        type="text"
        placeholder="Experience"
        value={state.experience}
        onChange={(e) => handleChange("experience", e.target.value)}
      />

      <input
        type="text"
        placeholder="Skills"
        value={state.skills}
        onChange={(e) => handleChange("skills", e.target.value)}
      />

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default JobApplicationForm;
