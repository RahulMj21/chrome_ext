import React, { useEffect, useState } from "react";
import { MdSearch, MdSend } from "react-icons/md";

const Middle = () => {
  const [userName, setUserName] = useState(null);
  const handleGoogleSearch = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("userName"))) {
      setUserName(JSON.parse(localStorage.getItem("userName")));
    }
  }, []);

  return (
    <>
      <h1 className="heading time">
        12:25 <span>am</span>
      </h1>
      <p className="username">Good Morning, {userName}</p>
      <form className="google-search" onSubmit={handleGoogleSearch}>
        <MdSearch className="search-icon" />
        <input type="text" placeholder="Search on Google" />
        <button className="btn-fade" type="submit">
          <MdSend />
        </button>
      </form>
    </>
  );
};

export default Middle;
