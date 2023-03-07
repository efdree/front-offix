import styled from "@emotion/styled";

const ContainFooter = styled.div`
  background: #f2f2f2;
  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  padding: 16px;
`;

function Footer() {
  return <ContainFooter>© 2021 - Offix</ContainFooter>;
}

export default Footer;
