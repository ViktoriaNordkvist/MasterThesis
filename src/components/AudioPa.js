import React, { useState, useRef, useEffect } from "react";
import './AudioPa.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import info from './../info.png';

function AudioPa({isAudioVisible, onVisibilityChange}) {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
      } = useSpeechRecognition();
    
      if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
      }

  return (
    <div className="AudioPa">
        <div className="AudioPa-Header">
            <div className="AudioPa-Title">
                <img src={info} className="AudioPa-InfoImg" alt="Information icon"></img>
                <h1>Public announcement</h1>
            </div>
            <h2>Pilot or cabin crew speaking</h2>
        </div>
        <div className="VideoPa-Transcript">
            <p className="VideoPa-TranscriptText">{transcript}</p>
        </div>
        <button className="AudioPa-Button-R" onClick={() => {SpeechRecognition.startListening({ continuous: true })}}>Start</button>
        <button className="AudioPa-Button-L" onClick={() => {
            SpeechRecognition.stopListening;
            onVisibilityChange(!isAudioVisible);
        }}>Stop</button>
    </div>
  );

}

export default AudioPa;