import styled from "@emotion/styled";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useState, } from "react";
import { useNavigate } from "react-router-dom";
import {DebounceInput} from 'react-debounce-input';

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

const InputSearch = {
  borderRadius: "6px",
  padding: "8px 12px",
  background: "#FFFFFF",
  border: "1px solid #D3D3D3",
  boxShadow: "0px 1px 2pp rgba(0, 0, 0, 0.05)",
  width: "100%"
}
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
        <DebounceInput
          placeholder={"search"}
          name="query"
          value={query}
          debounceTimeout={300}
          onChange={handleChange}
          style={InputSearch}
        />
      </ContainHeader>
  );
}

export default Header;
