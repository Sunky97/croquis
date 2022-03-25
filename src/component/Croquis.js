import { useState } from "react";
import styled from "styled-components";
import Timer from "./Timer";

const CroquisWrap = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
`;

const ImageWrap = styled.div`
  width: 70%;
  height: 100%;
  background-color: black;
`;

const Image = styled.div`
  padding: 30px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-height: 100%;
    max-width: 100%;
  }
`;

const TimerWrap = styled.div`
  width: 30%;
  height: 100%;
`;

const Croquis = () => {
  const baseURL = "https://source.unsplash.com/random";

  const [previousImage, setPreviousImage] = useState("");
  const [currentImage, setCurrentImage] = useState(baseURL);
  const [delay, setDelay] = useState(30);

  const handleDelayChange = (e) => {
    setDelay(() => e.target.value);
  };

  return (
    <CroquisWrap>
      <ImageWrap>
        <Image>
          <img src={currentImage} alt="이미지" />
        </Image>
      </ImageWrap>
      <TimerWrap>
        <Timer delay={delay} />
        <select onChange={handleDelayChange} defaultValue={30}>
          <option value={15}>15초</option>
          <option value={30}>30초</option>
          <option value={60}>1분</option>
          <option value={90}>1분 30초</option>
          <option value={300}>5분</option>
          <option value={600}>10분</option>
          <option value={900}>15분</option>
          <option value={1800}>30분</option>
        </select>
      </TimerWrap>
    </CroquisWrap>
  );
};

export default Croquis;
