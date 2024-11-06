import { useState } from "react";

import InvestmentInputs from "./components/InvestmentInputs"
import InvestmentResults from "./components/InvestmentResults"


function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 8,
    duration: 10
  });

  const validInput = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => { return { ...prevUserInput, [inputIdentifier]: +newValue }; });
  }

  return (
    <>
      <div>
        <InvestmentInputs onChange={handleChange} userInput={userInput} />
      </div>
      {validInput && <InvestmentResults userInput={userInput} />}
      {!validInput && <p className="center">Please enter duration greater than zero!</p>}
    </>
  )
}

export default App
