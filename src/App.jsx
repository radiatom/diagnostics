import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Diagnostics from "./components/Diagnostics/Diagnostics";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Starter from "./components/Blogs/Starter/Starter";
import Services from "./components/Services/Services";
import Altenator from "./components/Blogs/Altenator/Altenator";
import BatteryCharging from "./components/Blogs/BatteryСharging/BatteryCharging";
import Blogs from "./components/Blogs/Blogs";
import TestPage from "./components/TestsPage/TestPage";
// import GalleryContainer from "./components/Gallery/GalleryContainer";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
    return (
        <div className="App" id='app'>
            <Header />
            <div className="contentApp">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/Services" element={<Services />} />
                    <Route path="/Diagnostics/:Page" element={<Diagnostics />}/>
                    <Route path="/Diagnostics/Test/:linkNumber"  element={<TestPage />}/>
                    <Route path="/Сontact" element={<Contact />} />
                    <Route path="/Blogs" element={<Blogs />} />
                    <Route path="/Starter" element={<Starter />} />
                    <Route path="/Alnenator" element={<Altenator />} />
                    <Route path="/BatteryСharging" element={<BatteryCharging />}/>
                    {/* <Route path="/Gallery" element={<GalleryContainer />} /> */}
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
