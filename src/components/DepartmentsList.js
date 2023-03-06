import styled from "@emotion/styled";
import Department from "./DepartmentCard";

const WrapperUl = styled.ul`
  padding: 0px;
`;

function DepartmentsList({ departments }) {
  return (
    <WrapperUl>
      {departments.map((department) => (
        <Department key={department.id} department={department} />
      ))}
    </WrapperUl>
  );
}

export default DepartmentsList;
