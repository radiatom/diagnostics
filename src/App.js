import './App.css';
import { Routes, Route, } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import DiagnosticsContainer from './components/Diagnostics/Diagnostics.container';
import TestBobberyStarterContainer from './components/Test.js/TestBobberyStarterContainer';


function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header">
          <Navbar/>  
        </div>
        <div className="content">
          <Routes>
            <Route path="/Diagnostics/*" element={<DiagnosticsContainer />} />
            <Route path="/Diagnostics/Starter/Bobbery/:linkNumber" element={<TestBobberyStarterContainer />} />
            
          </Routes>
        </div>

      </header>
    </div>
  );
}

export default App;