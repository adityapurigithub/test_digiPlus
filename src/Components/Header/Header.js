import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  const [open, setOpen] = useState("false");

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="header-wrapper">
      <div className="logo">
        <img
          src="https://media-exp1.licdn.com/dms/image/C510BAQGLEMCUFDlYlw/company-logo_200_200/0/1556790275592?e=1676505600&v=beta&t=KU5dDVj8_moIUXYdv7xMTiVmqUQ8e6H0zqQ861wbqWE"
          alt="logo"
        />
        <span>DigiPlus</span>
      </div>
      <div className="links-container">
        <a href="#" class="toggle-btn" onClick={handleToggle}>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </a>
        <ul className={open ? "fall" : ""}>
          <li>
            <Link className="links" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="links" to="/jobs">
              Jobs
            </Link>
          </li>
          <li>
            <Link className="links" to="/payments">
              Payments
            </Link>
          </li>
          <li>
            <Link className="links" to="/certificates">
              Certificates
            </Link>
          </li>
        </ul>
      </div>
      <div className="user">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Header;
