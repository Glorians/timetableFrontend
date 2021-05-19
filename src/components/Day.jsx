import React from "react";
import Subject from "./Subject";
import "../styles/Day.css"
import subjects from "../data"

export default function Day(props) {
    return (
        <div className="mainBoxDay">
            <h4 className="headerDay">{props.name}</h4>
            <ul>
                <Subject subject={subjects}/>
                <Subject subject={subjects}/>
                <Subject subject={subjects}/>
                <Subject subject={subjects}/>
                <Subject subject={subjects}/>
            </ul>
        </div>
    )
}