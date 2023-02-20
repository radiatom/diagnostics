import './App.css';
import { Routes, Route, } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'


function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header">
          <Navbar/>  
        </div>
        <div className="content">
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="/Home/" element={<Home />} /> */}
          </Routes>
        </div>

      </header>
    </div>
  );
}

export default App;