import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import { getEmployee, updateEmployee } from "../services/employees-service";
import { getDepartments } from "../services/departments-service";

const Title = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  color: #17171c;
  margin: 16px 0px;
`;

const Content = styled.div`
  margin: 0px 16px;
`;

const InputFile = styled.input`
  width: 100%;
`;

const StyledLabel = styled.label`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #303036;
`;

const Select = styled.select`
  border-radius: 6px;
  padding: 8px 12px;
  background: #ffffff;
  border: 1px solid #d3d3d3;
  box-shadow: 0px 1px 2pp rgba(0, 0, 0, 0.05);
  width: 100%;
`;

const ContentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const ContentLink = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const SecondaryLink = {
  padding: "8px 16px",
  background: "#F2F2F2",
  boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
  borderRadius: "4px",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#303036",
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "20px",
  border: "none",
  corsor: "pointer",
  fontFamily: "Inter",
  textAlign: "center",
  margin: "8px 0px 32px 0px",
};

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
    <Content>
      <Title>Edit Employee</Title>
      <ContentForm onSubmit={handleSubmit}>
        <Input
          placeholder={""}
          label="Name"
          name="name"
          value={formData.name ? formData.name : employees.name}
          onChange={handleChange}
        />
        <Input
          placeholder={""}
          label="Nationality"
          name="nationality"
          value={
            formData.nationality ? formData.nationality : employees.nationality
          }
          onChange={handleChange}
        />
        <Input
          placeholder={""}
          label="Role"
          name="role"
          value={formData.role ? formData.role : employees.role}
          onChange={handleChange}
        />
        <Input
          placeholder={""}
          label="Birth date"
          name="birth_date"
          type="date"
          value={
            formData.birth_date ? formData.birth_date : employees.birth_date
          }
          onChange={handleChange}
        />
        <div>
          <StyledLabel>department</StyledLabel>
          <Select
            name="department_id"
            value={
              formData.department_id
                ? formData.department_id
                : employees.department_id
            }
            onChange={handleChange}
          >
            {departments.map((department) => (
              <option key={department.id} value={department.id}>
                {department.name}
              </option>
            ))}
          </Select>
        </div>
        <div>
          <StyledLabel>Avatar</StyledLabel>
          <InputFile type="file" name="avatar" />
        </div>
        <Button type="submit">Edit Employee</Button>
      </ContentForm>
      <ContentLink>
        <Link to="/" style={SecondaryLink}>
          Back
        </Link>
      </ContentLink>
    </Content>
  );
}

export default EditEmployee;
