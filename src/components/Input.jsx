function GenericInput({value, placeholder, onChange}) {
    return (
        <input 
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
    />
    ); 
};

export default GenericInput;