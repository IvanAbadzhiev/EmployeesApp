import React, { Fragment, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { getEmployeeById, updateEmployee } from "../../../api/Api"; 
import EmployeeForm from "../../components/Forms/EmployeeForm";

const UpdateEmployee = (props) => {
	const [employee, setEmployee] = useState({});
	const { employeeId } = props.match.params;

	useEffect(() => {
		if(!employeeId) return;

		// Fetch all employes and set them to the state
		getEmployeeById(employeeId)
			.then((employee) => setEmployee(employee));
	});

	if(!Object.keys(employee).length) { return "No employee" }

	const onSubmit = (employee, ) => {
		updateEmployee(employee, employeeId)
			.then(() => props.history.push("/"))
			.catch(() => console.log("err"));
	};

	return (
		<Fragment>
			<h1>Update employee</h1>
			<EmployeeForm employee={employee} onSubmit={onSubmit}/>
		</Fragment>
	);
}

export default withRouter(UpdateEmployee);