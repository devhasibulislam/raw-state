import React, { useReducer } from "react";

const Sibling = () => {
  const initializer = 0;
  const reducer = (state, action) => {
    if (action.type === "INCREMENT") return state + action.payload.count;
    else if (action.type === "DECREMENT") return state - action.payload.count;
  };

  const [state, dispatch] = useReducer(reducer, initializer);

  return (
    <div
      className="flex gap-x-4 items-center bg-gray-100 p-4 rounded"
      title="Sibling"
    >
      <div className="flex gap-4">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() =>
            state > 0 && dispatch({ type: "DECREMENT", payload: { count: 2 } })
          }
        >
          Decrement
        </button>
        <p className="py-2 px-4 border rounded">{state}</p>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => dispatch({ type: "INCREMENT", payload: { count: 3 } })}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Sibling;
