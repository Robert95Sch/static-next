import React, { useState } from "react";

import Header from '../Header'
import AcousticGuitar from "./HighlightSections/AcousticGuitar.jsx";
import BassGuitar from "./HighlightSections/BassGuitar.jsx";
import ElectricGuitar from "./HighlightSections/ElectricGuitar.jsx";

function Highlights() {
    const [activeComponent, setActiveComponent] = useState("ComponentA");

    const handleButtonClick = (componentName) => {
        setActiveComponent(componentName);
    };

    return (
        <div className="component" data-scroll-section id="pricing">
            <Header
                title="What We Offer"
            />
            <div>
                <div className="button-container">
                    <button
                        className={`${activeComponent === "ComponentA" ? "active" : ""}`}
                        onClick={() => handleButtonClick("ComponentA")}
                    >
                        AcousticGuitar
                    </button>
                    <button
                        className={`${activeComponent === "ComponentB" ? "active" : ""}`}
                        onClick={() => handleButtonClick("ComponentB")}
                    >
                        BassGuitar
                    </button>
                    <button
                        className={`${activeComponent === "ComponentC" ? "active" : ""}`}
                        onClick={() => handleButtonClick("ComponentC")}
                    >
                        ElectricGuitar
                    </button>
                </div>
                <div className={`fade ${activeComponent}`}>
                    {activeComponent === "ComponentA" ? (
                        <AcousticGuitar />
                    ) : activeComponent === "ComponentB" ? (
                        <BassGuitar />
                    ) : (
                        <ElectricGuitar />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Highlights