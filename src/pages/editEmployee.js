import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getEmployee, updateEmployee } from "../services/employees-service";
import { getDepartments } from "../services/departments-service";
import FormEmployee from "../components/formEmployee";

function EditEmployee() {
  const navigate = useNavigate();

  const [employees, setEmployees] = useState({
    name: "",
    nationality: "",
    role: "",
    birth_date: "",
    avatar: "",
    department_id: 0,
  });

  let params = useParams();

  useEffect(() => {
    getEmployee(Number(params.id)).then(setEmployees);
  }, [params.id]);

  const [formData, setFormData] = useState({
    name: "",
    nationality: "",
    role: "",
    birth_date: "",
    avatar: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${params.id}.png`,
    department_id: employees.department_id,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    formData.name = formData.name ? formData.name : employees.name;
    formData.nationality = formData.nationality
      ? formData.nationality
      : employees.nationality;
    formData.role = formData.role ? formData.role : employees.role;
    formData.birth_date = formData.birth_date
      ? formData.birth_date
      : employees.birth_date;
    formData.avatar = formData.avatar ? formData.avatar : employees.avatar;
    formData.department_id = formData.department_id
      ? formData.department_id
      : employees.department_id;
    event.preventDefault();
    updateEmployee(params.id, formData);
    navigate(`/showDepartment/${employees.department_id}`);
  }

  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    getDepartments().then(setDepartments);
  }, []);

  return (
    <FormEmployee 
      title={"Edit Employee"}
      onSubmit={handleSubmit}
      handleChange={handleChange}
      placeholderName={""}
      inputName={formData.name ? formData.name : employees.name}
      placeholderNationality={""}
      inputNationality={formData.nationality ? formData.nationality : employees.nationality}
      placeholderRole={""}
      inputRole={formData.role ? formData.role : employees.role}
      placeholderBirthDate={""}
      inputBirthDate={formData.birth_date ? formData.birth_date : employees.birth_date}
      selectDepartment={formData.department_id
        ? formData.department_id
        : employees.department_id}
      selectOption={""}
      submit={"Edit Employee"}
      />
  );
}

export default EditEmployee;
