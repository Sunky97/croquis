import { useState } from "react";
import styled from "styled-components";
import Timer from "./Timer";

const CroquisWrap = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
`;

const ImageWrap = styled.div`
  width: 70%;
  height: 100%;
`;

const Image = styled.div`
  height: 100%;
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
  img {
    max-height: 100%;
    object-fit: cover;
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
