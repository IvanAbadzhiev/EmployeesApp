const base_url = "https://9sf7x3qadg.execute-api.eu-west-1.amazonaws.com/api";

export const getAllEmployees = () => {
	return new Promise((resolve, reject) => {
		const endpoint = `${base_url}/employee`;
		fetch(endpoint)
        .then(res => res.json())
        .then((data) => resolve(data))
        .catch(err => reject(err));
	})
	
};

export const getEmployeeById = (employeeId) => {
	return new Promise((resolve, reject) => {
		const endpoint = `${base_url}/employee/${employeeId}`;
		fetch(endpoint)
        .then(res => res.json())
        .then((data) => resolve(data))
        .catch(err => reject(err));
	})
};

export const createEmployee = (employee) => {
	return new Promise((resolve, reject) => {
		const endpoint = `${base_url}/employee`;
		var xhr = new XMLHttpRequest();
		xhr.open("POST", endpoint, true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.send(JSON.stringify(employee));
		xhr.onload = () => resolve();

		xhr.onerror = () => reject("** An error occurred during the transaction");
	});
	
};

export const updateEmployee = (employee, employeeId) => {
	return new Promise((resolve, reject) => {
		const endpoint = `${base_url}/employee/${employeeId}`;
		const xhr = new XMLHttpRequest();
		
		xhr.open("PUT", endpoint, true);
		xhr.setRequestHeader("Content-type","application/json; charset=utf-8");
		xhr.onload = function () {
			if (xhr.readyState == 4 && xhr.status == "200") {
				return resolve();
			} else {
				return reject();
			}
		}

		xhr.send(JSON.stringify(employee));
	});
};

export const deleteEmployee = (employeeId) => {
	return new Promise((resolve, reject) => {
		const endpoint = `${base_url}/employee/${employeeId}`;
		const xhr = new XMLHttpRequest();
		xhr.open("DELETE", endpoint, true);
		xhr.setRequestHeader("Content-type","application/json; charset=utf-8");
		xhr.onload = function () {
			var users = JSON.parse(xhr.responseText);
			if (xhr.readyState == 4 && xhr.status == "200") {
				return resolve();
			} else {
				return reject("** An error occurred during the transaction");
			}
		}
		xhr.send(json);
	});
};

