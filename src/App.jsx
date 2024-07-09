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

    // draw a card that hasn't been drawn yet
    function drawCard() {
        const images = allCards.images;
        let random = getRandomInt(0, images.length - 1);
        while (cards.includes(images[random])) {
            random = getRandomInt(0, images.length - 1);
        }
        cards.push(images[random])
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
