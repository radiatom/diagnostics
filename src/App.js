import './App.css';
import { Routes, Route, } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import DiagnosticsContainer from './components/Diagnostics/Diagnostics.container';
import TestBobberyStarterContainer from './components/Test.js/TestBobberyStarterContainer';
import Contacts from './components/Сontacts/Сontacts';


function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header">
          <Navbar />
        </div>
        <div className="content">
          <Routes>
            <Route path="/Diagnostics/*" element={<DiagnosticsContainer />} />
            <Route path="/Diagnostics/Starter/Bobbery/:linkNumber" element={<TestBobberyStarterContainer />} />
            <Route path="/Сontacts" element={<Contacts />} />


          </Routes>
        </div>
      </header>
      <nav className="navbar fixed-bottom bg-body-tertiary">
        <div className="container-fluid">
          <span className='futerText'>Автосервіс ###### надає послуги діагностики, професійного ремонту стартера, генератора у Луцьку. Заміна бендиксів, втягуючих реле, статорів, роторів, втулок, щіток, підшипників, регуляторів, діодних мостів, шківів. Продаж стартерів, генераторів. Великий вибір компонентів:статор стартера, статор генератора, бендикс стартера, підшипники до стартерів, втулки стартера, підшипники до генераторів, втягуючі реле, щітки стартера, щітки генератора, якір стартера, якір генератора, регулятор генератора, шків генератора, діодний міст генератора. У нашому асортименті стартера, генератори, компоненти брендів  Koyo, ZM, ZEN, IKA, Mobiletron, оригінальні бренди BOSCH, DELCO, DENSO, INA, VALEO.</span>
        </div>
      </nav>
    </div>
  );
}

export default App;