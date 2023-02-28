import apiFetch from "./api-fetch";

export function getDepartments(){
    return apiFetch("/departments");
}