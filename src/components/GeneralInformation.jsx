import { useState } from "react"

export default function ParentFunction(props) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState(0)

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handleNumberChange(e) {
        setNumber(e.target.value)

    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit({name, email, number});
    }

    return (
        <form onSubmit={handleSubmit}>
        <input label="Name" type="text" value={name} onChange={handleNameChange}/> 
        <input label="Email" type="email" value={email} onChange={handleEmailChange}/>
        <input label="Number" type="number" value={number} onChange={handleNumberChange}/>
        <input type="Submit" />

        </form> 
    )
}

