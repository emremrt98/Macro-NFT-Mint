import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Minter from './components/minter/Minter'
import Home from './components/home.jsx'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/minter" element={<Minter />}></Route>
        </Routes>
      </BrowserRouter>
    
      
    </div>
  );
}

export default App;
