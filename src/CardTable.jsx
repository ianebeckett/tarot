import { useState } from "react";
import Card from "./Card";

const CardTable = (props) => {
    let cards = [];

    console.log(props);

    props.cards.forEach((cardDrawn) =>
        cards.push(<Card src={cardDrawn} />)
    );

    return (
        <div className="cardTable">
            {cards}
        </div>
    );
};

export default CardTable;
