import styled from "styled-components";
import LogoImage from "../assets/Logo.png";
const FooterWrap = styled.footer`
  margin-top: 50px;
  color: #9d9d9d;
  height: 150px;
  font-size: 14px;
  @media screen and (min-width: 1024px) {
    padding-left: 15%;
    width: 1024px;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 768px;
    padding-left: 10%;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    font-size: 11px;
    text-align: center;
  }
`;

const Logo = styled.div`
  @media screen and (min-width: 1024px) {
    width: 150px;
    height: 45px;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 150px;
    height: 34px;
  }

  @media screen and (max-width: 767px) {
    width: 100px;
    height: 34px;
    margin-left: auto;
    margin-right: auto;
  }

  background: url(${LogoImage}) no-repeat left top/contain;
`;

const Info = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
`;
const Copyright = styled.div``;

const Footer = () => {
  return (
    <FooterWrap>
      <Logo />
      <Info>개발,기획 홍순규 | 문의 hsk1612@naver.com</Info>
      <Info>깃허브 | https://github.com/Sunky97/croquis</Info>
      <Copyright> © 2022 Croquis</Copyright>
    </FooterWrap>
  );
};

export default Footer;
