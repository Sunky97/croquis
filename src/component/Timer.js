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

// function useInterval(callback, delay) {
//   const savedCallback = useRef(); // 최근에 들어온 callback을 저장할 ref를 하나 만든다.

//   useEffect(() => {
//     savedCallback.current = callback; // callback이 바뀔 때마다 ref를 업데이트 해준다.
//   }, [callback]);

//   useEffect(() => {
//     function tick() {
//       savedCallback.current(); // tick이 실행되면 callback 함수를 실행시킨다.
//     }
//     if (delay !== null) {
//       // 만약 delay가 null이 아니라면
//       let id = setInterval(tick, delay); // delay에 맞추어 interval을 새로 실행시킨다.
//       return () => clearInterval(id); // unmount될 때 clearInterval을 해준다.
//     }
//   }, [delay]); // delay가 바뀔 때마다 새로 실행된다.
// }

const TimerBox = styled.div`
  position: relative;
  width: 100%;
  background-color: ${(props) =>
    props.imminent ? "rgb(234 112 98)" : "rgb(16 139 245)"};
  text-align: center;
  height: 150px;
  box-sizing: border-box;
  padding: 20px 33% 20px 33%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  div {
    font-size: 50px;
    color: white;
  }
`;

const Controls = styled.div`
  background-color: ${(props) =>
    props.imminent ? "rgb(234 112 98)" : "rgb(16 139 245)"};
  height: 75px;
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

const Timer = ({ delay }) => {
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
    if (second === 0) {
      clearInterval(timerInterval);
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

  const handlePrevClick = () => {};

  const handlePauseClick = () => {
    setIsPlay(false);
    clearInterval(timerInterval);
  };

  const handlePlayClick = () => {
    setIsPlay(true);
  };

  const handleNextClick = () => {
    console.log(minute, second);
  };

  const handleBtnMouseOver = (e) => {
    // e.target.setAttribute("opacity", "1");
    e.target.setAttribute("color", "#FFF");
  };

  const handleBtnMouseOut = (e) => {
    e.target.setAttribute("color", "rgb(255 255 255 / 75%)");
  };
  return (
    <>
      <TimerBox imminent={isImminent()}>
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
      <Controls imminent={isImminent()}>
        <ControlBox>
          <li>
            <button
              onMouseOver={handleBtnMouseOver}
              onMouseOut={handleBtnMouseOut}
            >
              <FaBackward size={30} color="rgb(255 255 255 / 75%)" />
            </button>
          </li>
          <li className="on">
            {!isPlay ? (
              <button
                onClick={handlePlayClick}
                onMouseOver={handleBtnMouseOver}
                onMouseOut={handleBtnMouseOut}
              >
                <FaPlay size={30} color="rgb(255 255 255 / 75%)" />
              </button>
            ) : (
              <button
                onClick={handlePauseClick}
                onMouseOver={handleBtnMouseOver}
                onMouseOut={handleBtnMouseOut}
              >
                <FaPause size={30} color="rgb(255 255 255 / 75%)" />
              </button>
            )}
          </li>
          <li>
            <button
              onClick={handleNextClick}
              onMouseOver={handleBtnMouseOver}
              onMouseOut={handleBtnMouseOut}
            >
              <FaForward size={30} color="rgb(255 255 255 / 75%)" />
            </button>
          </li>
        </ControlBox>
      </Controls>
    </>
  );
};

export default Timer;
