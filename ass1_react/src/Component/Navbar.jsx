
import { NavLink } from "react-router-dom";
import './Navbar.css';


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg py-3" style={{ backgroundColor: "#2c3e50" }}>
      <div className="container">
      
        <a className="navbar-brand fw-bold fs-4 text-white" href="/">
          START FRAMEWORK
        </a>


        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto fw-semibold">
            <li className="nav-item mx-2">
              <NavLink className="nav-link text-white" to="/about">
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link text-white" to="/Portfolio">
                PORTFOLIO
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link text-white" to="/contact">
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
