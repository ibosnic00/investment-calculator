import InputGroup from "./InputGroup";

export default function InvestmentInputs({ onChange, userInput }) {
    return (
        <section id="user-input">
            <InputGroup inputs={[
                {
                    inputName: "Početni ulog",
                    inputValue: userInput.initialInvestment,
                    onInputChange: (value) => onChange('initialInvestment', value)
                },
                {
                    inputName: "Godišnje ulaganje",
                    inputValue: userInput.annualInvestment,
                    onInputChange: (value) => onChange('annualInvestment', value)
                }]} />
            <InputGroup inputs={[
                {
                    inputName: "Očekivani povrat (%)",
                    inputValue: userInput.expectedReturn,
                    onInputChange: (value) => onChange('expectedReturn', value)
                },
                {
                    inputName: "Trajanje (godina)",
                    inputValue: userInput.duration,
                    onInputChange: (value) => onChange('duration', value)
                }]} />
        </section>
    );
}