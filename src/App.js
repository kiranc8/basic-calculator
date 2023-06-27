import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  let [num, setNum] = useState("0");
  let [res, setRes] = useState(0);
  let [sign, setSign] = useState("");

  // Function which handles number inputs
  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    if (num === "0" && (value === "00" || value === "0")) {
      setNum("0");
    } else {
      setNum(parseFloat(num + value));
    }
  };

  // Function which handles operator inputs
  const signClickHandler = (e) => {
    const value = e.target.innerHTML;
    setSign(value);
    setRes(num);
    setNum("");
  };

  // Function to do the operation
  const equalsClickHandler = () => {
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

  // Function to reset the state values
  const resetClickHandler = () => {
    setRes("0");
    setNum(0);
    setSign("");
  };

  // Function to reverse the sign
  const invertClickHandler = () => {
    setNum(-1 * num);
  };

  // Function to handle decimal inputs
  const commaHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    if (!num.toString().includes(".")) {
      setNum(num + value);
    }
  };

  return (
    //  Beginning of container section
    <div className="container">
      {/* Beginning of Wrapper section */}
      <div className="wrapper">
        {/* Beginning of display section */}
        <div className="display-wrapper">
          <div className="display">
            {num.toString().length >= 16
              ? parseFloat(num).toExponential(8)
              : num}
          </div>
        </div>
        {/* End of display section */}
        {/* Beginning of buttons section */}
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
        {/* End of buttons section */}
      </div>
      {/* End of Wrapper section */}
    </div>
    // End of container section
  );
}

export default App;
