import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import LogoImg from "../assets/logo-black.svg";
import Title from "../assets/title.svg";
const HeaderWrap = styled.header`
  width: 100%;
  height: 100px;
  background: white;

  display: flex;
  justify-content: space-between;

  padding: 0 55px 0 55px;
  box-sizing: border-box;
  align-items: center;
  box-shadow: 0 0.15rem 1.75rem #21283226 !important;
`;

const LogoWrap = styled.div`
  display: flex;
  width: 300px;
  height: 75px;
`;

const Logo = styled.div`
  width: 75px;
  height: 75px;
  background: url(${LogoImg}) no-repeat center/cover;
`;

const TitleImage = styled.div`
  width: 125px;
  height: 75px;
  background: url(${Title}) no-repeat center/cover;
`;

const Navigation = styled.nav`
  li {
    line-height: initial;
    display: inline-block;
    height: 32px;
    margin-left: 50px;
    a {
      text-decoration: none;
      color: #c9c9c9;
      font-size: 18px;
    }

    .on {
      color: black;
      font-weight: bold;
    }

    a:hover {
      color: black;

      font-weight: bold;
    }
  }
`;
const Header = () => {
  const currLocation = useLocation();
  const currTab = (path) => {
    return currLocation.pathname.includes(path) ? "on" : "";
  };
  return (
    <HeaderWrap>
      <Link to="/croquis">
        <LogoWrap>
          <Logo />
          <TitleImage />
        </LogoWrap>
      </Link>
      <Navigation>
        <ul>
          <li>
            <Link to="/croquis" className={currTab("/croquis")}>
              홈
            </Link>
          </li>
          <li>
            <Link to="/sketch" className={currTab("/sketch")}>
              크로키
            </Link>
          </li>
          <li>
            <Link to="/support" className={currTab("/support")}>
              도움되는 사이트
            </Link>
          </li>
        </ul>
      </Navigation>
    </HeaderWrap>
  );
};

export default Header;
