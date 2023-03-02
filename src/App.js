import { Routes, Route } from "react-router-dom";
import InitPage from "./pages/initPage";
import NewDepartment from "./pages/newDepartment";

function App() {  
  return (
    <Routes>
      <Route path="/" element={<InitPage />}/>
      <Route path="/newDepartment" element={<NewDepartment />}/>
    </Routes>
  );
}

export default App;
