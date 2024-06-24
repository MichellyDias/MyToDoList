import "./Input.css"

type InputProps = {
    placeholder: string,
    label: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>, name: string) => void
    taskName: string
    name: string
}

function Input({placeholder, label, taskName, onChange, name}: InputProps) {
    return (
        <div className="inputContainer">
            <label htmlFor="input">{label}</label>
            <input value={taskName} onChange={(event) => onChange(event, name)} placeholder={placeholder} id="input" className="input" type="text" />
        </div>
    )
}

export default Input;