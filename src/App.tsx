import { useState } from "react";
import "./App.css";
import StartPage from "./components/StartPage/StartPage";
import Popup from "./components/Popup/Popup";

function App() {
  const [isStartPage, setIsStartPage] = useState(true);

  return (
    <>
      {isStartPage ? (
        <StartPage setIsStartPage={setIsStartPage} />
      ) : (
        <Popup setIsStartPage={setIsStartPage} />
      )}
    </>
  );
}

export default App;
