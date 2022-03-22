import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import LogoImg from "../assets/logo-black.svg";
const HeaderWrap = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  height: 250px;
  background: white;
`;

const Logo = styled.div`
  width: 150px;
  height: 150px;
  background: url(${LogoImg}) no-repeat center/cover;
  margin: 15px auto 30px auto;
`;

const Navigation = styled.nav`
  text-align: center;
  li {
    display: inline-block;
    width: 65px;
    height: 32px;

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
    return currLocation.pathname === path ? "on" : "";
  };
  return (
    <HeaderWrap>
      <Logo />
      <Navigation>
        <ul>
          <li>
            <Link to="/croquis" className={currTab("/croquis")}>
              홈
            </Link>
          </li>
          <li>
            <Link to="/aa" className={currTab("/aa")}>
              소개
            </Link>
          </li>
          <li>
            <Link to="/bb" className={currTab("/bb")}>
              문의
            </Link>
          </li>
        </ul>
      </Navigation>
    </HeaderWrap>
  );
};

export default Header;
