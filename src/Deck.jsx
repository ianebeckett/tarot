import React from "react";

export function Deck(props) {
    const { handleDraw, cardBack, cards } = props;

    return (
        <div className="deck">
            <img className="deck-cards" src={cardBack} onClick={handleDraw} />
            <img className="deck-top" src={cardBack} onClick={handleDraw} />
        </div>
    )
}
