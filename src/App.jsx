import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import CardTable from "./CardTable";
import allCards from "./allCards.json";

const App = () => {
    const [cards, setCards] = useState(["/cards/00_CardBack.jpg"]);

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function drawCard() {
        const rand = getRandomInt(0, allCards.length - 1);
        cards.push(allCards[rand])
        console.log("App cards:", cards);
        setCards(cards);
    };

    return (<div className="margin">
        <div className="control-panel">
            <h1>Tarot Reading</h1>
            <button onClick={drawCard} className="button-65">
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
