import loading from "/src/assets/loading-indicator.gif";
import React from "react";

const Loading = ({ isLoading }) => {
  return isLoading ? (
    <div className="loading-container">
      <img src={loading} alt="Loading spinner" />
    </div>
  ) : (
    <></>
  );
};

export default Loading;
