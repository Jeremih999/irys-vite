
import './App.css'
import Header from './components/Header';
import Swap from './components/Swap';
// import Swap from "./components/Swap";
import Stake from "./components/Stake";
import {BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <div className="mainWindow">
        <Routes>
          <Route path="/" element={<Swap/>} />
          <Route path="/stake" element={<Stake/>} />
        </Routes>
        {/* <Swap /> */}
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
