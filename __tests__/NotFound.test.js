import React from "react";
import { shallow } from "enzyme";
import  NotFound from "../app/pages/NotFound/NotFound";
import "../setupTests";

let component;

describe("<NotFound>", () => {
	beforeEach(() => {
		component = shallow(<NotFound/>);
	});
	
	test("It should render NotFound", () => {
		expect(component.exists()).toBeTruthy();
	});
	
	test("It should have h1", () => {
		expect(component.find("h1").exists()).toBeTruthy();
	});
	
	test("It should have text "Page Not Found"", () => {
		expect(component.find("h1").text()).toBe("Page Not Found");
	});
});