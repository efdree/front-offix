import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Button from "../components/Button";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import logo from "../assets/logo.png";
import { Link, useLocation, useParams } from "react-router-dom";
import { getDepartment, updateDepartment } from "../services/departments-service";

const Header = styled.div`
  background: #F2F2F2;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
`
const Brand = styled.img`
  width: 148px;
  height: 25px;
`

const Title = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  color: #17171C;
  margin: 16px 0px;
`

const Content = styled.div`
    margin: 0px 16px;
`

const Footer = styled.div`
  background:#F2F2F2;
  text-align: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  padding: 16px;
`

const InputFile = styled.input`
    width: 100%;
`

const StyledLabel = styled.label`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #303036;
`;

const ContentForm = styled.form`
  display:flex;
  flex-direction: column;
  gap: 16px;
`
const ContentLink = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const SecondaryLink = {
  padding: "8px 16px",
  background: "#F2F2F2",
  boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
  borderRadius: "4px",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#ffffff",
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "20px",
  border: "none",
  corsor: "pointer",
  fontFamily: 'Inter',
  margin: "8px 0px 32px 0px"
}

function EditDepartment(){
  const [departments, setDepartments] = useState([{
    name:"",
    description:"",
    cover: "",
  }]);

  let params = useParams();

  useEffect(() => { 
    getDepartment(Number(params.id))
    .then(setDepartments);
  },[]);

  const [formData, setFormData] = useState({
    name:'',
    description:'',
    cover:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${params.id}.png`,
  });

  function handleChange(event){
    const { name, value } = event.target;
    setFormData({...formData, [name]: value});
  }

  function handleSubmit(event){
    event.preventDefault();
    updateDepartment(params.id, formData);
  }

    return (
        <div>
          <Header>
            <Brand src={logo} alt="logo" />        
            <form>
                <Input placeholder={"search"}/>
            </form>
          </Header>
          <Content>
              <Title>Edit Department</Title>
              <ContentForm onSubmit={handleSubmit}>
                <Input 
                  placeholder={""} 
                  label="Name"
                  name="name"  
                  value={ formData.name ? formData.name : departments[0].name} 
                  onChange={handleChange}/>
                <Textarea 
                  placeholder={""} 
                  label="Description"
                  name="description"
                  value={formData.description ? formData.description: departments[0].description} 
                  onChange={handleChange}
                  />
                <div>
                  <StyledLabel>Cover</StyledLabel>
                  <InputFile type="file" name="cover"/>
                </div>
                <Button type="submit">Edit Department</Button>
              </ContentForm>
              <ContentLink>
                <Link to="/" style={SecondaryLink}>Back</Link>
              </ContentLink>
          </Content>
          <Footer>
            © 2021 - Offix
          </Footer>
        </div>
    )
}

export default EditDepartment;