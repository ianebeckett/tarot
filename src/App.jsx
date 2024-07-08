import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import CardTable from "./CardTable";

const App = () => {
  const [cards, setCards] = useState(["/cards/00_CardBack.jpg"]);

  return (
    <div className="margin">
      <div className="control-panel">
        <h1>Tarot Reading</h1>
        <button onClick={(e) => console.log(e)} className="button-65">
          draw a card
        </button>
      </div>
      <CardTable cards={cards} />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
