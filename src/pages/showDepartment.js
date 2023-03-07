import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Link, useParams } from "react-router-dom";
import { getDepartment } from "../services/departments-service";
import EmployeeList from "../components/EmployeeList";

const Title = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  color: #17171c;
  margin: 16px 0px;
  text-transform: capitalize;
`;

const Description = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #17171c;
`;

const SubTitle = styled.h3`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #17171c;
  margin: 16px 0px;
`;

const Content = styled.div`
  margin: 0px 16px;
`;

const ContentLink = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const PrimaryLink = {
  padding: "8px 16px",
  background: "#757575",
  boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
  borderRadius: "4px",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#ffffff",
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "20px",
  border: "none",
  corsor: "pointer",
  fontFamily: "Inter",
};

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

function ShowDepartment() {
  const [departments, setDepartments] = useState([
    {
      name: "Department",
      description: "Department Description",
      cover: "Departmet",
      employee_count: 0,
    },
    [
      {
        id: 1,
        name: "Name",
        nationality: "Nationality",
        role: "admin",
        avatar:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png",
        birth_date: "2023-02-28",
        department_id: 1,
      },
    ],
  ]);

  let params = useParams();

  useEffect(() => {
    getDepartment(Number(params.id)).then(setDepartments);
  }, [params.id]);

  return (
    <Content>
      <Title>{departments[0].name}</Title>
      <Description>{departments[0].description}</Description>
      <SubTitle>Employees</SubTitle>
      <Link to="/newEmployee" style={PrimaryLink}>
        New Employee
      </Link>
      <EmployeeList employees={departments[1]} />
      <ContentLink>
        <Link to="/" style={SecondaryLink}>
          Back
        </Link>
      </ContentLink>
    </Content>
  );
}

export default ShowDepartment;
