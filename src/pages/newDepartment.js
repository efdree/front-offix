import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createDepartment } from "../services/departments-service";
import FormDepartment from "../components/formDepartment";
import UploadImages from "../services/cloudinary-service.js";

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

  const [image, setImage] = useState("");
  
  function handleUploadImage(event){
    const files = event.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "mxhekubc");
    UploadImages(data).then((data) => setImage(data.secure_url));
  }

  function handleSubmit(event) {
    event.preventDefault();
    formData.cover = image;
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
      onChangeFile={handleUploadImage}
      submit={"Create Department"}/>
  );
}

export default NewDepartment;
