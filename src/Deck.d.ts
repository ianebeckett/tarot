import type { Card } from "./cards.js";
type DeckProps = {
    handleDraw: (card: Card) => void;
    cardBack: string;
    cards: Card[];
    drawnCards: Card[];
    cardLimit: number;
};
export declare function Deck(props: DeckProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Deck.d.ts.map