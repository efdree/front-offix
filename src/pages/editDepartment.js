import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  getDepartment,
  updateDepartment,
} from "../services/departments-service";
import FormDepartment from "../components/formDepartment";
import UploadImages from "../services/cloudinary-service.js";

function EditDepartment() {
  const navigate = useNavigate();

  const [departments, setDepartments] = useState([
    {
      name: "",
      description: "",
      cover: "",
      employee_count: 0,
    },
  ]);

  let params = useParams();

  useEffect(() => {
    getDepartment(Number(params.id)).then(setDepartments);
  }, [params.id]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    cover: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${params.id}.png`,
    employee_count: departments[0].employee_count,
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
    formData.name = formData.name ? formData.name : departments[0].name;
    formData.description = formData.description
      ? formData.description
      : departments[0].description;
    formData.cover = image ? image : departments[0].cover;
    formData.employee_count = departments[0].employee_count;
    event.preventDefault();
    updateDepartment(params.id, formData);
    navigate("/");
  }

  return (
    <FormDepartment 
      title={"Edit Departmet"} 
      placeholderInput={""} 
      placeholderText={""} 
      onsubmit={handleSubmit} 
      valueInput={formData.name ? formData.name : departments[0].name} 
      valueText={formData.description
      ? formData.description
      : departments[0].description} 
      onChange={handleChange} 
      onChangeFile={handleUploadImage}
      submit={"Edit Departmet"}/>
  );
}

export default EditDepartment;
