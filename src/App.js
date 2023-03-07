import { Routes, Route } from "react-router-dom";
import EditDepartment from "./pages/editDepartment";
import InitPage from "./pages/initPage";
import NewDepartment from "./pages/newDepartment";
import ShowDepartment from "./pages/showDepartment";
import NewEmployee from "./pages/newEmployee";
import EditEmployee from "./pages/editEmployee";
import ShowEmployee from "./pages/showEmployee";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import Input from "./components/Input";
import { useState, useCallback, useEffect } from "react";
import styled from "@emotion/styled";
import { debounce } from "./utils";
import logo from "./assets/logo.png";
import { getEmployees } from "./services/employees-service";
import EmployeeList from "./components/EmployeeList";

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

function App() {
  const [employees, setEmployees] = useState([]);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(employees);

  useEffect(() => {
    getEmployees()
      .then(setEmployees)
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    setResults(employees);
  }, [employees]);

  const searchMemoized = useCallback(
    debounce((query) => {
      const nowResult = searchEmployees(query);
      setResults(nowResult);
    }, 2000),
    [searchEmployees]
  );

  function handleChange(event) {
    const data = event.target.value;
    setQuery(data);
    searchMemoized(data);
  }

  function searchEmployees(query) {
    return employees.filter((employee) => {
      const queryText = query.toLowerCase();
      const [name] = ["name"].map((key) => {
        return employee[key].toLowerCase();
      });
      const cond1 = name.includes(queryText);

      return cond1;
    });
  }

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
      {results.length !== 0 ? (
        <Content>
          <Title>Search results</Title>
          <p>Search term: "{query}"</p>
          <p>{results.length} employees found</p>
          <EmployeeList employees={results} />
        </Content>
      ) : (
        <p>Search term: "{query}"</p>
      )}
      <Routes>
        <Route index path="/" element={<InitPage />} />
        <Route path="/newDepartment" element={<NewDepartment />} />
        <Route path="/editDepartment/:id" element={<EditDepartment />} />
        <Route path="/showDepartment/:id" element={<ShowDepartment />} />
        <Route path="/newEmployee/" element={<NewEmployee />} />
        <Route path="/editEmployee/:id" element={<EditEmployee />} />
        <Route path="/showEmployee/:id" element={<ShowEmployee />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
