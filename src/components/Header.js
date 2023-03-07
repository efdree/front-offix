import { useState, useCallback } from "react";
import styled from "@emotion/styled";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Input from "./Input";
import { searchEmployees } from "../services/employees-service";
import { debounce } from "../utils";

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
  const [results, setResults] = useState([
    {
      name: "name",
      nationality: "nationality",
      role: "admin",
      birth_date: "22-02-2022",
      avatar: "avatar",
      department_id: 1,
    },
  ]);

  function handleChange(event) {
    const data = event.target.value;
    setQuery(data);
    searchMemoized(data);
  }

  const searchMemoized = useCallback(
    debounce((query) => {
      const nowResult = searchEmployees(query);
      console.log(nowResult);
      setResults(nowResult);
    }, 2000),
    [searchEmployees]
  );

  return (
    <div>
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
    </div>
  );
}

export default Header;
