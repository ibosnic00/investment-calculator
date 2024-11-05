import { useState } from "react";

import InvestmentInputs from "./components/InvestmentInputs"
import InvestmentResults from "./components/InvestmentResults"
import { calculateInvestmentResults } from './util/investment'

const ANNUAL_DATA_PRESET = [
  { year: 1, interest: 500, valueEndOfYear: 10500, annualInvestment: 10000 },
  { year: 2, interest: 1025, valueEndOfYear: 21525, annualInvestment: 10000 },
  // Add more yearly data as needed
];


function App() {
  const [annualData, setAnnualData] = useState(ANNUAL_DATA_PRESET);

  function handleInputChange(initialInvestment, annualInvestment, expectedReturn, duration) {
    const calculatedAnnualData = calculateInvestmentResults(initialInvestment, annualInvestment, expectedReturn, duration);
    setAnnualData(calculatedAnnualData);
  }

  return (
    <main>
      <div>
        <InvestmentInputs onAnyInputChange={handleInputChange} />
      </div>
      <InvestmentResults annualData={annualData} />
    </main>
  )
}

export default App
