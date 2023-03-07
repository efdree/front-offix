import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createDepartment } from "../services/departments-service";
import FormDepartment from "../components/formDepartment";

function NewDepartment() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    cover:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    createDepartment(formData);
    navigate("/");
  }

  return (
    <FormDepartment 
      title={"New Departmet"} 
      placeholderInput={"Secret planning"} 
      placeholderText={"This is the best department yet..."} 
      onsubmit={handleSubmit} 
      valueInput={formData.name} 
      valueText={formData.description}
      onChange={handleChange}
      submit={"Create Department"}/>
  );
}

export default NewDepartment;
