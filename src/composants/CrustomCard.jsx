import React from "react";

export default function CrustomCard({titre ,children}) {
  return (
    <div className="card-text mt-4">
      <div className="header-card">
        <h2 className="des">{ titre }</h2>
      </div>
      <div className="boy-card">
        <span className="progres-bar">
          <span className="progress-color"></span>
        </span>
        <div className="cont-icon d-flex  flex-column  ">
          {children}
           </div>
      </div>
    </div>
  );
}
