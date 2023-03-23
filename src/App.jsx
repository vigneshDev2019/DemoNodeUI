import { createContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import {Button} from '@mui/material'
import viteLogo from "/vite.svg";
import "./App.css";
import MainBody from "./Component/MainBody";
import PopModal from "./Component/PopModal";

export var context = createContext();
function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [showPage, setShowPage] = useState(false);

  async function FetchData() {
    const response = await fetch("https://vignesh-node-for-ui.onrender.com/Cars", {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    const responseData = await response.json();
    let result = [];
    for (var i in responseData) result.push(responseData[i]);
    setData(result);
  }

  useEffect(() => {
    FetchData();
  }, []);

  const onHide = () => {
    setShowPage(false)
  }

  return (
    <div className="App">
      <context.Provider value={data}>
        <div style={{display: "flex", justifyContent: "space-between", margin: "2rem"}}>
          <span style={{fontWeight: "600", fontSize:"x-large"}}>{!showPage ?  "Cars List" : "Edit Cars List"}</span>
          <Button variant="contained" color="secondary" onClick={() => setShowPage(!showPage)}>{!showPage ? "Edit" : "Back to Cars List"}</Button>  
        </div>
        {!showPage && <MainBody />}
        {showPage && <PopModal show={showPage} onHide={() => onHide()}/>}        
      </context.Provider>
    </div>
  );
}

export default App;
