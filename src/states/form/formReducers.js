import actionTypes from "./formActionTypes";

export const initializer = {
  name: "",
  email: "",
  gender: "Male",
  age: 10,
  division: "Dhaka",
  message: "",
  tos: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INPUT:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };

    case actionTypes.TOGGLE:
      return {
        ...state,
        tos: !state.tos,
      };

    case actionTypes.INCREMENT:
      return {
        ...state,
        age: state.age + 1,
      };

    case actionTypes.DECREMENT:
      return {
        ...state,
        age: state.age - 1,
      };

    default:
      return state;
  }
};
