import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { createEmployee } from "../../../api/Api";
import EmployeeForm from "../../components/Forms/EmployeeForm";

const CreateEmployee = (props) => {
	const onSubmit = (employee) => {
		createEmployee(employee)
			.then(() => props.history.push("/"))
			.catch(err => console.log(err));
	};

	return (
		<Fragment>
			<h1>Create Employee</h1>
			<EmployeeForm onSubmit={onSubmit}/>
		</Fragment>
	);
};

export default withRouter(CreateEmployee);