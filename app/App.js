import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Employees from "./pages/Employees/Employees";
import UpdateEmployee from "./pages/UpdateEmployee/UpdateEmployee";
import CreateEmployee from "./pages/CreateEmployee/CreateEmployee";
import Employee from "./pages/Employee/Employee";
import NotFound from "./pages/NotFound/NotFound";
import { Container, Nav } from "react-bootstrap";
import "./index.css";

const App = () => {
    return(
		<Container>
			<Router>
				<Nav
					activeKey="/"
				>
					<Nav.Item>
						<Link to="/">Home</Link>
					</Nav.Item>
					<Nav.Item>
						<Link to="/employees/create">Create Employee</Link>
					</Nav.Item>
				</Nav>

				<Switch>
					<Route path="/" exact component={Employees} />
					<Route path="/employees/create" exact component={CreateEmployee} />
					<Route path="/employees/:employeeId" exact component={Employee} />
					<Route path="/employee/update/:employeeId" component={UpdateEmployee} />
					<Route component={NotFound}/>
				</Switch>
			</Router>
		</Container>
    );
}

ReactDOM.render(<App />, document.getElementById("app"))