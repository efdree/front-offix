import { useState  } from "react";
import { useNavigate } from "react-router-dom";
import { createEmployee } from "../services/employees-service";
import FormEmployee from "../components/formEmployee";
import UploadImages from "../services/cloudinary-service.js";

function NewEmployee() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    nationality: "",
    role: "",
    birth_date: "",
    avatar:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    department_id: 0,
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
    formData.avatar = image;
    createEmployee(formData);
    navigate(`/showDepartment/${formData.department_id}`);
  }

  return (
    <FormEmployee 
      title={"New Employee"}
      onSubmit={handleSubmit}
      handleChange={handleChange}
      placeholderName={"John Doe"}
      inputName={formData.name}
      placeholderNationality={"Peruano"}
      inputNationality={formData.nationality}
      placeholderRole={"Eternal Apprentice"}
      inputRole={formData.role}
      placeholderBirthDate={""}
      inputBirthDate={formData.birth_date}
      selectDepartment={formData.department_id}
      selectOption={<option value="0">{"--Choose an option--"}</option>}
      onChangeFile={handleUploadImage}
      submit={"Create Employee"}
      />
    
  );
}

export default NewEmployee;
