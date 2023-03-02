import styled from "@emotion/styled";
import Department from "./Department";

const WrapperUl = styled.ul`
    padding: 0px;
`

function DepartmentsList({departments}){
    return(
        <WrapperUl>
        {departments.map((department) => 
        ( 
            <Department department={department} />
        ))}
      </WrapperUl>
    )
}

export default DepartmentsList;