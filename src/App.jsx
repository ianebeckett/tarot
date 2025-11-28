import { useState } from "react";
import { createRoot } from "react-dom/client";
import { Deck } from "./Deck";

const cardLimit = 3;
const cardBack = "/cards/00_Reverse.webp";

function App() {
  const [drawnCards, setDrawnCards] = useState([]);

  console.log(drawnCards); // invoked on rerender

  // handleDraw is responsible for adding cards to the list of drawn cards.
  const handleDraw = (newCard) => {
    if (drawnCards.length === cardLimit) return;
    setDrawnCards([...drawnCards, newCard]);
  };

  const handleReset = () => {
    if (drawnCards.length) {
      setDrawnCards([]);
    }
  };

  return (
    <div>
      <div className="row">
        <Deck
          handleDraw={handleDraw}
          cardBack={cardBack}
          cards={cards}
          drawnCards={drawnCards}
          cardLimit={cardLimit}
        />
        {drawnCards.map((card) => (
          <div className="card-container" key={card.imgUrl}>
            <img className="card card-clickable" src={card.imgUrl} />
          </div>
        ))}
      </div>
      <div className="row">
        <button id="btn-reset" onClick={handleReset}>
          RESET
        </button>
      </div>
    </div>
  );
}

/*
 * The suits of the minor arcana are ordered according to qabalistic
 * philosophy of the elements and their association - according to the
 * Golden Dawn - to each suit:
 * fire, water, air, earth ->
 * Wands, Cups, Swords, Pentacles
 * */
