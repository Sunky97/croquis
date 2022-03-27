import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Timer from "./Timer";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import OutlinedInput from "@mui/material/OutlinedInput";
import ListItemText from "@mui/material/ListItemText";
import axios from "axios";
import getImage from "../utills/getImage";

const CroquisWrap = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  border-top: 1px solid #e5e6e9;
  border-bottom: 1px solid #e5e6e9;

  background-color: #f2f6fc;
`;

const ImageWrap = styled.div`
  width: 100%;
  height: 100%;
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
    box-shadow: 0 0 1.75rem #0000004d;
  }
`;

const TimerWrap = styled.div`
  width: 15rem;
  height: 100%;
  background: #fff;
  box-shadow: 0.15rem 0 1.75rem #21283226 !important;
`;

const SelectWrap = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

const categorys = [
  { text: "전체", value: "" },
  { text: "3D", value: "3d-renders" },
  { text: "질감, 패턴", value: "textures-patterns" },
  { text: "실험적인", value: "experimental" },
  { text: "건축", value: "architecture" },
  { text: "자연", value: "nature" },
  { text: "비즈니스", value: "business-work" },
  { text: "패션", value: "fashion" },
  { text: "필름", value: "film" },
  { text: "식음료", value: "food-drink" },
  { text: "건강", value: "health" },
  { text: "사람", value: "people" },
  { text: "인테리어", value: "interiors" },
  { text: "길거리", value: "street-photography" },
  { text: "여행", value: "travel" },
  { text: "동물", value: "animals" },
  { text: "마음, 영혼", value: "spirituality" },
  { text: "예술", value: "arts-culture" },
  { text: "역사", value: "history" },
  { text: "운동", value: "athletics" },
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Croquis = () => {
  const baseURL = "https://source.unsplash.com/random";

  const [previousImage, setPreviousImage] = useState("");
  const [currentImage, setCurrentImage] = useState(baseURL);
  const [delay, setDelay] = useState(30);
  const [category, setCategory] = useState([]);

  const nextImage = async () => {
    const img = await getImage();
    setCurrentImage(`data:image/png;base64,${img}`);
  };

  const handleDelayChange = (e) => {
    setDelay(() => e.target.value);
  };

  const handleCategoryChange = (e) => {
    setPreviousImage(() => currentImage);
    setCategory(() => e.target.value);
  };

  useEffect(() => {
    setCurrentImage(() => `${baseURL}/?${category}`);
  }, [category]);

  return (
    <CroquisWrap>
      <ImageWrap>
        <Image>
          <img src={currentImage} alt="이미지" />
        </Image>
      </ImageWrap>
      <TimerWrap>
        <Timer delay={delay} nextImage={nextImage} />
        <SelectWrap>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">타이머</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={delay}
              label="delay"
              onChange={handleDelayChange}
            >
              <MenuItem value={15}>15초</MenuItem>
              <MenuItem value={30}>30초</MenuItem>
              <MenuItem value={60}>1분</MenuItem>
              <MenuItem value={90}>1분 30초</MenuItem>
              <MenuItem value={300}>5분</MenuItem>
              <MenuItem value={600}>10분</MenuItem>
              <MenuItem value={900}>15분</MenuItem>
              <MenuItem value={1800}>30분</MenuItem>
            </Select>
          </FormControl>
        </SelectWrap>

        <SelectWrap>
          <FormControl fullWidth>
            <InputLabel id="demo-multiple-name-label">카테고리</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              onChange={handleCategoryChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
              value={category}
            >
              {categorys.map((e) => (
                <MenuItem key={e.text} value={e.value}>
                  {e.text}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </SelectWrap>
        {/* <button
          onClick={() => {
            alert(
              "이전이미지값" + previousImage + ",현재 이미지값" + currentImage
            );
          }}
        >
          확인용
        </button> */}
        <button onClick={nextImage}>다음</button>
      </TimerWrap>
    </CroquisWrap>
  );
};

export default Croquis;
