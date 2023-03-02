import styled from "@emotion/styled";

const SecondaryLink = styled.p`
    padding: 8px 16px;
    background: #F2F2F2;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #303036;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    border: none;
    corsor: pointer;
    font-family: 'Inter';
    width: 100%;
    text-align: center;
    margin: 8px 0px 32px 0px;

    &:hover {
        background: hsla(215, 14%, 34%, 1);
    }
`

export default SecondaryLink