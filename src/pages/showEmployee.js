import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getEmployee } from "../services/employees-service";
import { FiEdit2 } from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi";
import { deleteEmployee } from "../services/employees-service";

const ContImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0px 8px 0px;
`;

const Image = styled.img`
  max-width: 64px;
  max-height: 64px;
`;

const Title = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 32px;
  color: #17171c;
  text-transform: capitalize;
`;

const Role = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #17171c;
  text-transform: capitalize;
`;

const DepartmentName = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #17171c;
  text-transform: capitalize;
`;

const Nationality = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #17171c;
  text-transform: capitalize;
`;

const BirthDate = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #17171c;
`;

const Content = styled.div`
  margin: 0px 16px;
  text-align: center;
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

const ContLinks = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
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

function ShowEmployee() {
  const navigate = useNavigate();

  const [employees, setEmployees] = useState([
    {
      name: "name",
      nationality: "nationality",
      role: "admin",
      birth_date: "22-02-2022",
      avatar: "avatar",
      department_id: 1,
    },
  ]);

  let params = useParams();

  useEffect(() => {
    getEmployee(Number(params.id)).then(setEmployees);
  }, [params.id]);

  function handleClick(event) {
    event.preventDefault();
    deleteEmployee(employees.id);
    navigate(`/showDepartment/${employees.department_id}`);
  }

  const dob = new Date(employees.birth_date);
  const month_diff = Date.now() - dob.getTime();
  const age_dt = new Date(month_diff);
  const year = age_dt.getUTCFullYear();
  const age = Math.abs(year - 1970);

  return (
    <Content>
      <ContImage>
        <Image src={employees.avatar} alt={employees.id} />
      </ContImage>

      <Title>{employees.name}</Title>
      <Role>{employees.role}</Role>
      <DepartmentName>
        {employees.department_id ? employees.department_id.name : ""}
      </DepartmentName>
      <Nationality>{employees.nationality}</Nationality>
      <BirthDate>
        {age + " "}
        years
      </BirthDate>
      <ContLinks>
        <Link to={"/editEmployee/" + employees.id} style={ActionLink}>
          <FiEdit2 />
        </Link>
        <Link to="/" style={ActionLink} onClick={handleClick}>
          <HiOutlineTrash />
        </Link>
      </ContLinks>

      <ContentLink>
        <Link to="/" style={SecondaryLink}>
          Back
        </Link>
      </ContentLink>
    </Content>
  );
}

export default ShowEmployee;
