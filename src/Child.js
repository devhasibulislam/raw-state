import React, { useContext } from "react";
import { CountContent } from "./App";
import Sibling from "./Sibling";

const Child = () => {
  const { count, setCount } = useContext(CountContent);

  return (
    <section className="flex flex-col gap-y-4">
      <div
        className="flex flex-col gap-y-4 items-center bg-gray-100 p-4 rounded"
        title="Child"
      >
        <p className="py-2 px-4 border rounded">{count}</p>
        <div className="flex gap-4">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => count > 0 && setCount(count - 1)}
          >
            Decrement
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setCount((prevState) => prevState + 1)}
          >
            Increment
          </button>
        </div>
      </div>
      <Sibling />
    </section>
  );
};

export default Child;
