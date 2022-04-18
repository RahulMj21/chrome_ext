import React, { useState } from "react";
import { FaCloudSun, FaAngleDown, FaCity } from "react-icons/fa";

const Weather = () => {
  const [showInputBar, setShowInputBar] = useState(false);
  const [city, setCity] = useState("kolkata");
  const [temp, setTemp] = useState("30.2");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className={`weather ${showInputBar ? "active" : ""}`}>
      <div className="top">
        <FaCloudSun />
        {city}, {temp}&deg;c
        <FaAngleDown
          className={`dropdown ${showInputBar ? "active" : ""}`}
          onClick={() => setShowInputBar(!showInputBar)}
        />
      </div>
      {showInputBar && (
        <form className="mainfocus__form form" onSubmit={handleSubmit}>
          <div className="input-group">
            <FaCity />
            <input type="text" placeholder="City Name" />
          </div>
        </form>
      )}
    </div>
  );
};

export default Weather;
