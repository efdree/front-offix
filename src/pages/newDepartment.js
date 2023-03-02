import { useState } from "react";
import styled from "@emotion/styled";
import Button from "../components/Button";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import SecondaryLink from "../components/SecondaryLink";
import { createDepartment } from "../services/departments-service";

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

function NewDepartment(){
  const [formData, setFormData] = useState({
    name:'',
    description:'',
    cover:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
    employee_count: 0
  });

  function handleChange(event){
    const { name, value } = event.target;
    setFormData({...formData, [name]: value});
  }

  function handleSubmit(event){
    event.preventDefault();
    createDepartment(formData);
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
              <Title>New Department</Title>
              <ContentForm onSubmit={handleSubmit}>
                <Input 
                  placeholder={"Secret planning"} 
                  label="Name"
                  name="name"  
                  value={formData.name} 
                  onChange={handleChange}/>
                <Textarea 
                  placeholder={"This is the best department yet..."} 
                  label="Description"
                  name="description"
                  value={formData.description} 
                  onChange={handleChange}
                  />
                <div>
                  <StyledLabel>Cover</StyledLabel>
                  <InputFile type="file" name="cover"/>
                </div>
                <Button type="submit">Create Department</Button>
              </ContentForm>
            <SecondaryLink><Link to="/">Back</Link></SecondaryLink>
          </Content>
          <Footer>
            © 2021 - Offix
          </Footer>
        </div>
    )
}

export default NewDepartment;