import React from "react";
import "../styles/Header.css"

export default function Header() {
    return (
        <header>
            <div className="mainBoxHeader">
                <button>Вихід</button>
                <h1>Timetable</h1>
                <h3>БЧКІск1-20 [A]</h3>
            </div>
            <span className="lineHeader"/>
        </header>
    )
}