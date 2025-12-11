import { useState, useEffect, useRef } from "react";
import type { Card } from "./App.tsx";

const CARD_FLIP_TIME_IN_MS = 400;
const CARD_MOVE_TIME_IN_MS = 600;
const POST_REVEAL_DELAY_IN_MS = 200;

type DeckProps = {
    handleDraw: (card: Card) => void,
    cardBack: string,
    cards: Card[],
    drawnCards: Card[],
    cardLimit: number,
}

export function Deck(props: DeckProps) {
  const { handleDraw, cardBack, cards, drawnCards, cardLimit } = props;
  /* separate reveal and leaving states to finely control animations */
  const [isRevealed, setIsRevealed] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const [nextCard, setNextCard] = useState(cardBack);
  const isAnimating = useRef(false);

  const handleDeckClick = () => {
    // prevent multiple reveal animations from starting at once
    // also prevent reveal animation when card draw limit reached
    if (isAnimating.current || drawnCards.length === cardLimit) return;

    // select the next card to be revealed
    let randomInt: number;
    let newCard: Card;

    do {
      randomInt = getRandomIntInRange(0, cards.length - 1);
      if (cards[randomInt] === undefined) {
          throw new Error(`Cards[${randomInt}] is undefined.`);
      }
      newCard = cards[randomInt]!;
    } while (
      drawnCards.some((drawnCard: Card) => drawnCard.imgUrl === newCard.imgUrl)
    );

    setNextCard(newCard.imgUrl);

    // start the reveal animation
    isAnimating.current = true;
    setIsRevealed(true);

    // start the disappearing animation once reveal is done
    setTimeout(() => {
      setIsLeaving(true);
    }, CARD_FLIP_TIME_IN_MS + POST_REVEAL_DELAY_IN_MS);

    // reset for the next draw
    setTimeout(() => {
      setIsRevealed(false);
    }, CARD_MOVE_TIME_IN_MS);

    setTimeout(
      () => {
        handleDraw(newCard);
        setIsLeaving(false);
        isAnimating.current = false;
      },
      CARD_FLIP_TIME_IN_MS + POST_REVEAL_DELAY_IN_MS + CARD_MOVE_TIME_IN_MS,
    );
  };

  useEffect(() => {
    setNextCard(cardBack);
  }, [drawnCards, cardBack]);

  function getRandomIntInRange(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return min + Math.floor(Math.random() * (max - min + 1));
  }

  return (
    <div className="deck" onClick={handleDeckClick}>
      <img className="card card-stack" src={cardBack} />
      <div
        className={`card card-clickable top-card
                    ${isRevealed ? " revealed" : ""}
                    ${isLeaving ? " leaving" : ""}
                    `}
      >
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
