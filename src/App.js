import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { createRoot } from "react-dom/client";
import { Deck } from "./Deck.js";
import { cards } from "./cards.js";
const cardLimit = 3;
const cardBack = "/cards/00_Reverse.webp";
function App() {
    const [drawnCards, setDrawnCards] = useState([]);
    console.log(drawnCards);
    const handleDraw = (newCard) => {
        if (drawnCards.length === cardLimit)
            return;
        setDrawnCards([...drawnCards, newCard]);
    };
    const handleReset = () => {
        if (drawnCards.length) {
            setDrawnCards([]);
        }
    };
    return (_jsxs("div", { children: [_jsxs("div", { className: "row", children: [_jsx(Deck, { handleDraw: handleDraw, cardBack: cardBack, cards: cards, drawnCards: drawnCards, cardLimit: cardLimit }), drawnCards.map((card) => (_jsx("div", { className: "card-container", children: _jsx("img", { className: "card card-clickable", src: card.imgUrl }) }, card.imgUrl)))] }), _jsx("div", { className: "row", children: _jsx("button", { id: "btn-reset", onClick: handleReset, children: "RESET" }) })] }));
}
const container = document.getElementById("root");
if (container === null) {
    throw new Error("Container is null.");
}
const root = createRoot(container);
root.render(_jsx(App, {}));
//# sourceMappingURL=App.js.map