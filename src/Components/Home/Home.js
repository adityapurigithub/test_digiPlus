import React from "react";
import "./home.css";
const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="body">
        <div className="title">
          <img
            src="https://media-exp1.licdn.com/dms/image/C510BAQGLEMCUFDlYlw/company-logo_200_200/0/1556790275592?e=1676505600&v=beta&t=KU5dDVj8_moIUXYdv7xMTiVmqUQ8e6H0zqQ861wbqWE"
            alt="logo"
          />
          <h3>Welcome To DigiPlus</h3>
        </div>
        <div className="announcement">
          <h3>Announcement</h3>
          <div className="text">
            Working On Adding Project and Internship Details, Fill up Your
            Profile Details
          </div>
        </div>
        <div className="main">
          <div className="work">
            <h2>Work Actions</h2>
            <button className="btn">View Data</button>
          </div>
          <div className="internship">
            <h2>Internship</h2>
            <button className="btn">View Data</button>
          </div>
          <div className="solution">
            <h2>Solution Writing</h2>
            <button className="btn">Write Solution</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
