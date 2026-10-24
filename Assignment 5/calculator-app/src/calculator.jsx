import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  function calculate(operator) {
    if (num1 === "" || num2 === "") {
      setResult("Please enter both numbers.");
      return;
    }

    const a = Number(num1);
    const b = Number(num2);

    switch (operator) {
      case "+":
        setResult(a + b);
        break;
      case "-":
        setResult(a - b);
        break;
      case "*":
        setResult(a * b);
        break;
      case "/":
        setResult(b === 0 ? "Cannot divide by zero." : a / b);
        break;
      default:
        setResult("Invalid operation.");
    }
  }

  return (
    <div>
      <h2>Calculator</h2>

      <input
        type="number"
        aria-label="First number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        aria-label="Second number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <div>
        <button onClick={() => calculate("+")}>Addition (+)</button>
        <button onClick={() => calculate("-")}>Subtraction (-)</button>
        <button onClick={() => calculate("*")}>Multiplication (*)</button>
        <button onClick={() => calculate("/")}>Division (/)</button>
      </div>

      <div aria-live="polite">Output: {result}</div>
    </div>
  );
}

export default Calculator;