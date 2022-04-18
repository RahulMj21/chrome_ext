import React from "react";
import Weather from "../components/Weather";
import MainFocus from "../components/MainFocus";
import DailyQuote from "../components/DailyQuote";
import Middle from "../components/Middle";
import Todo from "../components/Todo";
import Customize from "../components/Customize";

const Main = () => {
  return (
    <main className="main">
      <Weather />
      <DailyQuote />
      <Middle />
      <MainFocus />
      <Todo />
      <Customize />
    </main>
  );
};

export default Main;