const cards = [
  {
    description:
      "The Fool (0): Represents new beginnings, spontaneity, and adventure. The cliff symbolizes taking risks, while the dog signifies loyalty and instinct.",
    imgUrl: "/cards/00_Fool.webp",
  },
  {
    description:
      "The Magician (I): Symbolizes manifestation, resourcefulness, and power. The tools on the table represent the four elements and the ability to harness them.",
    imgUrl: "/cards/01_Magician.webp",
  },
  {
    description:
      "The High Priestess (II): Represents intuition, mystery, and the subconscious. The moon and the pomegranates symbolize hidden knowledge and potential.",
    imgUrl: "/cards/02_High_Priestess.webp",
  },
  {
    description:
      "The Empress (III): Embodies fertility, abundance, and nurturing. The lush nature indicates growth, while her crown represents the connection to the divine.",
    imgUrl: "/cards/03_Empress.webp",
  },
  {
    description:
      "The Emperor (IV): Symbolizes authority, structure, and control. The throne and the ram's heads reflect stability and leadership.",
    imgUrl: "/cards/04_Emperor.webp",
  },
  {
    description:
      "The Hierophant (V): Represents tradition, spirituality, and conformity. The keys symbolize knowledge, while the two figures represent followers seeking guidance.",
    imgUrl: "/cards/05_Hierophant.webp",
  },
  {
    description:
      "The Lovers (VI): Symbolizes love, harmony, and choices. The angel above represents divine connection, while the figures show the balance of duality.",
    imgUrl: "/cards/06_Lovers.webp",
  },
  {
    description:
      "The Chariot (VII): Represents determination, willpower, and triumph. The sphinxes symbolize opposing forces, and the chariot’s movement indicates control.",
    imgUrl: "/cards/07_Chariot.webp",
  },
  {
    description:
      "Strength (VIII): Embodies courage, inner strength, and compassion. The lion represents raw power, tamed by gentle influence.",
    imgUrl: "/cards/08_Strength.webp",
  },
  {
    description:
      "The Hermit (IX): Symbolizes introspection, solitude, and inner guidance. The lantern represents enlightenment found through self-reflection.",
    imgUrl: "/cards/09_Hermit.webp",
  },
  {
    description:
      "Wheel of Fortune (X): Represents cycles, fate, and change. The wheel signifies the ups and downs of life, while the creatures around it symbolize various forces at play.",
    imgUrl: "/cards/10_Wheel_of_Fortune.webp",
  },
  {
    description:
      "Justice (XI): Embodies fairness, truth, and law. The scales represent balance, while the sword signifies the power of reason and decision.",
    imgUrl: "/cards/11_Justice.webp",
  },
  {
    description:
      "The Hanged Man (XII): Symbolizes sacrifice, perspective, and letting go. The inverted position indicates a new way of seeing things.",
    imgUrl: "/cards/12_Hanged_Man.webp",
  },
  {
    description:
      "Death (XIII): Represents transformation, endings, and new beginnings. The skeleton signifies the cycle of life and the inevitability of change.",
    imgUrl: "/cards/13_Death.webp",
  },
  {
    description:
      "Temperance (XIV): Symbolizes balance, moderation, and harmony. The blending of liquids represents integration and finding the middle path.",
    imgUrl: "/cards/14_Temperance.webp",
  },
  {
    description:
      "The Devil (XV): Embodies temptation, materialism, and bondage. The chained figures represent addiction or unhealthy attachments.",
    imgUrl: "/cards/15_Devil.webp",
  },
  {
    description:
      "The Tower (XVI): Symbolizes sudden change, upheaval, and revelation. The lightning strike represents enlightenment through destruction.",
    imgUrl: "/cards/16_Tower.webp",
  },
  {
    description:
      "The Star (XVII): Represents hope, inspiration, and serenity. The stars symbolize guidance, while the water indicates emotional healing.",
    imgUrl: "/cards/17_Star.webp",
  },
  {
    description:
      "The Moon (XVIII): Embodies illusion, intuition, and the subconscious. The path represents the journey through the unknown, while the creatures symbolize fears.",
    imgUrl: "/cards/18_Moon.webp",
  },
  {
    description:
      "The Sun (XIX): Symbolizes joy, success, and vitality. The sun represents positivity, while the child signifies innocence and new beginnings.",
    imgUrl: "/cards/19_Sun.webp",
  },
  {
    description:
      "Judgment (XX): Represents renewal, reflection, and awakening. The figures rising from graves indicate rebirth and self-evaluation.",
    imgUrl: "/cards/20_Judgement.webp",
  },
  {
    description:
      "The World (XXI): Symbolizes completion, achievement, and unity. The laurel wreath signifies success, and the four creatures represent the elements.",
    imgUrl: "/cards/21_World.webp",
  },
  {
    description:
      "Ace of Wands: Represents inspiration and new opportunities. The wand symbolizes potential.",
    imgUrl: "/cards/Wands01.webp",
  },
  {
    description:
      "Two of Wands: Signifies planning and decision-making. The globe indicates exploration.",
    imgUrl: "/cards/Wands02.webp",
  },
  {
    description:
      "Three of Wands: Represents foresight and expansion. The ships symbolize opportunities.",
    imgUrl: "/cards/Wands03.webp",
  },
  {
    description:
      "Four of Wands: Symbolizes celebration and harmony. The garland indicates community and stability.",
    imgUrl: "/cards/Wands04.webp",
  },
  {
    description:
      "Five of Wands: Represents conflict and competition. The wands indicate struggles and challenges.",
    imgUrl: "/cards/Wands05.webp",
  },
  {
    description:
      "Six of Wands: Symbolizes victory and recognition. The laurel crown signifies achievement.",
    imgUrl: "/cards/Wands06.webp",
  },
  {
    description:
      "Seven of Wands: Represents defense and perseverance. The figure stands strong against competition.",
    imgUrl: "/cards/Wands07.webp",
  },
  {
    description:
      "Eight of Wands: Symbolizes speed and action. The wands indicate rapid movement.",
    imgUrl: "/cards/Wands08.webp",
  },
  {
    description:
      "Nine of Wands: Represents resilience and persistence. The bandaged figure symbolizes determination.",
    imgUrl: "/cards/Wands09.webp",
  },
  {
    description:
      "Ten of Wands: Symbolizes burdens and responsibilities. The heavy load indicates feeling overwhelmed.",
    imgUrl: "/cards/Wands10.webp",
  },
  {
    description:
      "Page of Wands: Represents enthusiasm and exploration. The wand indicates a quest for knowledge.",
    imgUrl: "/cards/Wands11.webp",
  },
  {
    description:
      "Knight of Wands: Embodies adventure and impulsiveness. The horse signifies action and movement.",
    imgUrl: "/cards/Wands12.webp",
  },
  {
    description:
      "Queen of Wands: Represents confidence and charisma. The sunflower symbolizes warmth and vitality.",
    imgUrl: "/cards/Wands13.webp",
  },
  {
    description:
      "King of Wands: Embodies leadership and vision. The salamander signifies transformation and creativity.",
    imgUrl: "/cards/Wands14.webp",
  },
  {
    description:
      "Ace of Cups: Represents new emotions and love. The overflowing cup symbolizes abundance.",
    imgUrl: "/cards/Cups01.webp",
  },
  {
    description:
      "Two of Cups: Symbolizes partnership and connection. The cups indicate mutual attraction.",
    imgUrl: "/cards/Cups02.webp",
  },
  {
    description:
      "Three of Cups: Represents celebration and friendship. The figures symbolize community and joy.",
    imgUrl: "/cards/Cups03.webp",
  },
  {
    description:
      "Four of Cups: Signifies contemplation and reevaluation. The figure looks at three cups while ignoring a fourth.",
    imgUrl: "/cards/Cups04.webp",
  },
  {
    description:
      "Five of Cups: Represents loss and regret. The spilled cups symbolize missed opportunities.",
    imgUrl: "/cards/Cups05.webp",
  },
  {
    description:
      "Six of Cups: Embodies nostalgia and childhood memories. The flowers symbolize innocence and joy.",
    imgUrl: "/cards/Cups06.webp",
  },
  {
    description:
      "Seven of Cups: Symbolizes choices and fantasies. The cups represent various options and illusions.",
    imgUrl: "/cards/Cups07.webp",
  },
  {
    description:
      "Eight of Cups: Represents leaving behind what no longer serves. The figure walks away from the cups.",
    imgUrl: "/cards/Cups08.webp",
  },
  {
    description:
      "Nine of Cups: Symbolizes contentment and wishes fulfilled. The figure’s satisfaction indicates emotional fulfillment.",
    imgUrl: "/cards/Cups09.webp",
  },
  {
    description:
      "Ten of Cups: Represents harmony and family. The rainbow symbolizes happiness and completion.",
    imgUrl: "/cards/Cups10.webp",
  },
  {
    description:
      "Page of Cups: Embodies creativity and emotional exploration. The fish symbolizes new ideas.",
    imgUrl: "/cards/Cups11.webp",
  },
  {
    description:
      "Knight of Cups: Represents romance and idealism. The horse signifies pursuit of dreams.",
    imgUrl: "/cards/Cups12.webp",
  },
  {
    description:
      "Queen of Cups: Symbolizes compassion and intuition. The cup indicates emotional depth.",
    imgUrl: "/cards/Cups13.webp",
  },
  {
    description:
      "King of Cups: Embodies emotional balance and maturity. The throne indicates authority over feelings.",
    imgUrl: "/cards/Cups14.webp",
  },
  {
    description:
      "Ace of Swords: Represents clarity and new ideas. The sword symbolizes truth and justice.",
    imgUrl: "/cards/Swords01.webp",
  },
  {
    description:
      "Two of Swords: Signifies indecision and choices. The blindfolded figure indicates uncertainty.",
    imgUrl: "/cards/Swords02.webp",
  },
  {
    description:
      "Three of Swords: Represents heartbreak and sorrow. The three swords symbolize emotional pain.",
    imgUrl: "/cards/Swords03.webp",
  },
  {
    description:
      "Four of Swords: Embodies rest and recuperation. The figure indicates the need for recovery.",
    imgUrl: "/cards/Swords04.webp",
  },
  {
    description:
      "Five of Swords: Represents conflict and defeat. The swords indicate a hollow victory.",
    imgUrl: "/cards/Swords05.webp",
  },
  {
    description:
      "Six of Swords: Symbolizes transition and movement. The boat represents leaving difficulties behind.",
    imgUrl: "/cards/Swords06.webp",
  },
  {
    description:
      "Seven of Swords: Represents strategy and deception. The figure sneaks away with swords.",
    imgUrl: "/cards/Swords07.webp",
  },
  {
    description:
      "Eight of Swords: Signifies feeling trapped and restricted. The blindfold symbolizes self-imposed limitations.",
    imgUrl: "/cards/Swords08.webp",
  },
  {
    description:
      "Nine of Swords: Represents anxiety and nightmares. The figure symbolizes fear and mental distress.",
    imgUrl: "/cards/Swords09.webp",
  },
  {
    description:
      "Ten of Swords: Embodies betrayal and endings. The ten swords in the figure indicate complete defeat.",
    imgUrl: "/cards/Swords10.webp",
  },
  {
    description:
      "Page of Swords: Represents curiosity and vigilance. The figure holds the sword ready for action.",
    imgUrl: "/cards/Swords11.webp",
  },
  {
    description:
      "Knight of Swords: Symbolizes action and haste. The charging horse indicates urgency.",
    imgUrl: "/cards/Swords12.webp",
  },
  {
    description:
      "Queen of Swords: Embodies independence and intellect. The sword signifies clear communication.",
    imgUrl: "/cards/Swords13.webp",
  },
  {
    description:
      "King of Swords: Represents authority and truth. The throne symbolizes logical leadership.",
    imgUrl: "/cards/Swords14.webp",
  },
  {
    description:
      "Ace of Pentacles: Represents new financial opportunities and material success. The coin symbolizes prosperity.",
    imgUrl: "/cards/Pents01.webp",
  },
  {
    description:
      "Two of Pentacles: Signifies balance and adaptability. The figure juggles two coins, indicating multitasking.",
    imgUrl: "/cards/Pents02.webp",
  },
  {
    description:
      "Three of Pentacles: Embodies teamwork and collaboration. The figures represent skilled work and recognition.",
    imgUrl: "/cards/Pents03.webp",
  },
  {
    description:
      "Four of Pentacles: Represents control and possessiveness. The figure clutches coins tightly.",
    imgUrl: "/cards/Pents04.webp",
  },
  {
    description:
      "Five of Pentacles: Symbolizes hardship and loss. The figures outside the church indicate feeling excluded.",
    imgUrl: "/cards/Pents05.webp",
  },
  {
    description:
      "Six of Pentacles: Represents generosity and sharing. The scales symbolize balance in giving and receiving.",
    imgUrl: "/cards/Pents06.webp",
  },
  {
    description:
      "Seven of Pentacles: Embodies patience and reflection. The figure examines the fruits of labor.",
    imgUrl: "/cards/Pents07.webp",
  },
  {
    description:
      "Eight of Pentacles: Signifies skill development and hard work. The coins represent mastery through dedication.",
    imgUrl: "/cards/Pents08.webp",
  },
  {
    description:
      "Nine of Pentacles: Represents independence and self-sufficiency. The figure enjoys the fruits of her labor.",
    imgUrl: "/cards/Pents09.webp",
  },
  {
    description:
      "Ten of Pentacles: Symbolizes wealth, legacy, and family. The structure indicates long-term success.",
    imgUrl: "/cards/Pents10.webp",
  },
  {
    description:
      "Page of Pentacles: Represents ambition and practicality. The coin symbolizes new ventures.",
    imgUrl: "/cards/Pents11.webp",
  },
  {
    description:
      "Knight of Pentacles: Embodies reliability and hard work. The steady horse signifies determination.",
    imgUrl: "/cards/Pents12.webp",
  },
  {
    description:
      "Queen of Pentacles: Represents nurturing and practicality. The rabbit symbolizes fertility and abundance.",
    imgUrl: "/cards/Pents13.webp",
  },
  {
    description:
      "King of Pentacles: Embodies stability and security. The throne represents authority in material matters.",
    imgUrl: "/cards/Pents14.webp",
  },
];

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
