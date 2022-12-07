import React, { useReducer } from "react";
import { initializer, reducer } from "../../states/formReducers";

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initializer);

  const submit = (event) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex">
        <form onSubmit={submit} className="lg:w-[500px] md:w-[500px]">
          <div className="bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            {/* Name field */}
            <div className="relative mb-4">
              <label for="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
                onChange={(event) =>
                  dispatch({
                    type: "INPUT",
                    payload: {
                      key: event.target.name,
                      value: event.target.value,
                    },
                  })
                }
              />
            </div>

            {/* Email field */}
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
                onChange={(event) =>
                  dispatch({
                    type: "INPUT",
                    payload: {
                      key: event.target.name,
                      value: event.target.value,
                    },
                  })
                }
              />
            </div>

            {/* Gender field */}
            <div className="relative mb-4">
              <label for="gender" className="leading-7 text-sm text-gray-600">
                Gender
              </label>
              <div className="flex gap-x-4">
                <p className="flex items-center gap-x-1">
                  <input
                    type="radio"
                    name="gender"
                    id="gender"
                    value="Male"
                    checked
                    onClick={(event) =>
                      dispatch({
                        type: "INPUT",
                        payload: {
                          key: event.target.name,
                          value: event.target.value,
                        },
                      })
                    }
                  />
                  Male
                </p>
                <p className="flex items-center gap-x-1">
                  <input
                    type="radio"
                    name="gender"
                    id="gender"
                    value="Female"
                    onClick={(event) =>
                      dispatch({
                        type: "INPUT",
                        payload: {
                          key: event.target.name,
                          value: event.target.value,
                        },
                      })
                    }
                  />
                  Female
                </p>
                <p className="flex items-center gap-x-1">
                  <input
                    type="radio"
                    name="gender"
                    id="gender"
                    value="Other"
                    onClick={(event) =>
                      dispatch({
                        type: "INPUT",
                        payload: {
                          key: event.target.name,
                          value: event.target.value,
                        },
                      })
                    }
                  />
                  Other
                </p>
              </div>
            </div>

            {/* Age field */}
            <div className="relative mb-4">
              <label for="age" className="leading-7 text-sm text-gray-600">
                Age
              </label>
              <div className="flex justify-between gap-4">
                <span
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() =>
                    state.age > 10 && dispatch({ type: "DECREMENT" })
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                </span>
                <p className="py-2 px-4 border rounded">{state.age}</p>
                <span
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => dispatch({ type: "INCREMENT" })}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </span>
              </div>
            </div>

            {/* Division field */}
            <div className="relative mb-4">
              <label for="division" className="leading-7 text-sm text-gray-600">
                Division
              </label>
              <div className="flex justify-center">
                <div className="mb-3 w-full">
                  <select
                    className="form-select appearance-none
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding bg-no-repeat
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white
                    focus:border-blue-600 focus:outline-none"
                    aria-label="Default select example"
                    name="division"
                    onClick={(event) =>
                      dispatch({
                        type: "INPUT",
                        payload: {
                          key: event.target.name,
                          value: event.target.value,
                        },
                      })
                    }
                  >
                    <option value="Dhaka" selected>
                      Dhaka
                    </option>
                    <option value="Chittagong">Chittagong</option>
                    <option value="Rajshahi">Rajshahi</option>
                    <option value="Khulna">Khulna</option>
                    <option value="Barishal">Barishal</option>
                    <option value="Sylhet">Sylhet</option>
                    <option value="Mymensingh">Mymensingh</option>
                    <option value="Rangpur">Rangpur</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Message field */}
            <div className="relative mb-4">
              <label for="message" className="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                required
                onChange={(event) =>
                  dispatch({
                    type: "INPUT",
                    payload: {
                      key: event.target.name,
                      value: event.target.value,
                    },
                  })
                }
              />
            </div>

            {/* TOS field */}
            <div className="relative mb-2 flex items-center gap-x-2">
              <input
                type="checkbox"
                name="tos"
                id="tos"
                onClick={() =>
                  dispatch({
                    type: "TOGGLE",
                  })
                }
              />
              <label for="tos" className="leading-7 text-sm text-gray-600">
                Accept terms and services
              </label>
            </div>
            <button
              type="submit"
              className="px-8 py-3 text-white bg-indigo-500 hover:bg-indigo-600 rounded focus:outline-none disabled:opacity-75"
              disabled={!state.tos}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
