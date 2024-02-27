import { useState } from "react";
import "./App.css";

function App() {
  let [v, Setv] = useState(10);
  return (
    <>
      <h1>Counter</h1>
      <p>{v}</p>
      <button
        onClick={() => {
          v = v + 1;
          if (v >= 20) {
            v = 20;
            Setv(20);
          } else 
          {
            Setv((prev)=>{return prev=prev+1}); //call-back function of Setv function, in order to fetch the previous state of the element and using callback we can update it.
            // Setv(prev=> prev+1);
            // Setv(prev=> prev+1);
            // Setv(prev=> prev+1);
          }
          console.log(`the value is ${v}`);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          v = v - 1;
          if (v <= 0) {
            v = 0;
            Setv(0);
          } else Setv(v);
          console.log(`the value is ${v}`);
        }}
      >
        Decrease
      </button>
    </>
  );
}

export default App;
