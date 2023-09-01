import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Diagnostics from "./components/Diagnostics/Diagnostics";
import Home from "./components/Home/Home";
import Starter from "./components/Home/Blogs/Starter/Starter";
import Altenator from "./components/Home/Blogs/Altenator/Altenator";
import BatteryCharging from "./components/Home/Blogs/BatteryСharging/BatteryCharging";
import TestPage from "./components/Diagnostics/TestsPage/TestPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import GalleryContainer from "./components/Gallery/GalleryContainer";
function App() {
    return (
        <div className="App" id='app'>
            <Header />
            <div className="contentApp">
                <Routes >
                    <Route path="/" element={<Home />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/Home/:section" element={<Home />} />
                    <Route path="/Diagnostics/:Page" element={<Diagnostics />}/>
                    <Route path="/Diagnostics/Test/:linkNumber"  element={<TestPage />}/>
                    <Route path="/Starter" element={<Starter />} />
                    <Route path="/Alnenator" element={<Altenator />} />
                    <Route path="/BatteryСharging" element={<BatteryCharging />}/>
                    <Route path="/Gallery" element={<GalleryContainer />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
