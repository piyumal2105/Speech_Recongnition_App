// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function App() {
  const startListening = () =>
    SpeechRecognition.startListening({
      continuous: true,
      language: "en",
    });
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return null;
  }
  return (
    <>
      <div className="containor">
        <h2>Speech to Text Converter</h2>
        <br />
        <div className="main-content">{transcript}</div>
        <div className="btn-style">
          <button>Copy</button>
          <button onClick={startListening}>Start Listning</button>
          <button onClick={SpeechRecognition.stopListening()}>
            Stop Listning
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
