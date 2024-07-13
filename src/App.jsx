import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import allCards from "./allCards.json";

const App = () => {
  let deck = allCards.images;
  const [cards, setCards] = useState(["/cards/00_CardBack.jpg"]);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function handleDraw() {
    const images = allCards.images;
    let random;
    do {
      random = getRandomInt(0, images.length - 1);
    } while (cards.includes(images[random]));
    setCards((prevCards) => [...prevCards, deck[random]]);
    console.log(cards);
  }

  return (
    <div className="margin">
      <div className="control-panel">
        <h1>Tarot Reading</h1>
        <button onClick={handleDraw} className="button-65">
          draw a card
        </button>
      </div>
      <div className="cardTable">
        {cards.map((card, index) => {
          return (
            <div key={index} className="card">
              <img src={card} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
