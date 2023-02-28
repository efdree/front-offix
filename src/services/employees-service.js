import apiFetch from "./api-fetch";

export function getEmployees(){
    return apiFetch("/employees");
}