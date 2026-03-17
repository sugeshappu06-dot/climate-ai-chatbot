import { Link } from "react-router-dom";

function Navbar() {

    return (
        <nav className="navbar">

            <h2>🌍 Climate AI</h2>

            <div className="nav-links">

                <Link to="/">Home</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/chatbot">Chatbot</Link>
                <Link to="/alerts">Alerts</Link>
                <Link to="/carbon">Carbon</Link>
                <Link to="/about">About</Link>

            </div>

        </nav>
    );
}

export default Navbar;