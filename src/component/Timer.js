import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

function useInterval(callback, delay) {
  const savedCallback = useRef(); // 최근에 들어온 callback을 저장할 ref를 하나 만든다.

  useEffect(() => {
    savedCallback.current = callback; // callback이 바뀔 때마다 ref를 업데이트 해준다.
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current(); // tick이 실행되면 callback 함수를 실행시킨다.
    }
    if (delay !== null) {
      // 만약 delay가 null이 아니라면
      let id = setInterval(tick, delay); // delay에 맞추어 interval을 새로 실행시킨다.
      return () => clearInterval(id); // unmount될 때 clearInterval을 해준다.
    }
  }, [delay]); // delay가 바뀔 때마다 새로 실행된다.
}

const TimerBox = styled.div``;

const Controls = styled.div``;

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

  const getTime = () => {
    setMinute(parseInt(delay / 60));
    setSecond(parseInt(delay % 60));
  };

  const customInterval = useInterval(
    () => {
      tick();
    },
    isPlay ? 1000 : null
  );

  useEffect(() => {
    getTime();
  }, []);

  useEffect(() => {
    getTime();
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
    getTime();
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
  return (
    <>
      <TimerBox>
        {minute < 10 ? `0${minute}` : minute}:
        {second < 10 ? `0${second}` : second}
      </TimerBox>
      <Controls>
        <ul>
          <li>
            <button>이전</button>
            <button onClick={handleResetClick}>초기화</button>
          </li>
          <li className="on">
            {!isPlay ? (
              <button onClick={handlePlayClick}>재생</button>
            ) : (
              <button onClick={handlePauseClick}>일시정지</button>
            )}
          </li>
          <li>
            <button onClick={handleNextClick}>앞으로</button>
          </li>
        </ul>
      </Controls>
    </>
  );
};

export default Timer;
