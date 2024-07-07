import getCards from "./getCards";

const Card = (props) => {
    // I want to create a new random card whenever I click the "draw" button
    return (
        <div className="card">
            <img src={props.art} />
        </div>
    );
};

export default Card;
