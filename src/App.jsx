import './App.css';
import { Routes, Route, } from "react-router-dom";
import Diagnostics from './components/Diagnostics/Diagnostics';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Starter from './components/Blogs/Starter/Starter';
import DiagnosticStarter from './components/Diagnostics/DiagnosticStarter/DiagnosticStarter';
import DiagnosticAltenator from './components/Diagnostics/DiagnosticAltenator/DiagnosticAltenator';
import DiagnosticABattery from './components/Diagnostics/DiagnosticBattery/DiagnosticBattery';
import Services from './components/Services/Services';
import Altenator from './components/Blogs/Altenator/Altenator';
import BatteryCharging from './components/Blogs/BatteryСharging/BatteryCharging';
import BlogsPage from './components/Blogs/BlogsPage';
import TestPageContainer from './components/TestsPage/TestPageContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import GalleryContainer from './components/Gallery/GalleryContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header">
          <NavbarContainer/>
        </div>
        <div className='contentApp'>
          <Routes>
            <Route className="home" path="/" element={<Home />} />
            <Route className="home" path="/Home" element={<Home />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Diagnostics/*" element={<Diagnostics />} />
            <Route path="/Diagnostics/Test/:linkNumber" element={<TestPageContainer />} />
            <Route path="/Сontact" element={<Contact />} />
            <Route path="/Starter" element={<Starter />} />
            <Route path="/Blogs" element={<BlogsPage />} />
            <Route path="/DiagnosticStarter" element={<DiagnosticStarter />} />
            <Route path="/DiagnosticAltetnator" element={<DiagnosticAltenator />} />
            <Route path="/DiagnosticABattery" element={<DiagnosticABattery />} />
            <Route path="/Alnenator" element={<Altenator />} />
            <Route path="/BatteryСharging" element={<BatteryCharging />} />
            <Route path="/Gallery" element={<GalleryContainer />} />

            
          </Routes>
        </div>
      </header>
      <nav className="navbar fixed-bottom bg-body-tertiary ">
        <div className="container-fluid">
          <span className='futerText'>Автосервіс Вініко надає послуги діагностики, професійного ремонту стартера, генератора у Луцьку. Заміна бендиксів, втягуючих реле, статорів, роторів, втулок, щіток, підшипників, регуляторів, діодних мостів, шківів. Продаж стартерів, генераторів. Великий вибір компонентів:статор стартера, статор генератора, бендикс стартера, підшипники до стартерів, втулки стартера, підшипники до генераторів, втягуючі реле, щітки стартера, щітки генератора, якір стартера, якір генератора, регулятор генератора, шків генератора, діодний міст генератора. У нашому асортименті стартера, генератори, компоненти брендів  Koyo, ZM, ZEN, IKA, Mobiletron, оригінальні бренди BOSCH, DELCO, DENSO, INA, VALEO.</span>
        </div>
      </nav>
    </div>
  );
}

export default App;