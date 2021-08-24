import React, { useState, useEffect } from "react";
import "./items.scss";
import { NavLink } from "react-router-dom";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 3000));
}

const LoadingBtn = () => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);
  return (
    <>
      <NavLink
        className="btn btn-primary"
        to="/"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
      >
        {isLoading ? "Loading ..." : "View More"}
      </NavLink>
    </>
  );
};

export default LoadingBtn;
