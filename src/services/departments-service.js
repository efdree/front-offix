import apiFetch from "./api-fetch";

export function getDepartments(){
    return apiFetch("/departments");
}

export function createDepartment(department){
    return apiFetch("/departments", {body:department});
}