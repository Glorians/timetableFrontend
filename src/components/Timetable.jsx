import React from "react";
import Day from "./Day";
import "../styles/Timetable.css"
import "../styles/main.css"
import Header from "./Header";

export default function Timetable() {
    return (
        <section className="mainBoxTimetable wrapper">
            <Header/>
            <ul className="boxTimetable">
                <Day name="Понеділок"/>
                <Day name="Вівторок"/>
                <Day name="Середа"/>
                <Day name="Четверг"/>
                <Day name="Пятниця"/>
            </ul>
        </section>

    )
}