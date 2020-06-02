import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAllEmployees, deleteEmployee } from "../../../api/Api"; 
import classes from "./style.css";

const Employees = () => {
	const [employees, setEmployees] = useState([]);
	const [sortByAge, setSortByAge] = useState("ASC");

	useEffect(() => {
		// Fetch all employes and set them to the state
		getAllEmployees().then((data) => setEmployees(data));
	}, []);

	const handleDeleteEmployee = (employeeId) => {
		const sure = confirm("Are you sure you want to delete this user");

		if(sure) {
			deleteEmployee(employeeId)
				.then(() => console.log("Deleted"))
				.catch(err => console.log(err));
		}
	};

	const sortByAgeHandler = () => {
		const sort = sortByAge === "ASC" ? "DESC" : "ASC";
		setSortByAge(sort);
	};

	// Sort employees
	const sortedEmployees = employees.sort((a, b) => {
		if(sortByAge === "ASC") {
			return a.employee_age - b.employee_age;
		}

		return b.employee_age - a.employee_age;
	})

	const tableBody = sortedEmployees.map((employee) => {
		const profileImage = employee.profile_image || "https://via.placeholder.com/70";
		return (
			<tr key={employee.id}>
				<td><img src={profileImage}/></td>
				<td>{employee.employee_name}</td>
				<td>{employee.employee_salary}</td>
				<td>{employee.employee_age}</td>
				<td><Link to={`/employee/update/${employee.id}`}>EDIT</Link></td>
				<td><span className={classes.link} onClick={() => handleDeleteEmployee(employee.id)}>DELETE</span></td>
			</tr>
		);
	});

	return (
		<Table striped bordered hover>
			<thead>
				<tr>
					<th>#</th>
					<th>Name</th>
					<th>Salary</th>
					<th onClick={sortByAgeHandler}>Age</th>
					<th></th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{tableBody}
			</tbody>
		</Table>
	);
};

export default Employees;
