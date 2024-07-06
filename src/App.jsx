import React from "react";
import { createRoot } from "react-dom/client";
import Card from "./Card";

const App = () => {
  return (
    <div>
      <h1>Tarot Reading</h1>
      <div className="reading-table">
        <Card art="./cards/512px-CardBack.jpg" />
        <Card art="/cards/512px-Swords07.jpg" />
        <Card art="/cards/512px-Swords08.jpg" />
        <Card art="/cards/512px-RWS_Tarot_21_World.jpg" />
      </div>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
