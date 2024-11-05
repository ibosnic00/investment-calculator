import InputGroup from "./InputGroup";
import { useState } from "react";

export default function InvestmentInputs({ onAnyInputChange }) {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 8,
        duration: 10
    });

    function handleChange(inputIdentifier, newValue) {
        setUserInput(prevUserInput => { return { ...prevUserInput, [inputIdentifier]: newValue }; });
        onAnyInputChange(userInput);
    }

    return (
        <section id="user-input">
            <InputGroup inputs={[
                {
                    inputName: "Početni ulog", inputValue: userInput.initialInvestment, onInputChange: (value) => handleChange('initialInvestment', value)
                },
                {
                    inputName: "Godišnje ulaganje", inputValue: userInput.annualInvestment, onInputChange: (value) => handleChange('annualInvestment', value)
                }]} />
            <InputGroup inputs={[
                {
                    inputName: "Očekivani povrat (%)", inputValue: userInput.expectedReturn, onInputChange: (value) => handleChange('expectedReturn', value)
                },
                {
                    inputName: "Trajanje (godina)", inputValue: userInput.duration, onInputChange: (value) => handleChange('duration', value)
                }]} />
        </section>
    );
}