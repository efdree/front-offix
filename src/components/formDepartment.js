import styled from "@emotion/styled";
import Button from "./Button";
import Input from "./Input";
import Textarea from "./Textarea";
import { Link } from "react-router-dom";

const Title = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  color: #17171c;
  margin: 16px 0px;
`;

const Content = styled.div`
  margin: 0px 16px;
`;

const InputFile = styled.input`
  width: 100%;
`;

const StyledLabel = styled.label`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #303036;
`;

const ContentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const ContentLink = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const SecondaryLink = {
  padding: "8px 16px",
  background: "#F2F2F2",
  boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
  borderRadius: "4px",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#303036",
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "20px",
  border: "none",
  corsor: "pointer",
  fontFamily: "Inter",
  textAlign: "center",
  margin: "8px 0px 32px 0px",
};


function FormDepartment({
    title,
    placeholderInput,
    placeholderText,
    onsubmit,
    valueInput,
    valueText,
    onChange,
    onChangeFile,
    submit
}){
    return (
    <Content>
      <Title>{title}</Title>
      <ContentForm onSubmit={onsubmit}>
        <Input
          placeholder={placeholderInput}
          label="Name"
          name="name"
          value={valueInput}
          onChange={onChange}
        />
        <Textarea
          placeholder={placeholderText}
          label="Description"
          name="description"
          value={valueText}
          onChange={onChange}
        />
        <div>
          <StyledLabel>Cover</StyledLabel>
          <InputFile type="file" name="cover" onChange={onChangeFile}/>
        </div>
        <Button type="submit">{submit}</Button>
      </ContentForm>
      <ContentLink>
        <Link to="/" style={SecondaryLink}>
          Back
        </Link>
      </ContentLink>
    </Content>
    )
}

export default FormDepartment;