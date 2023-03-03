import { useEffect, useState } from "react";
import { getDepartments } from "../services/departments-service";
import DepartmentsList from "../components/DepartmentsList";
import styled from "@emotion/styled";
import Input from "../components/Input";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = styled.div`
  background: #F2F2F2;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
`
const Brand = styled.img`
  width: 148px;
  height: 25px;
`
const Content = styled.div`
    margin: 0px 16px; 
`

const Title = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  color: #17171C;
  margin: 16px 0px;
`

const Footer = styled.div`
  background:#F2F2F2;
  text-align: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  padding: 16px;
`

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
    fontFamily: 'Inter'
  }

function InitPage() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    getDepartments()
      .then(setDepartments);
  },[]);
  
  return (
      <div>
        <Header>
          <Brand src={logo} alt="logo" />        
          <form>
            <Input placeholder={"search"}/>
          </form>
        </Header>
        <Content>
          <Title>Departments</Title>
          <Link to="/newDepartment" style={PrimaryLink}>New Department</Link>
          <DepartmentsList departments={departments} />
        </Content>
        <Footer>
          © 2021 - Offix
        </Footer>
      </div>
  );
}

export default InitPage;
