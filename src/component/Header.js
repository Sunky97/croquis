import { Fragment, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import LogoImg from "../assets/logo-black.svg";
import LogoImg2 from "../assets/title.svg";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { GiHamburgerMenu } from "react-icons/gi";
const HeaderWrap = styled.header`
  width: 100%;
  height: 100px;
  background: white;

  z-index: 10000;
  display: flex;

  box-sizing: border-box;
  align-items: center;
  box-shadow: 0 0.15rem 1.75rem #21283226 !important;

  @media screen and (min-width: 1024px) {
    padding: 0 55px 0 55px;
    justify-content: space-between;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 0 55px 0 55px;
  }

  @media screen and (max-width: 767px) {
    padding: 0;
    justify-content: center;
  }
`;

const LogoWrap = styled.div`
  display: flex;
  width: 250px;
  height: 75px;

  @media screen and (max-width: 767px) {
    justify-content: center;
  }
`;

const Logo = styled.div`
  width: 75px;
  height: 75px;
  background: url(${LogoImg}) no-repeat center/cover;

  @media screen and (min-width: 1024px) {
    display: block;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const TitleImage = styled.div`
  width: 125px;
  height: 75px;
  background: url(${LogoImg2}) no-repeat center/cover;
`;

const Navigation = styled.nav`
  @media screen and (min-width: 1024px) {
    display: block;
  }

  // @media screen and (min-width: 768px) and (max-width: 1023px) {
  //   padding: 0;
  // }

  @media screen and (max-width: 767px) {
    display: none;
  }
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

const SideNav = styled.div`
  @media screen and (min-width: 1024px) {
    display: none;
  }

  @media screen and (max-width: 767px) {
    display: block;
    position: absolute;
    right: 15px;
  }
`;

const sideNavList = [
  { text: "홈", url: "/croquis" },
  { text: "크로키", url: "/sketch" },
  { text: "도움되는 사이트", url: "/support" },
];

const Header = () => {
  const currLocation = useLocation();
  const currTab = (path) => {
    return currLocation.pathname.includes(path) ? "on" : "";
  };

  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {sideNavList.map((item, index) => (
          <Link to={item.url} key={index + item.url}>
            <ListItem button key={item.text}>
              <ListItemText primary={item.text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

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

      <SideNav key={"right"}>
        <Button onClick={toggleDrawer("right", true)}>
          <GiHamburgerMenu size={22} color={"black"} />
        </Button>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </SideNav>
    </HeaderWrap>
  );
};

export default Header;
