import React from "react";

export default function Score(props) {
    return (
        <section className="score">
            <div className="game-name"><h1>ROCK PAPER SCISSORS</h1></div>
            <div className="score-field">
                <h2>SCORE</h2>
                <div className="score-text"><p>YOU</p><p>COMP</p></div>
                <p className="score-count">{props.scoreUser} : {props.scorePC}</p>
            </div>
        </section>
    )
}