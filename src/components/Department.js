import styled from "@emotion/styled";
import { FiEdit2 } from 'react-icons/fi';
import { HiOutlineTrash } from 'react-icons/hi';
import { Link } from "react-router-dom";
import EditDepartment from "../pages/editDepartment";

const WrapperLi = styled.li`
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    max-width: 328px;
    margin: 32px 0px;
`
const ContImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Image = styled.img`
    max-width: 328px;
    max-height: 150px;
`

const ContBaseInfo = styled.div`
    padding: 8px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
`

const DepartmentName = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
`

const EmployeeCount = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
`

const ContLinks = styled.div`
    display: flex;
    justify-content: right;
    padding: 8px 16px;
    gap: 8px;
    text-align: center;
`

const ActionLink = {
    background: "#757575",
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
    borderRadius: "50px",
    width: "28px",
    height: "28px",
    color: "white",
    padding: "4px"
    }

function Department({id, department}){
    return (
        <WrapperLi key={id}>
          <ContImage>
            <Image src={department.cover} alt={department.id} />
          </ContImage>
          <ContBaseInfo>
            <DepartmentName>{department.name}</DepartmentName>
            <EmployeeCount>{department.employee_count} employees</EmployeeCount>
          </ContBaseInfo>
          <ContLinks>
            <Link to={"/editDepartment/" + department.id} style={ActionLink}><FiEdit2 /></Link>
            <Link to="/" style={ActionLink}><HiOutlineTrash /></Link>  
          </ContLinks>
        </WrapperLi> 
    )
}

export default Department;