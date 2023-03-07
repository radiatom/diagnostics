import './App.css';
import { Routes, Route, } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import DiagnosticsContainer from './components/Diagnostics/Diagnostics.container';
import TestBobberyStarterContainer from './components/Test.js/TestBobberyStarterContainer';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Starter from './components/Blogs/Starter/Starter';
import DiagnosticStarter from './components/DiagnosticStarter/DiagnosticStarter';
import DiagnosticAltenator from './components/DiagnosticAltenator/DiagnosticAltenator';
import DiagnosticABattery from './components/DiagnosticBattery/DiagnosticBattery';
import Services from './components/Services/Services';
import Altenator from './components/Blogs/Altenator/Altenator';
import BatteryCharging from './components/Blogs/BatteryСharging/BatteryCharging';
import BlogsPage from './components/Blogs/BlogsPage';


function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header">
          <Navbar />
        </div>
        <div >
          <Routes>
            <Route className="home" path="/" element={<Home />} />
            <Route className="home" path="/Home" element={<Home />} />
            <Route path="/Services" element={<Services/>} />
            <Route path="/Diagnostics/*" element={<DiagnosticsContainer />} />
            <Route path="/Diagnostics/Starter/Bobbery/:linkNumber" element={<TestBobberyStarterContainer />} />
            <Route path="/Сontact" element={<Contact />} />
            <Route path="/Starter" element={<Starter />} />
            <Route path="/Blogs" element={<BlogsPage />} />
            <Route path="/DiagnosticStarter" element={<DiagnosticStarter />} />
            <Route path="/DiagnosticAltetnator" element={<DiagnosticAltenator />} />
            <Route path="/DiagnosticABattery" element={<DiagnosticABattery />} />
            <Route path="/Alnenator" element={<Altenator />} />
            <Route path="/BatteryСharging" element={<BatteryCharging />} />

          </Routes>
        </div>
      </header>
      <nav className="navbar fixed-bottom bg-body-tertiary ">
        <div className="container-fluid">
          <span className='futerText'>Автосервіс ###### надає послуги діагностики, професійного ремонту стартера, генератора у Луцьку. Заміна бендиксів, втягуючих реле, статорів, роторів, втулок, щіток, підшипників, регуляторів, діодних мостів, шківів. Продаж стартерів, генераторів. Великий вибір компонентів:статор стартера, статор генератора, бендикс стартера, підшипники до стартерів, втулки стартера, підшипники до генераторів, втягуючі реле, щітки стартера, щітки генератора, якір стартера, якір генератора, регулятор генератора, шків генератора, діодний міст генератора. У нашому асортименті стартера, генератори, компоненти брендів  Koyo, ZM, ZEN, IKA, Mobiletron, оригінальні бренди BOSCH, DELCO, DENSO, INA, VALEO.</span>
        </div>
      </nav>
    </div>
  );
}

export default App;