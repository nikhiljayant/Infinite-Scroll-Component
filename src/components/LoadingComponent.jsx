import React from "react";

const LoadingComponent = () => {
  return (
    <div className="loading-container">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingComponent;
