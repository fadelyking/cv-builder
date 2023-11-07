import { useState } from "react";
import App from "../App";

export default function ParentFunction(props) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [number, setNumber] = useState(0);
	const [infoObject, setInfoObject] = useState({
		infoName: "",
		infoEmail: "",
		infoNumber: "",
	});

	function handleNameChange(e) {
		setName(e.target.value);
	}

	function handleEmailChange(e) {
		setEmail(e.target.value);
	}

	function handleNumberChange(e) {
		setNumber(e.target.value);
	}

	function resetForm() {
		setInfoObject({
			infoN: props.name,
			infoE: props.email,
			infoNu: props.number,
		});
		setName("");
		setEmail("");
		setNumber("");
	}

	function editInfo() {
		setName(infoObject.infoN);
		setEmail(infoObject.infoE);
		setNumber(infoObject.infoNu);
	}
	function handleSubmit(e) {
		e.preventDefault();
		setInfoObject({
			infoN: props.name,
			infoE: props.email,
			infoNu: props.number,
		});
		props.onSubmit({ name, email, number });
		resetForm();
	}

	return (
		<form onSubmit={handleSubmit}>
			<input label="Name" type="text" value={name} onChange={handleNameChange} />
			<input label="Email" type="email" value={email} onChange={handleEmailChange} />
			<input label="Number" type="number" value={number} onChange={handleNumberChange} />
			<button onClick={editInfo}>Edit</button>
			<input type="Submit" />
		</form>
	);
}
