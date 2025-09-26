import { React, useState, useEffect, useRef } from "react";

export function Deck(props) {
    const { handleDraw, cardBack, cards, drawnCards, cardLimit } = props;
    const [isFlipping, setIsFlipping] = useState(false);
    const [nextCard, setNextCard] = useState(cardBack);
    const isAnimating = useRef(false);

    const handleDeckClick = () => {
        // prevent multiple flip animations from starting at once
        // also prevent flip animation the limit of drawn cards has been reached
        if (isAnimating.current || drawnCards.length === cardLimit) return;

        // 1. Select the next card to be revealed
        let randomInt;
        let newCard;
        do {
            randomInt = getRandomIntInRange(0, cards.length - 1);
            newCard = cards[randomInt];
        } while (drawnCards.some(drawnCard => drawnCard.imgUrl === newCard.imgUrl)); // avoid the strict equality check of .includes()

        setNextCard(newCard.imgUrl);

        // 2. Start the flip animation
        isAnimating.current = true;
        setIsFlipping(true);

        // 3. Wait for the flip animation to complete
        setTimeout(() => {
            // 4. Call the parent's handler to draw the card
            handleDraw(newCard);
            isAnimating.current = false;
        }, 600); // The timeout duration should match the CSS transition duration
    };

    // Reset the card face after the flip
    useEffect(() => {
        setIsFlipping(false);
    }, [drawnCards, cardBack]);

    function getRandomIntInRange(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return min + Math.floor(Math.random() * (max - min + 1));
    }

    return (
        <div className="deck" onClick={handleDeckClick}>
            <img className="card-stack" src={cardBack} />

            <div className={`top-card${isFlipping ? " flipped" : ""}`}>
                <div className="card-inner">
                    <div className="card-face card-back">
                        <img src={cardBack} />
                    </div>
                    <div className="card-face card-front">
                        <img src={nextCard} />
                    </div>
                </div>
            </div>
        </div>
    );
}
