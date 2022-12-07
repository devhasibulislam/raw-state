import React, { useContext } from "react";
import { CountContent } from "./App";
import Child from "./Child";

const Parent = () => {
  const { count } = useContext(CountContent);

  return (
    <section className="flex flex-col gap-y-4">
      <div
        className="flex flex-col gap-y-4 items-center bg-gray-100 p-4 rounded"
        title="Parent"
      >
        <p className="py-2 px-4 border rounded">{count}</p>
      </div>
      <Child />
    </section>
  );
};

export default Parent;
