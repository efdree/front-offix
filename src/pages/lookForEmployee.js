import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { searchEmployees } from "../services/employees-service";
import EmployeeList from "../components/EmployeeList";
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

function LookForEmployee(){
    const [employees, setEmployees] = useState([]);
    
    let params = useParams();

    useEffect(() => {
      searchEmployees(params.name).then(setEmployees);
    }, [params.id]);
  
    return(
        <Content>
          <Title>Search results</Title>
          <p>Search term: "{params.name}"</p>
          <p>{employees.length} employees found</p>
          <EmployeeList employees={employees} />
        </Content>
    )
}

export default LookForEmployee;