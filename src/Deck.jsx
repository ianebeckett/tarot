import React from "react";

export function Deck(props) {
    const { handleDraw } = props;
    const reverse = "/cards/00_Reverse.jpg";

    return (
        <div className="deck">
            <img className="deck-cards" src={reverse} />
            <img className="deck-top" src={reverse} onClick={handleDraw} />
        </div>
    )
}

