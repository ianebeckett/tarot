import { useState } from "react";
import { createRoot } from "react-dom/client";
import { Deck } from "./Deck.js";
import type { Card } from "./cards.js";
import { cards } from "./cards.js";

const cardLimit = 3;
const cardBack = "/cards/00_Reverse.webp";

function App() {
  const [drawnCards, setDrawnCards] = useState([]);

  console.log(drawnCards); // invoked on rerender

  // handleDraw is responsible for adding a cards to the list of drawn cards.
  const handleDraw = (newCard: Card) => {
    if (drawnCards.length === cardLimit) return;
    setDrawnCards([...drawnCards, newCard]);
  };

  const handleReset = () => {
    if (drawnCards.length) {
      setDrawnCards([]);
    }
  };

  return (
    <div>
      <div className="row">
        <Deck
          handleDraw={handleDraw}
          cardBack={cardBack}
          cards={cards}
          drawnCards={drawnCards}
          cardLimit={cardLimit}
        />
        {drawnCards.map((card) => (
          <div className="card-container" key={card.imgUrl}>
            <img className="card card-clickable" src={card.imgUrl} />
          </div>
        ))}
      </div>
      <div className="row">
        <button id="btn-reset" onClick={handleReset}>
          RESET
        </button>
      </div>
    </div>
  );
}

const container = document.getElementById("root");
if (container === null) {
    throw new Error("Container is null.")
}
const root = createRoot(container);
root.render(<App />);
