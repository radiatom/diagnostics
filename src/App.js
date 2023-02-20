import './App.css';
import { Routes, Route, } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import DiagnosticsContainer from './components/Diagnostics/Diagnostics.container';
import TestContainer from './components/Test.js/TestContainer';


function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header">
          <Navbar/>  
        </div>
        <div className="content">
          <Routes>
            <Route path="/Diagnostics" element={<DiagnosticsContainer />} />
            <Route path="/Diagnostics/Test" element={<TestContainer />} />
            
          </Routes>
        </div>

      </header>
    </div>
  );
}

export default App;