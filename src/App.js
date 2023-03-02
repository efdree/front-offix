import { useEffect, useState } from "react";
import { getDepartments } from "./services/departments-service";
import DepartmentsList from "./components/DepartmentsList";
import Button from "./components/Button";
import styled from "@emotion/styled";

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

function App() {
  const [departments, setDepartments] = useState([]);

  async function getDepartment(event, query){
    event.preventDefault();
    const data = await getDepartments(query);
    setDepartments(data);
    console.log(data);

  }

  return (
    <Content>
        <Title>Departments</Title>
        <form onSubmit={getDepartment}>
          <Button type="submit">New Department</Button>
        </form>
        <DepartmentsList departments={departments} />
    </Content>
  );
}

export default App;
