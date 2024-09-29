import React from "react"
import { createRoot } from "react-dom/client"
import { Deck } from "./Deck"

function App() {
    return (
        <div className="card-table">
            <Deck />
            <div className='btn' id='btn-reset' onClick={null}>
                <button >RESET</button>
            </div>
        </div>
    );
};

const container = document.getElementById("root")
const root = createRoot(container)
root.render(React.createElement(App))
