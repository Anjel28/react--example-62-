import React, { useReducer } from 'react';

type FormState = {
    data: {
        name: string;
        email: string;
        phone: string;
    };
    error: {
        name?: string;
        email?: string;
        phone?: string;
    }
};

type FromAction = 
| {type: "UPDATE_FIELD"; field: keyof FormState["data"];value: string}
| {type: "SET_ERROR"; field: keyof FormState["error"]; message: string}
| {type: "CLEAN_ERROR"; field: keyof FormState["error"]}
| {type: "VALIDATE_FORM"};

