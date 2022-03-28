import styled from "styled-components";
import bg from "../assets/bg.jpg";
import step1 from "../assets/step1.gif";
import step2 from "../assets/step2.gif";
import step3 from "../assets/step3.gif";
import step4 from "../assets/step4.gif";

const MainWrap = styled.div`
  background: url(${bg}) no-repeat left top/cover;
  background-attachment: fixed;
  width: 100%;

  @media screen and (min-width: 1024px) {
    height: 2000px;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    height: 550px;
  }

  @media screen and (max-width: 767px) {
    height: 550px;
  }
`;

const Content = styled.div`
  background: rgb(86 86 86 / 48%);
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const Manual = styled.section`
  width: 100%;
  height: 300px;
  background: #4a4a4a8c;
  font-family: "Nanum Gothic", sans-serif;
  padding: 0 5rem 0 5rem;
  display: flex;
  align-items: center;
  color: white;
`;

const ImageWrap = styled.div`
  width: 50%;

  text-align: center;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const ManualGroup = styled.div``;

const ManualTltle = styled.b`
  font-size: 2.5em;
`;

const ManualText = styled.p`
  margin-top: 20px;
`;

const menualImage = [
  { src: step1, text: "크로키 탭으로 이동하세요" },
  { src: step2, text: "타이머를 설정하세요" },
  { src: step3, text: "원하는 카테고리를 설정하세요" },
  { src: step4, text: "원하는 설정이 되었으면 재생버튼을 눌러 시작!" },
];
const Home = () => {
  return (
    <MainWrap>
      <Content>
        {menualImage.map((e, i) => {
          return (
            <Manual key={e + i} idx={i + 1}>
              <ImageWrap>
                <img src={e.src} alt={"step" + i + 1} />
              </ImageWrap>
              <ManualGroup>
                <ManualTltle>STEP{i + 1}</ManualTltle>
                <ManualText>{e.text}</ManualText>
              </ManualGroup>
            </Manual>
          );
        })}
      </Content>
    </MainWrap>
  );
};

export default Home;
