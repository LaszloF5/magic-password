import React, { useEffect, useState } from "react";
import "./Password.css";
import suprise from "./suprise.jpg"

export default function Password() {
  const [inputVal, setInputVal] = useState("");
  const [starterValue, setStarterValue] = useState("Enter: password");
  const [isVisible, setIsVisible] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (inputVal === "password") {
      setStarterValue("Password is: incorrect");
      setInputVal("");
    } else if (inputVal === "incorrect") {
      setInputVal("");
      setStarterValue("Try: again");
    } else if (inputVal === "again") {
      setInputVal("");
      setStarterValue("Please try: Again later");
    } else if (inputVal === "Again later") {
      setIsVisible(true);
    }
  }, [inputVal]);

  //Last input value state will correction

  return (
    <>
      <h1 className={`h1 ${isVisible ? "hidden" : "visible"}`}>
        Type the text after the colon to make some magic happen
      </h1>
      <h2 className={`${isVisible ? "hidden" : "visible"}`}>{starterValue}</h2>
      <form
        onSubmit={handleSubmit}
        action="#"
        method="GET"
        className={`${isVisible ? "hidden" : "visible"}`}
      >
        <input
          className="input-style"
          type="text"
          name="password"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
      </form>

      {inputVal === "Again later" && <img className="finish" src={suprise}/>}
    </>
  );
}
