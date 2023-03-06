import styled from "@emotion/styled";
import { FiEdit2 } from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi";
import { Link } from "react-router-dom";
import { deleteEmployee } from "../services/employees-service";

const WrapperLi = styled.li`
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
    0px 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  max-width: 328px;
  margin: 32px 0px;
`;
const ContImage = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;

const Image = styled.img`
  max-width: 64px;
  max-height: 64px;
`;

const ContBaseInfo = styled.div`
  padding: 8px 16px 0px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
`;

const EmployeeName = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  text-transform: capitalize;
`;

const EmployeeRole = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-transform: capitalize;
`;

const ContLinks = styled.div`
  display: flex;
  justify-content: right;
  padding: 8px 16px;
  gap: 8px;
  text-align: center;
`;

const ActionLink = {
  background: "#757575",
  boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
  borderRadius: "50px",
  width: "28px",
  height: "28px",
  color: "white",
  padding: "4px",
};

function EmployeeCard({ employee }) {
  function handleClick(event) {
    event.preventDefault();
    deleteEmployee(employee.id);
    window.location.reload(false);
  }

  return (
    <WrapperLi key={employee.id}>
      <ContBaseInfo>
        <ContImage>
          <Link to={"/showEmployee/" + employee.id}>
            <Image src={employee.avatar} alt={employee.id} />
          </Link>
        </ContImage>
        <CardInfo>
          <EmployeeName>{employee.name}</EmployeeName>
          <EmployeeRole>{employee.role}</EmployeeRole>
        </CardInfo>
      </ContBaseInfo>
      <ContLinks>
        <Link to={"/editEmployee/" + employee.id} style={ActionLink}>
          <FiEdit2 />
        </Link>
        <Link to="/" style={ActionLink} onClick={handleClick}>
          <HiOutlineTrash />
        </Link>
      </ContLinks>
    </WrapperLi>
  );
}

export default EmployeeCard;
