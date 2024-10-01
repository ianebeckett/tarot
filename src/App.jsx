import React, { useState } from "react"
import { createRoot } from "react-dom/client"
import { Deck } from "./Deck"

const urls = [
    "/cards/00_Fool.jpg",
    "/cards/01_Magician.jpg",
    "/cards/02_High_Priestess.jpg",
    "/cards/03_Empress.jpg",
    "/cards/04_Emperor.jpg",
    "/cards/05_Hierophant.jpg",
    "/cards/06_Lovers.jpg",
    "/cards/07_Chariot.jpg",
    "/cards/08_Strength.jpg",
    "/cards/09_Hermit.jpg",
    "/cards/10_Wheel_of_Fortune.jpg",
    "/cards/11_Justice.jpg",
    "/cards/12_Hanged_Man.jpg",
    "/cards/13_Death.jpg",
    "/cards/14_Temperance.jpg",
    "/cards/15_Devil.jpg",
    "/cards/16_Tower.jpg",
    "/cards/17_Star.jpg",
    "/cards/18_Moon.jpg",
    "/cards/19_Sun.jpg",
    "/cards/20_Judgement.jpg",
    "/cards/21_World.jpg",
    "/cards/Cups01.jpg",
    "/cards/Cups02.jpg",
    "/cards/Cups03.jpg",
    "/cards/Cups04.jpg",
    "/cards/Cups05.jpg",
    "/cards/Cups06.jpg",
    "/cards/Cups07.jpg",
    "/cards/Cups08.jpg",
    "/cards/Cups09.jpg",
    "/cards/Cups10.jpg",
    "/cards/Cups11.jpg",
    "/cards/Cups12.jpg",
    "/cards/Cups13.jpg",
    "/cards/Cups14.jpg",
    "/cards/Pents01.jpg",
    "/cards/Pents02.jpg",
    "/cards/Pents03.jpg",
    "/cards/Pents04.jpg",
    "/cards/Pents05.jpg",
    "/cards/Pents06.jpg",
    "/cards/Pents07.jpg",
    "/cards/Pents08.jpg",
    "/cards/Pents09.jpg",
    "/cards/Pents10.jpg",
    "/cards/Pents11.jpg",
    "/cards/Pents12.jpg",
    "/cards/Pents13.jpg",
    "/cards/Pents14.jpg",
    "/cards/Swords01.jpg",
    "/cards/Swords02.jpg",
    "/cards/Swords03.jpg",
    "/cards/Swords04.jpg",
    "/cards/Swords05.jpg",
    "/cards/Swords06.jpg",
    "/cards/Swords07.jpg",
    "/cards/Swords08.jpg",
    "/cards/Swords09.jpg",
    "/cards/Swords10.jpg",
    "/cards/Swords11.jpg",
    "/cards/Swords12.jpg",
    "/cards/Swords13.jpg",
    "/cards/Swords14.jpg",
    "/cards/Wands01.jpg",
    "/cards/Wands02.jpg",
    "/cards/Wands03.jpg",
    "/cards/Wands04.jpg",
    "/cards/Wands05.jpg",
    "/cards/Wands06.jpg",
    "/cards/Wands07.jpg",
    "/cards/Wands08.jpg",
    "/cards/Wands09.jpg",
    "/cards/Wands10.jpg",
    "/cards/Wands11.jpg",
    "/cards/Wands12.jpg",
    "/cards/Wands13.jpg",
    "/cards/Wands14.jpg",
]

function App() {
    const [cardsDrawn, setCardsDrawn] = useState([]);

    console.log(cardsDrawn); // invoked on rerender

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function handleDraw() {
        if (cardsDrawn.length === 3) {
            return;
        }

        let random;
        do {
            random = getRandomInt(0, urls.length - 1);
        } while (cardsDrawn.includes(urls[random]));
        setCardsDrawn([...cardsDrawn, urls[random]]);
    }

    function handleReset() {
        setCardsDrawn([]);
    }

    return (
        <div className="card-table">
            <Deck handleDraw={handleDraw} />
            <div className='btn' id='btn-reset' onClick={handleReset}>
                <button >RESET</button>
            </div>
        </div>
    );
};

const container = document.getElementById("root")
const root = createRoot(container)
root.render(React.createElement(App))
