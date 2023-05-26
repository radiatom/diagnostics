import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Diagnostics from "./components/Diagnostics/Diagnostics";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Starter from "./components/Blogs/Starter/Starter";
import DiagnosticStarter from "./components/Diagnostics/DiagnosticStarter/DiagnosticStarter";
import DiagnosticAltenator from "./components/Diagnostics/DiagnosticAltenator/DiagnosticAltenator";
import DiagnosticABattery from "./components/Diagnostics/DiagnosticBattery/DiagnosticBattery";
import Services from "./components/Services/Services";
import Altenator from "./components/Blogs/Altenator/Altenator";
import BatteryCharging from "./components/Blogs/BatteryСharging/BatteryCharging";
import Blogs from "./components/Blogs/Blogs";
import TestPage from "./components/TestsPage/TestPage";
import GalleryContainer from "./components/Gallery/GalleryContainer";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App(props) {
    return (
        <div className="App">
            <Header />
            <div className="contentApp">
                <Routes>
                    <Route className="home" path="/" element={<Home />} />
                    <Route className="home" path="/Home" element={<Home />} />
                    <Route path="/Services" element={<Services />} />
                    <Route path="/Diagnostics/*" element={<Diagnostics />} />
                    <Route
                        path="/Diagnostics/Test/:linkNumber"
                        element={<TestPage />}
                    />
                    <Route path="/Сontact" element={<Contact />} />
                    <Route path="/Starter" element={<Starter />} />
                    <Route path="/Blogs" element={<Blogs />} />
                    <Route
                        path="/DiagnosticStarter"
                        element={<DiagnosticStarter />}
                    />
                    <Route
                        path="/DiagnosticAltetnator"
                        element={<DiagnosticAltenator />}
                    />
                    <Route
                        path="/DiagnosticABattery"
                        element={<DiagnosticABattery />}
                    />
                    <Route path="/Alnenator" element={<Altenator />} />
                    <Route
                        path="/BatteryСharging"
                        element={<BatteryCharging />}
                    />
                    <Route path="/Gallery" element={<GalleryContainer />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
