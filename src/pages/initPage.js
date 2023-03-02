import { useEffect, useState } from "react";
import { getDepartments } from "../services/departments-service";
import DepartmentsList from "../components/DepartmentsList";
import PrimaryLink from "../components/PrimaryLink";
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
          <PrimaryLink><Link to="/newDepartment">New Department</Link></PrimaryLink>
          <DepartmentsList departments={departments} />
        </Content>
        <Footer>
          © 2021 - Offix
        </Footer>
      </div>
  );
}

export default InitPage;
