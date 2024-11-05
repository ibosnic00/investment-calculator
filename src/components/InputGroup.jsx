export default function InputGroup({ inputs }) {
    return (
        <div className="input-group">
            {inputs.map((input, index) => (
                <label key={index + input.inputName}>
                    {input.inputName}
                    <input type="number" value={input.inputValue} onChange={input.onInputChange} />
                </label>
            ))}
        </div>
    );
}