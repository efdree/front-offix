import { useEffect, useState } from "react";
import { getDepartments } from "../services/departments-service";
import DepartmentsList from "../components/DepartmentsList";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Content = styled.div`
  margin: 0px 16px;
`;

const Title = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  color: #17171c;
  margin: 16px 0px;
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

function InitPage() {
  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    getDepartments().then(setDepartments);
  }, []);

  return (
    <Content>
      <Title>Departments</Title>
      <Link to="/newDepartment" style={PrimaryLink}>
        New Department
      </Link>
      <DepartmentsList departments={departments} />
    </Content>
  );
}

export default InitPage;
