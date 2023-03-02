import styled from "@emotion/styled";

const StyledInput = styled.input`
    border-radius: 6px;
    padding: 8px 12px;
    background: #FFFFFF;
    border: 1px solid #D3D3D3;
    box-shadow: 0px 1px 2pp rgba(0, 0, 0, 0.05);
    width: 100%;
`;

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

function Input({
    id,
    name,
    type="text",
    value,
    onChange,
    placeholder,
    label
}){
    return (
        <div>
            {label && <StyledLabel htmlFor={id || name}>{label}</StyledLabel>}
            <StyledInput 
                type={type}
                name={name}
                id={id || name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default Input;