import styled from "styled-components";
import bg from "../assets/bg.jpg";
const MainContent = styled.div`
  background: url(${bg}) no-repeat left top/cover;
  width: 100%;

  @media screen and (min-width: 1024px) {
    height: 650px;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    height: 550px;
  }

  @media screen and (max-width: 767px) {
    height: 550px;
  }
`;
const Home = () => {
  return <MainContent></MainContent>;
};

export default Home;
