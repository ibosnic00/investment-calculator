export default function InputGroup({ inputs }) {
    return (
        <div className="input-group">
            {inputs.map((input, index) => (
                <p>
                    <label
                        key={index + input.inputName}>
                        {input.inputName}
                    </label>
                    <input
                        type="number"
                        required
                        value={input.inputValue}
                        onChange={(event) => input.onInputChange(event.target.value)}
                    />
                </p>
            ))}
        </div>
    );
}