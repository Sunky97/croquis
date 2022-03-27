import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useInterval from "../utills/useInterval";
import {
  FaPause,
  FaUndoAlt,
  FaPlay,
  FaBackward,
  FaForward,
} from "react-icons/fa";

const TimerWrap = styled.div`
  width: 100%;
  height: 150px;
  background-color: ${(props) =>
    props.imminent ? "rgb(234 112 98)" : "rgb(16 139 245)"};
`;

const TimerBox = styled.div`
  position: relative;
  width: 100%;
  background-color: ${(props) =>
    props.imminent ? "rgb(234 112 98)" : "rgb(16 139 245)"};
  text-align: center;
  height: 100px;
  box-sizing: border-box;
  padding: 20px 33% 20px 33%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  div {
    font-size: 40px;
    color: white;
  }
`;

const Controls = styled.div`
  height: 50px;
`;

const ControlBox = styled.ul`
  display: flex;
  justify-content: center;

  li {
    width: 25%;

    button {
      width: 100%;

      svg {
      }
    }
  }
`;

const ResetButton = styled.button`
  position: absolute;
  left: 15px;
  bottom: 15px;
`;

const Timer = ({ delay, nextImage, prevImage }) => {
  const [isPlay, setIsPlay] = useState(false);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [timerInterval, setTimerInterval] = useState(0);

  const tick = () => {
    if (second > 0) {
      setSecond((sec) => sec - 1);
    }

    if (second === 0) {
      if (minute === 0) {
        setIsPlay(false);
      } else {
        setMinute((min) => min - 1);
        setSecond(59);
      }
    }
  };

  const reset = () => {
    setMinute(parseInt(delay / 60));
    setSecond(parseInt(delay % 60));
  };

  const customInterval = useInterval(
    () => {
      tick();
    },
    isPlay ? 1000 : null
  );

  const isImminent = () => {
    return minute === 0 && second < 10 ? true : false;
  };

  useEffect(() => {
    reset();
  }, []);

  useEffect(() => {
    reset();
  }, [delay]);

  useEffect(() => {
    if (minute === 0 && second === 0) {
      clearInterval(timerInterval);
      nextImage();
      reset();
    }
  }, [minute, second]);

  useEffect(() => {
    if (isPlay) {
      setTimerInterval(customInterval);
    }
  }, [isPlay]);

  const handleResetClick = () => {
    reset();
  };

  const handlePrevClick = () => {
    prevImage();
    reset();
  };

  const handlePauseClick = () => {
    setIsPlay(false);
    clearInterval(timerInterval);
  };

  const handlePlayClick = () => {
    setIsPlay(true);
  };

  const handleNextClick = () => {
    nextImage();
    reset();
  };

  const handleBtnMouseOver = (e) => {
    // e.target.setAttribute("opacity", "1");
    e.target.setAttribute("color", "#FFF");
  };

  const handleBtnMouseOut = (e) => {
    e.target.setAttribute("color", "rgb(255 255 255 / 75%)");
  };
  return (
    <TimerWrap imminent={isImminent()}>
      <TimerBox>
        <div>{minute < 10 ? `0${minute}` : minute}</div>
        <div>:</div>
        <div>{second < 10 ? `0${second}` : second}</div>
        <ResetButton
          onClick={handleResetClick}
          onMouseOver={handleBtnMouseOver}
          onMouseOut={handleBtnMouseOut}
        >
          <FaUndoAlt size={20} color="rgb(255 255 255 / 75%)" />
        </ResetButton>
      </TimerBox>
      <ControlBox>
        <li>
          <button
            onClick={handlePrevClick}
            onMouseOver={handleBtnMouseOver}
            onMouseOut={handleBtnMouseOut}
          >
            <FaBackward size={20} color="rgb(255 255 255 / 75%)" />
          </button>
        </li>
        <li className="on">
          {!isPlay ? (
            <button
              onClick={handlePlayClick}
              onMouseOver={handleBtnMouseOver}
              onMouseOut={handleBtnMouseOut}
            >
              <FaPlay size={20} color="rgb(255 255 255 / 75%)" />
            </button>
          ) : (
            <button
              onClick={handlePauseClick}
              onMouseOver={handleBtnMouseOver}
              onMouseOut={handleBtnMouseOut}
            >
              <FaPause size={20} color="rgb(255 255 255 / 75%)" />
            </button>
          )}
        </li>
        <li>
          <button
            onClick={handleNextClick}
            onMouseOver={handleBtnMouseOver}
            onMouseOut={handleBtnMouseOut}
          >
            <FaForward size={20} color="rgb(255 255 255 / 75%)" />
          </button>
        </li>
      </ControlBox>
    </TimerWrap>
  );
};

export default Timer;
