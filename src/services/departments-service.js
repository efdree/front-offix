import apiFetch from "./api-fetch";

export function getDepartments(){
    return apiFetch("/departments");
}

export function getDepartment(id){
    return apiFetch(`/department/${id}`);
}

export function createDepartment(department){
    return apiFetch("/departments", {body:department});
}

export function updateDepartment(department){
    console.log(department);
    return apiFetch(`/department/${department.id}`, {method: "PATCH", body: department});    
}