import { Routes, Route } from "react-router-dom";
import EditDepartment from "./pages/editDepartment";
import InitPage from "./pages/initPage";
import NewDepartment from "./pages/newDepartment";

function App() {  
  return (
    <Routes>
      <Route path="/" element={<InitPage />}/>
      <Route path="/newDepartment" element={<NewDepartment />}/>
      <Route path="/editDepartment/:id" element={<EditDepartment />}/>
    </Routes>
  );
}

export default App;
