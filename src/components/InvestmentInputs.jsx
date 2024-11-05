import InputGroup from "./InputGroup";
import { useState } from "react";

export default function InvestmentInputs({ onAnyInputChange }) {
    const [initialInvestment, changeInitialInvestment] = useState(0);
    const [annualInvestment, changeAnnualInvestment] = useState(0);
    const [expectedReturn, changeExpectedReturn] = useState(0);
    const [duration, changeDuration] = useState(0);

    return (
        <div id="user-input">
            <InputGroup inputs={[
                {
                    inputName: "Početni ulog", inputValue: initialInvestment, onInputChange: (
                        value => {
                            changeInitialInvestment(value);
                            onAnyInputChange(initialInvestment, annualInvestment, expectedReturn, duration);
                        })
                },
                {
                    inputName: "Godišnje ulaganje", inputValue: annualInvestment, onInputChange: (
                        value => {
                            changeAnnualInvestment(value);
                            onAnyInputChange(initialInvestment, annualInvestment, expectedReturn, duration);
                        })
                }]} />
            <InputGroup inputs={[
                {
                    inputName: "Očekivani povrat (%)", inputValue: expectedReturn, onInputChange: (
                        value => {
                            changeExpectedReturn(value);
                            onAnyInputChange(initialInvestment, annualInvestment, expectedReturn, duration);
                        })
                },
                {
                    inputName: "Trajanje (godina)", inputValue: duration, onInputChange: (
                        value => {
                            changeDuration(value);
                            onAnyInputChange(initialInvestment, annualInvestment, expectedReturn, duration);
                        })
                }]} />
        </div>
    );
}