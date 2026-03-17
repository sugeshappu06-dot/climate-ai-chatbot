import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";

import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Chatbot from "./pages/Chatbot.jsx";
import Alerts from "./pages/Alerts.jsx";
import CarbonCalculator from "./pages/CarbonCalculator.jsx";
import About from "./pages/About.jsx";

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/chatbot" element={<Chatbot />} />
                <Route path="/alerts" element={<Alerts />} />
                <Route path="/carbon" element={<CarbonCalculator />} />
                <Route path="/about" element={<About />} />
            </Routes>

        </BrowserRouter>
    );
}

export default App;