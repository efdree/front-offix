import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Button from "../components/Button";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { createEmployee } from "../services/employees-service";
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

const Select = styled.select`
  border-radius: 6px;
  padding: 8px 12px;
  background: #ffffff;
  border: 1px solid #d3d3d3;
  box-shadow: 0px 1px 2pp rgba(0, 0, 0, 0.05);
  width: 100%;
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
  Width: "100%",
  textAlign: "center",
  margin: "8px 0px 32px 0px",
};

function NewEmployee() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    nationality: "",
    role: "",
    birth_date: "",
    avatar:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    department_id: 0,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    createEmployee(formData);
    navigate(`/showDepartment/${formData.department_id}`);
  }

  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    getDepartments().then(setDepartments);
  }, []);

  return (
    <Content>
      <Title>New Employee</Title>
      <ContentForm onSubmit={handleSubmit}>
        <Input
          placeholder={"John Doe"}
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          placeholder={"Peruano"}
          label="Nationality"
          name="nationality"
          value={formData.nationality}
          onChange={handleChange}
        />
        <Input
          placeholder={"Eternal Apprentice"}
          label="Role"
          name="role"
          value={formData.role}
          onChange={handleChange}
        />
        <Input
          placeholder={""}
          label="Birth date"
          name="birth_date"
          type="date"
          value={formData.birth_date}
          onChange={handleChange}
        />
        <div>
          <StyledLabel>department</StyledLabel>
          <Select
            name="department_id"
            value={formData.department_id}
            onChange={handleChange}
          >
            <option value="0">{"--Choose an option--"}</option>
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
        <Button type="submit">Create Employee</Button>
      </ContentForm>
      <ContentLink>
        <Link to="/" style={SecondaryLink}>
          Back
        </Link>
      </ContentLink>
    </Content>
  );
}

export default NewEmployee;
