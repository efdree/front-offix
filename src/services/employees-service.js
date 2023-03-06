import apiFetch from "./api-fetch";

export function getEmployees() {
  return apiFetch("/employees");
}

export function getEmployee(id) {
  return apiFetch(`/employee/${id}`);
}

export function createEmployee(employee) {
  return apiFetch("/employees", { body: employee });
}

export function updateEmployee(id, employee) {
  return apiFetch(`/employee/${id}`, { method: "PUT", body: employee });
}

export function deleteEmployee(id) {
  return apiFetch(`/employee/${id}`, { method: "DELETE" });
}
