import apiFetch from "./api-fetch";

export function getDepartments() {
  return apiFetch("/departments");
}

export function getDepartment(id) {
  return apiFetch(`/department/${id}`);
}

export function createDepartment(department) {
  return apiFetch("/departments", { body: department });
}

export function updateDepartment(id, department) {
  return apiFetch(`/department/${id}`, { method: "PUT", body: department });
}

export function deleteDepartment(id) {
  return apiFetch(`/department/${id}`, { method: "DELETE" });
}
