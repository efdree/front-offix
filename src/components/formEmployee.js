import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Button from "../components/Button";
import Input from "../components/Input";
import { Link } from "react-router-dom";
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


function FormEmployee({
    title,
    onSubmit,
    handleChange,
    placeholderName,
    inputName,
    placeholderNationality,
    inputNationality,
    placeholderRole,
    inputRole,
    placeholderBirthDate,
    inputBirthDate,
    selectDepartment,
    selectOption,
    onChangeFile,
    submit
}){

    const [departments, setDepartments] = useState([]);
    useEffect(() => {
      getDepartments().then(setDepartments);
    }, []);

    return(
    <Content>
      <Title>{title}</Title>
      <ContentForm onSubmit={onSubmit}>
        <Input
          placeholder={placeholderName}
          label="Name"
          name="name"
          value={inputName}
          onChange={handleChange}
        />
        <Input
          placeholder={placeholderNationality}
          label="Nationality"
          name="nationality"
          value={inputNationality}
          onChange={handleChange}
        />
        <Input
          placeholder={placeholderRole}
          label="Role"
          name="role"
          value={inputRole}
          onChange={handleChange}
        />
        <Input
          placeholder={placeholderBirthDate}
          label="Birth date"
          name="birth_date"
          type="date"
          value={inputBirthDate}
          onChange={handleChange}
        />
        <div>
          <StyledLabel>department</StyledLabel>
          <Select
            name="department_id"
            value={selectDepartment}
            onChange={handleChange}
          >
            {selectOption}
            {departments.map((department) => (
              <option key={department.id} value={department.id}>
                {department.name}
              </option>
            ))}
          </Select>
        </div>
        <div>
          <StyledLabel>Avatar</StyledLabel>
          <InputFile type="file" name="avatar" onChange={onChangeFile}/>
        </div>
        <Button type="submit">{submit}</Button>
      </ContentForm>
      <ContentLink>
        <Link to="/" style={SecondaryLink}>
          Back
        </Link>
      </ContentLink>
    </Content>
)
}

export default FormEmployee;