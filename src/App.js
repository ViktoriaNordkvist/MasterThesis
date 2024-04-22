import React, { useState } from "react";
import './App.css';
import TextPaCardStack from "./components/TextPaCardStack";
import VideoPa from "./components/VideoPa";
import AudioPa from "./components/AudioPa";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [isAudioVisible, setIsAudioVisible] = useState(false);



  const handleTextPaVisibility = (newValue) => {
    setIsVisible(newValue);
    // delay this with a few seconds if possible
  };

  const handleVideoPaVisibility = (newValue) => {
    setIsVideoVisible(newValue);
  };

  const handleAudioPaVisibility = (newValue) => {
    console.log("hejehj")
    setIsAudioVisible(newValue);
  };

  return (
    <div className="App">
      <div className="App-Buttons">
        <div className="App-HiddenStart" onClick={() => setIsVisible(true)}></div>
        <div className="App-HiddenStart" onClick={() => setIsVideoVisible(true)}></div>
        <div className="App-HiddenStart" onClick={() => setIsAudioVisible(true)}></div>
      </div>

      {isVisible ? (
        <div className="App-TextPa-Background">
          <TextPaCardStack isVisible={isVisible} onVisibilityChange={handleTextPaVisibility}/>
          {/* <TextPa isVisible={isVisible} onVisibilityChange={handleTextPaVisibility}/> */}
        </div> 
      ) : (
        <div></div>
      )}
      {isVideoVisible ? (
        <div className="App-TextPa-Background">
          <VideoPa isVideoVisible={isVideoVisible} onVisibilityChange={handleVideoPaVisibility}/>
        </div> 
      ) : (
        <div></div>
      )}
      {isAudioVisible ? (
        <div className="App-TextPa-Background">
          <AudioPa isAudioVisible={isAudioVisible} onVisibilityChange={handleAudioPaVisibility}/>
        </div> 
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;
