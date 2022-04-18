import React, { useRef } from "react";
import { FaArrowRight, FaUser } from "react-icons/fa";

const Intro = () => {
  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputRef.current?.value.trim()) {
      return;
    }
    console.log(inputRef.current?.value.trim());
    localStorage.setItem("userName", JSON.stringify(inputRef.current.value));
  };
  return (
    <main className="intro">
      <h1 className="heading">Hello,there</h1>
      <p className="para">Enter your name to get started</p>
      <form onSubmit={handleSubmit} className="intro__form">
        <div className="input-group">
          <FaUser />
          <input type="text" placeholder="Type your Name" ref={inputRef} />
        </div>
        <button type="submit" className="btn-brand">
          <FaArrowRight />
        </button>
      </form>
    </main>
  );
};

export default Intro;
