import React from "react";
import "../styles/reset.css"
import "../styles/Subject.css"

export default function Subject(props) {
    const {subject} = props
    return (
        <div className="mainBoxSubject">
            <span className="lineSubject"/>
            <div className="boxSubject">
                <div className="timeBoxSubject">
                    <h6>{subject.time}</h6>
                </div>
                <div className="nameBoxSubject">
                    <h5>{subject.name}</h5>
                </div>
                <div className="roomBoxSubject">
                    <span>{subject.room}</span>
                </div>
            </div>
        </div>
    )
}