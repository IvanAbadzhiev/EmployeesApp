import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Card } from "react-bootstrap";
import { getEmployeeById } from "../../../api/Api"; 

const Employee = (props) => {
	const [employee, setEmployee] = useState({});
	
	useEffect(() => {
		const { employeeId } = props.match.params;
		if(!employeeId) return;

		// Fetch all employes and set them to the state
		getEmployeeById(employeeId)
			.then((employee) => setEmployee(employee));
	});

	if(!Object.keys(employee).length) { return "No employee" }

	const image = employee.employee_image || "https://via.placeholder.com/200";

	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src={image} />
			<Card.Body>
				<Card.Title>{employee.employee_name}</Card.Title>
				<Card.Text>$ {employee.employee_salary}</Card.Text>
				<Card.Text>Age: {employee.employee_age}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default withRouter(Employee);