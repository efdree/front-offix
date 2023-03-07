import styled from "@emotion/styled";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Input from "./Input";
import { useState, } from "react";
import { useNavigate } from "react-router-dom";
import debounce from "";

const ContainHeader = styled.div`
  background: #f2f2f2;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
`;
const Brand = styled.img`
  width: 148px;
  height: 25px;
`;

function Header() {
  const [query, setQuery] = useState("");

    const navigate = useNavigate();

  function handleChange(event) {
    const data = event.target.value;
    setQuery(data);
    data == ""  ? navigate(`/`) :
    navigate(`/lookforEmployees/${data}`);
  }



  return (
      <ContainHeader>
      <Link to="/">
          <Brand src={logo} alt="logo" />
        </Link>
        <Input
          placeholder={"search"}
          name="query"
          value={query}
          onChange={handleChange}
        />
      </ContainHeader>
  );
}

export default Header;
