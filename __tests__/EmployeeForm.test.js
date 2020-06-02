import React from "react";
import { shallow } from "enzyme";
import  EmployeeForm from "../app/components/Forms/EmployeeForm";
import { Form } from "react-bootstrap";
import "../setupTests";

const mockCallback = jest.fn(x => x);

describe("<EmployeeForm>", () => {
	let component;

	beforeEach(() => {
		component = shallow(<EmployeeForm onSubmit={mockCallback}/>);
	 });
	
	test("It should render EmployeeForm", () => {
		expect(component.exists()).toBeTruthy();
	});

	test("It should render EmployeeForm", () => {
		const component = shallow(<EmployeeForm onSubmit={mockCallback}/>);
		expect(component.exists()).toBeTruthy();
	});
	
	test("Is should check the default state", () => {
		expect(component.find(Form.Control).first().prop("value")).toEqual(
			"");
		expect(component.find(Form.Control).at(1).prop("value")).toEqual(
			"");
		expect(component.find(Form.Control).at(2).prop("value")).toEqual(
				"");
	});
});

