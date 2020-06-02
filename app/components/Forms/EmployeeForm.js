import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";

const EmployeeForm = (props) => {
	const [state, setState] = useState({
		employee_name: props.employee ? props.employee.employee_name : "",
		employee_age: props.employee ? props.employee.employee_age : "",
		employee_salary: props.employee ? props.employee.employee_salary : ""
	});

	const { onSubmit } = props;

	const submitForm = (e) => {
		e.preventDefault();
		// TODO: make advanced validations
		const { employee_name, employee_age, employee_salary } = state;
		const employee = {
			employee_name,
			employee_age,
			employee_salary
		};

		onSubmit(employee);
	};

	const onChange = (event) => {
		const value = event.target.value;
		setState({
			...state,
			[event.target.name]: value
		});
	};
	
	return (
		<Form onSubmit={submitForm}>
			<Form.Group controlId="formBasicEmail">
				<Form.Label>Employee name</Form.Label>
				<Form.Control 
					required name="employee_name" 
					type="Text" 
					placeholder="Write the employee name" 
					onChange={onChange}
					value={state.employee_name}/>
			</Form.Group>

			<Form.Group controlId="formBasicPassword">
				<Form.Label>Age</Form.Label>
				<Form.Control 
					required 
					name="employee_age" 
					type="number" 
					placeholder="Age" 
					onChange={onChange}
					value={state.employee_age}
				/>
			</Form.Group>

			<Form.Group controlId="formBasicCheckbox">
				<Form.Label>Salary</Form.Label>
				<Form.Control 
					required name="employee_salary" 
					type="number" 
					placeholder="Salary" 
					onChange={onChange}
					value={state.employee_salary}
				/>
			</Form.Group>

			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	);
};

EmployeeForm.propTypes = {
	onSubmit: PropTypes.func.isRequired
};

export default EmployeeForm;