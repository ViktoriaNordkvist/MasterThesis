import './TextPa.css';
import React, { useRef, useState, useEffect } from "react";
import info from './../info.png';
import exit from './../close_small.png'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'


const renderTime = ({ remainingTime }) => {
  const currentTime = useRef(remainingTime);
  const prevTime = useRef(null);
  const isNewTimeFirstTick = useRef(false);
  const [, setOneLastRerender] = useState(0);

  if (currentTime.current !== remainingTime) {
    isNewTimeFirstTick.current = true;
    prevTime.current = currentTime.current;
    currentTime.current = remainingTime;
  } else {
    isNewTimeFirstTick.current = false;
  }

  // force one last re-render when the time is over to tirgger the last animation
  if (remainingTime === 0) {
    setTimeout(() => {
      setOneLastRerender((val) => val + 1);
    }, 20);
  }

  const isTimeUp = isNewTimeFirstTick.current;

  return (
    <div className="time-wrapper">
      <div key={remainingTime} className={`time ${isTimeUp ? "up" : ""}`}>
        {<p style={{color: 'white', fontSize: '50px', fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 600}}>{remainingTime}</p>}
      </div>
      {prevTime.current !== null && (
        <div
          key={prevTime.current}
          
        >
          {<p style={{color: '#091326'}}>{prevTime.current}</p>}
        </div>
      )}
    </div>
  );
};



function TextPa({onComplete, stackSize, textVersion}) {
  const [timerCompleted, setTimerCompleted] = useState(false);
  const [creationTime, setCreationTime] = useState("");
  const [titleText, setTitleText] = useState("");
  const [bodyText, setBodyText] = useState("");
  const [nrOfSeconds, setNrOfSeconds] = useState(5);

  useEffect(() => {
    setCardText();
  }, []);

  const setCardText = () => {
    if(textVersion == 1) {
      setTitleText("Seatbelts on");
      setBodyText("Please put on your seatbelts");
      setNrOfSeconds(7);
      setCreationTime("30 min ago")
    }
    else if (textVersion == 2) {
      setTitleText("Dinner");
      setBodyText("Dinner will be served shortly, please raise your seats to an upright position");
      setNrOfSeconds(14);
      setCreationTime("5 min ago")
    }
    else{
      setTitleText("Safety information - Turbulence");
      setBodyText("We might experience turbulence ahead due to changing weather conditions, we are flying in" +
      " to a stormy area above the atlantic ocean. The pilots will be extra alert to help minimize the turbulence, "+
       "and passengers are adviced to buckle up to stay safe. ");
       setNrOfSeconds(30);
       setCreationTime("just now")
    }
  }

  return (
    <div className="TextPa">
        <div className="TextPa-Card">
            <div className="TextPa-Information">
                <div className="TextPa-Header">
                  <img src={info} className="TextPa-InfoImg" alt="Information icon"></img>
                  <h1>{titleText}</h1>
                </div>
                <div className="TextPa-Divider"></div>
                <p style={{fontWeight: 400}}>{bodyText}</p>
                <h3>1 / {stackSize}</h3>
            </div>
            <div className="TextPa-Timer">
              {timerCompleted ? (
                <img src={exit} alt="Your Image" onClick={() => onComplete()} />
              ) : (
                <CountdownCircleTimer
                  isPlaying
                  duration={nrOfSeconds}
                  colors="#52a6d5"
                  size={120}
                  strokeWidth={10}
                  trailStrokeWidth={0}
                  strokeLinecap={'square'}
                  onComplete={() => {setTimerCompleted(true); }}
                >
                  {renderTime}
                </CountdownCircleTimer>
              )}
              <h4 className='TextPa-VisibleTime'>{creationTime}</h4>
            </div>
        </div>
    </div>
  );
}

export default TextPa;