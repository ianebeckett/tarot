import React from "react";
import { createRoot } from "react-dom/client";

const Card = (props) => {
  return React.createElement(
    "div",
    {
      class: "card",
    },
    [
      React.createElement(
        "img",
        {
          src: props.src,
        },
        null,
      ),
    ],
  );
};

const App = () => {
  return (
    React.createElement("div"),
    {},
    [
      React.createElement("h1", {}, "Tarot Reading"),
      React.createElement("div", { class: "reading-table" }, [
        React.createElement(
          Card,
          { src: "../images/cards/512px-CardBack.jpg" },
          null,
        ),
        React.createElement(
          Card,
          { src: "../images/cards/512px-Swords07.jpg" },
          null,
        ),
        React.createElement(
          Card,
          { src: "../images/cards/512px-Swords08.jpg" },
          null,
        ),
        React.createElement(
          Card,
          { src: "../images/cards/512px-RWS_Tarot_21_World.jpg" },
          null,
        ),
      ]),
    ]
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
