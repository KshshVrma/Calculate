import "./styles.css";
import { useState } from "react";

export default function App() {
  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);
  const [three, setThree] = useState([]);
  const fun1 = (e) => {
    setOne(parseInt(e.target.value));
  };
  const fun2 = (e) => {
    setTwo(parseInt(e.target.value));
  };

  const fun3 = () => {
    let q = one + two;
    let a = one * two;
    let b = one - two;
    setThree([
      { task: "add", val: q },
      { task: "multiply", val: a },
      { task: "subtract", val: b }
    ]);
  };
  return (
    <div>
      <input onChange={fun1} value={one}></input>
      <br />
      <input onChange={fun2} value={two}></input>
      <br />
      <button onClick={fun3}>calculate</button>
      <br />
      {three.map((e, i) => {
        return (
          <li key={i}>
            {e.task} {e.val}
            <br />
          </li>
        );
      })}
    </div>
  );
}
