import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Parent from "./Parent";
import Form from "./pages/form/Form";

// Context API
export const CountContent = createContext(0);

function App() {
  const [count, setCount] = useState(0);
  const values = { count, setCount };

  return (
    <CountContent.Provider value={values}>
      <section className="App">
        <Routes>
          <Route path="/" element={<Parent />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </section>
    </CountContent.Provider>
  );
}

export default App;
