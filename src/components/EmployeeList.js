import styled from "@emotion/styled";
import EmployeeCard from "./EmployeeCard";

const WrapperUl = styled.ul`
  padding: 0px;
`;

function EmployeeList({ employees }) {
  return (
    <WrapperUl>
      {employees.map((employee) => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))}
    </WrapperUl>
  );
}

export default EmployeeList;
