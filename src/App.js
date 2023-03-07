import { Routes, Route } from "react-router-dom";
import EditDepartment from "./pages/editDepartment";
import InitPage from "./pages/initPage";
import NewDepartment from "./pages/newDepartment";
import ShowDepartment from "./pages/showDepartment";
import NewEmployee from "./pages/newEmployee";
import EditEmployee from "./pages/editEmployee";
import ShowEmployee from "./pages/showEmployee";
import LookForEmployee from "./pages/lookForEmployee";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  
  return (
    <div>
      <Header />
      <Routes>
        <Route index path="/" element={<InitPage />} />
        <Route path="/newDepartment" element={<NewDepartment />} />
        <Route path="/editDepartment/:id" element={<EditDepartment />} />
        <Route path="/showDepartment/:id" element={<ShowDepartment />} />
        <Route path="/newEmployee/" element={<NewEmployee />} />
        <Route path="/editEmployee/:id" element={<EditEmployee />} />
        <Route path="/showEmployee/:id" element={<ShowEmployee />} />
        <Route path="/lookforEmployees/:name" element={<LookForEmployee />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
