import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Timer from "./Timer";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import getImage from "../utills/getImage";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/system";

const CroquisWrap = styled.div`
  width: 100%;
  border-top: 1px solid #e5e6e9;
  border-bottom: 1px solid #e5e6e9;

  background-color: #f2f6fc;

  @media screen and (min-width: 1024px) {
    display: flex;
    height: 800px;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    display: inline-block;
    height: 900px;
  }

  @media screen and (max-width: 767px) {
    display: inline-block;
  }
`;

const ImageWrap = styled.div`
  width: 100%;
  height: 100%;

  // @media screen and (min-width: 1024px) {
  //   height: 550px;
  // }

  // @media screen and (min-width: 768px) and (max-width: 1023px) {
  //   height: 550px;
  // }

  // @media screen and (max-width: 767px) {
  //   height: 550px;
  // }
`;

const Image = styled.div`
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

  @media screen and (min-width: 1024px) {
    padding: 30px;

    img {
      box-shadow: 0 0 1.75rem #0000004d;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 0;
  }
`;

const TimerWrap = styled.div`
background: #fff;
box-shadow: 0.15rem 0 1.75rem #21283226 !important;

@media screen and (min-width: 1024px) {
    width: 15rem;
    height: 100%;

  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 100%
    height: 300px;
  }

  // @media screen and (max-width: 767px) {
  //   height: 550px;
  // }
`;

const SelectWrap = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

const categorys = [
  { text: "??????", value: "" },
  { text: "3D", value: "3d-renders" },
  { text: "??????, ??????", value: "textures-patterns" },
  { text: "????????????", value: "experimental" },
  { text: "??????", value: "architecture" },
  { text: "??????", value: "nature" },
  { text: "????????????", value: "business-work" },
  { text: "??????", value: "fashion" },
  { text: "??????", value: "film" },
  { text: "?????????", value: "food-drink" },
  { text: "??????", value: "health" },
  { text: "??????", value: "people" },
  { text: "????????????", value: "interiors" },
  { text: "?????????", value: "street-photography" },
  { text: "??????", value: "travel" },
  { text: "??????", value: "animals" },
  { text: "??????, ??????", value: "spirituality" },
  { text: "??????", value: "arts-culture" },
  { text: "??????", value: "history" },
  { text: "??????", value: "athletics" },
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 70,
    },
  },
};

const Croquis = () => {
  const previousImage = useRef([]);
  const [currentImage, setCurrentImage] = useState("");
  const [delay, setDelay] = useState(30);
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const firstImage = async () => {
      setIsLoading(true);

      const image = await getImage();
      setIsLoading(false);
      return image;
    };
    setCurrentImage(firstImage);
  }, []);

  const prevImage = () => {
    if (previousImage.current.length === 1) {
      alert("?????? ???????????? ????????????.");
      return;
    }
    setCurrentImage(previousImage.current.pop());
  };
  const nextImage = async () => {
    const img = await getImage(category);

    previousImage.current.push(currentImage);
    setCurrentImage(`data:image/png;base64,${img}`);
  };

  const handleDelayChange = (e) => {
    setDelay(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(() => e.target.value);
  };

  return (
    <CroquisWrap>
      <ImageWrap>
        <Image>
          {isLoading ? (
            <Box
              sx={{
                height: 500,
                display: "flex",
                alignItems: "center",
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <img src={currentImage} alt="?????????" />
          )}
        </Image>
      </ImageWrap>
      <TimerWrap>
        <Timer
          delay={delay}
          nextImage={nextImage}
          previousImage={previousImage}
          prevImage={prevImage}
        />
        <SelectWrap>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">?????????</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="delay"
              defaultValue={30}
              onChange={handleDelayChange}
            >
              <MenuItem value={15}>15???</MenuItem>
              <MenuItem value={30}>30???</MenuItem>
              <MenuItem value={60}>1???</MenuItem>
              <MenuItem value={90}>1??? 30???</MenuItem>
              <MenuItem value={180}>3???</MenuItem>
              <MenuItem value={300}>5???</MenuItem>
              <MenuItem value={600}>10???</MenuItem>
              <MenuItem value={900}>15???</MenuItem>
              <MenuItem value={1800}>30???</MenuItem>
            </Select>
          </FormControl>
        </SelectWrap>

        <SelectWrap>
          <FormControl fullWidth>
            <InputLabel id="demo-multiple-name-label">????????????</InputLabel>
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
      </TimerWrap>
    </CroquisWrap>
  );
};

export default Croquis;
