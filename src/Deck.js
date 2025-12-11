import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
const CARD_FLIP_TIME_IN_MS = 400;
const CARD_MOVE_TIME_IN_MS = 600;
const POST_REVEAL_DELAY_IN_MS = 200;
export function Deck(props) {
    const { handleDraw, cardBack, cards, drawnCards, cardLimit } = props;
    const [isRevealed, setIsRevealed] = useState(false);
    const [isLeaving, setIsLeaving] = useState(false);
    const [nextCard, setNextCard] = useState(cardBack);
    const isAnimating = useRef(false);
    const handleDeckClick = () => {
        if (isAnimating.current || drawnCards.length === cardLimit)
            return;
        let randomInt;
        let newCard;
        do {
            randomInt = getRandomIntInRange(0, cards.length - 1);
            newCard = cards[randomInt];
        } while (drawnCards.some((drawnCard) => drawnCard.imgUrl === newCard.imgUrl));
        setNextCard(newCard.imgUrl);
        isAnimating.current = true;
        setIsRevealed(true);
        setTimeout(() => {
            setIsLeaving(true);
        }, CARD_FLIP_TIME_IN_MS + POST_REVEAL_DELAY_IN_MS);
        setTimeout(() => {
            setIsRevealed(false);
        }, CARD_MOVE_TIME_IN_MS);
        setTimeout(() => {
            handleDraw(newCard);
            setIsLeaving(false);
            isAnimating.current = false;
        }, CARD_FLIP_TIME_IN_MS + POST_REVEAL_DELAY_IN_MS + CARD_MOVE_TIME_IN_MS);
    };
    useEffect(() => {
        setNextCard(cardBack);
    }, [drawnCards, cardBack]);
    function getRandomIntInRange(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return min + Math.floor(Math.random() * (max - min + 1));
    }
    return (_jsxs("div", { className: "deck", onClick: handleDeckClick, children: [_jsx("img", { className: "card card-stack", src: cardBack }), _jsx("div", { className: `card card-clickable top-card
                    ${isRevealed ? " revealed" : ""}
                    ${isLeaving ? " leaving" : ""}
                    `, children: _jsxs("div", { className: "card-inner", children: [_jsx("div", { className: "card-face card-back", children: _jsx("img", { src: cardBack }) }), _jsx("div", { className: "card-face card-front", children: _jsx("img", { src: nextCard }) })] }) })] }));
}
//# sourceMappingURL=Deck.js.map