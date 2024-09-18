import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import allCards from "./allCards.json";

const App = () => {
    let deck = allCards.images;
    let backArt = "/cards/00_CardBack.jpg";
    const [cards, setCards] = useState([backArt, backArt]);

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function handleDraw() {
        if (cards.length === 5) {
            return;
        }

        const images = allCards.images;
        let random;
        do {
            random = getRandomInt(0, images.length - 1);
        } while (cards.includes(images[random]));
        setCards((prevCards) => [...prevCards, deck[random]]);
    }

    function setClass(i) {
        if (i == 0) {
            return "deck";
        }
        if (i == 1) {
            return "top-card";
        }
        return "card";
    }

    function setOnClick(i) {
        if (i == 0) {
            return null;
        }
        if (i == 1) {
            return handleDraw;
        }
        return showcase;
    }

    function showcase() {
        //console.log("yay");
    }

    return (
        <div className="card-table">
            {cards.map((card, index) => {
                return (
                    <div key={index} className={setClass(index)}>
                        <img src={card} onClick={setOnClick(index)} />
                    </div>
                );
            })}
        </div>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
