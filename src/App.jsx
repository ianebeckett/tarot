import React from "react";
import { createRoot } from "react-dom/client";
import Card from "./Card";

const App = () => {
  return (
    <div>
      <h1>Tarot Reading</h1>
      <div className="reading-table">
        <Card art="./cards/CardBack.jpg" />
        <Card art="/cards/Swords07.jpg" />
        <Card art="/cards/Swords08.jpg" />
        <Card art="/cards/21_World.jpg" />
      </div>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
