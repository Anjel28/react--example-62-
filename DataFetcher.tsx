import React, { useReducer, useEffect } from "react";

type State = {
  loading: boolean;
  data: string | null;
  error: string | null;
};

type Action =
  | { type: "FETCH_START" }
  | { type: "FETCH_SUCCESS"; payload: string }
  | { type: "FETCH_ERROR"; payload: string };

const initialState: State = {
  loading: false,
  data: null,
  error: null,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "FETCH_START":
      return { loading: true, data: null, error: null };
    case "FETCH_SUCCESS":
      return { loading: false, data: action.payload, error: null };
    case "FETCH_ERROR":
      return { loading: false, data: null, error: action.payload };
    default:
      return state;
  }
}

export default function DataFetcher() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_START" });
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const json = await res.json();
        dispatch({ type: "FETCH_SUCCESS", payload: json.title });
      } catch (err) {
        dispatch({ type: "FETCH_ERROR", payload: "Failed to fetch data" });
      }
    };
    fetchData();
  }, []);

  if (state.loading) return <p>Loading...</p>;
  if (state.error) return <p>Error: {state.error}</p>;
  return <p>Data: {state.data}</p>;
}


