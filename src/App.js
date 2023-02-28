import { useEffect, useState } from "react";
import { getDepartments } from "./services/departments-service";

function App() {
  const [departments, setDepartments] = useState([]);

  async function getDepartment(event, query){
    event.preventDefault();
    const data = await getDepartments(query);
    setDepartments(data);
    console.log(data);

  }

  return (
    <div>
        <h2>Departments</h2>
        <form onSubmit={getDepartment}>
          <button type="submit">New Department</button>
        </form>
      
      <ul>
        {departments.map((department) => 
        ( 
        <li key={department.id}>
          <div>
            <img src={department.cover} alt={department.id}></img>
          </div>
          <div>
            <p>{department.name}</p>
            <p>{department.employee_count}</p>
          </div>
          <div>
            <a href="home">Editar</a>
            <a href="home">Eliminar</a>  
          </div>
        </li> 
        ))}
      </ul>
    </div>
  );
}

export default App;
