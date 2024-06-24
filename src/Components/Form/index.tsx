import { useEffect, useState } from "react";
import Button from "../Button";
import Input from "../Input";
import "./Form.css"

function Form() {
    const [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem("tasks");
        return storedTasks ? JSON.parse(storedTasks) : [];
    });
    const [task, setTask] = useState({
        title: "",
        text: ""
    })

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    function handleButton() {
        setTasks([...tasks, task]);
        setTask({
            title: "",
            text: ""
        })
    }

    function onChange(event: React.ChangeEvent<HTMLInputElement>, name: string) {
        setTask({
            ...task,
            [name]: event.target.value
        })
    }

    return (
        <form className="formContainer">
            <Input taskName={task.title} name='title' onChange={onChange} placeholder="Digite um título..." label="Título" />
            <Input taskName={task.text} name="text" onChange={onChange} placeholder="Digite um texto..." label="Texto" />
            <Button onClick={handleButton} labelText="Criar Task"/>
        </form>
    )
}

export default Form;