import React, { useState, useRef, useEffect } from "react";
import './VideoPa.css';
import info_black from "./../info_black.png";
import time from "./../time.png"

function VideoPa({isVideoVisible, onVisibilityChange}) {
  const [counter, setCounter] = React.useState(167);

  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    if(counter == 0) {
        onVisibilityChange(!isVideoVisible);
    }
  }, [counter]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    if (minutes > 0) {
      return `${minutes} m ${remainingSeconds} s`;
    } else {
      return `${seconds} s`;
    }
  };

  return (
    <div className="Video-Pa">
      <div className="Video-Pa-Header"></div >
      <div className="Video-Pa-HeaderInfo">
        <div className="Video-Pa-IconText">
            <img src={info_black} className="Video-Pa-InfoImg" alt="Information icon"></img>
            <h1 className="Video-Pa-h1">Public announcement</h1>
        </div>
        <div className="Video-Pa-IconText">
            <img src={time} className="Video-pa-TimeImg" alt="Time icon"></img>
            <p className="Video-Pa-p">{formatTime(counter)}</p>
        </div>
      </div >
      <iframe className="Video-Pa-Video"
      width="100%" 
      height="100%" 
      src="https://www.youtube.com/embed/73xIj7R35kI?si=vX_So4iscYotcVwX&amp;autoplay=1&controls=0&muted=1" 
      title="YouTube video player" 
      frameborder="0" 
      allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" 
      allowfullscreen
      ></iframe>
      <div className="Video-Pa-Footer"></div>
    </div>
  );

}

export default VideoPa;