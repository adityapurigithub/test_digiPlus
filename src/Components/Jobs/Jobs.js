import React, { useState } from "react";
import "./jobs.css";
const Jobs = () => {
  return (
    <div className="job-wrapper">
      <h2>Jobs</h2>
      <div className="body">
        <div className="left">
          <div className="l1">
            <div className="content">
              <span>JOBS</span>
              <button className="btn">Solution Writing</button>
            </div>
            <div className="content">
              <span>JOB APPLICATION</span>
              <button className="btn">Screening Test</button>
            </div>
            <div className="content">
              <span>STATUS</span>
              <button className="btn">Application Status</button>
            </div>
          </div>
          <div className="l2">
            <h3>Maths Book Solution</h3>
            <span>intern digiPlus</span>
          </div>
        </div>
        <div className="right">
          <div className="announcement">
            <h3>Announcement</h3>
            <div className="text">
              Working On Adding Project and Internship Details, Fill up Your
              Profile Details
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
