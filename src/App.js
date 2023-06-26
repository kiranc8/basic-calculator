import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  let [num, setNum] = useState("0");
  let [res, setRes] = useState(0);
  let [sign, setSign] = useState("");

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    if (num === "0" && (value === "00" || value === "0")) {
      setNum("0");
    } else {
      setNum(parseFloat(num + value));
    }
  };

  const signClickHandler = (e) => {
    const value = e.target.innerHTML;
    setSign(value);
    setRes(num);
    setNum("");
  };

  const equalsClickHandler = () => {
    console.log(num);
    console.log(res);
    console.log(sign);
    if (sign === "+") {
      setNum(num + res);
    } else if (sign === "/") {
      setNum(res / num);
    } else if (sign === "-") {
      setNum(res - num);
    } else if (sign === "x") {
      setNum(res * num);
    } else {
      setNum((num / 100) * res);
    }
    setRes(0);
    setSign("");
  };

  const resetClickHandler = () => {
    setRes("0");
    setNum(0);
    setSign("");
  };

  const invertClickHandler = () => {
    setNum(-1 * num);
  };

  const commaHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    if (!num.toString().includes(".")) {
      setNum(num + value);
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="display-wrapper">
          <div className="display">
            {num.toString().length >= 16
              ? parseFloat(num).toExponential(8)
              : num}
          </div>
        </div>
        <div className="buttons">
          <div className="btn btn_operator" onClick={resetClickHandler}>
            C
          </div>
          <div className="btn btn_operator" onClick={invertClickHandler}>
            +/-
          </div>
          <div className="btn btn_operator" onClick={signClickHandler}>
            %
          </div>
          <div className="btn btn_operator" onClick={signClickHandler}>
            /
          </div>
        </div>
        <div className="buttons">
          <div className="btn" onClick={numClickHandler}>
            7
          </div>
          <div className="btn" onClick={numClickHandler}>
            8
          </div>
          <div className="btn" onClick={numClickHandler}>
            9
          </div>
          <div
            className="btn btn_operator"
            value="x"
            onClick={signClickHandler}
          >
            x
          </div>
        </div>
        <div className="buttons">
          <div className="btn" onClick={numClickHandler}>
            4
          </div>
          <div className="btn" onClick={numClickHandler}>
            5
          </div>
          <div className="btn" onClick={numClickHandler}>
            6
          </div>
          <div
            className="btn btn_operator"
            value="-"
            onClick={signClickHandler}
          >
            -
          </div>
        </div>
        <div className="buttons">
          <div className="btn" onClick={numClickHandler}>
            1
          </div>
          <div className="btn" onClick={numClickHandler}>
            2
          </div>
          <div className="btn" onClick={numClickHandler}>
            3
          </div>
          <div
            className="btn btn_operator"
            value="+"
            onClick={signClickHandler}
          >
            +
          </div>
        </div>
        <div className="buttons">
          <div className="btn" onClick={numClickHandler}>
            00
          </div>
          <div className="btn" onClick={numClickHandler}>
            0
          </div>
          <div className="btn" onClick={commaHandler}>
            .
          </div>
          <div
            className="btn btn_operator"
            value="="
            onClick={equalsClickHandler}
          >
            =
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
