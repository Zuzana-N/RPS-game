import React from "react";

export default function Footer() {
    const [show, setShow] = React.useState(false)
    const showRules = () => {
       setShow(prevShow => !prevShow)
    }
    // SVGs for rock-paper-scissors icons
    const r = <svg className="icon-rps"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M144 0C117.5 0 96 21.5 96 48V96v28.5V176c0 8.8-7.2 16-16 16s-16-7.2-16-16V149.3l-9 7.5C40.4 169 32 187 32 206V244c0 38 16.9 74 46.1 98.3L128 384v96c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V374.7c46.9-19 80-65 80-118.7V176 160 144c0-26.5-21.5-48-48-48c-12.4 0-23.6 4.7-32.1 12.3C350 83.5 329.3 64 304 64c-12.4 0-23.6 4.7-32.1 12.3C270 51.5 249.3 32 224 32c-12.4 0-23.6 4.7-32.1 12.3C190 19.5 169.3 0 144 0z"/></svg>
    const s = <svg className="icon-rps svg-scissors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M40 208c-22.1 0-40 17.9-40 40s17.9 40 40 40l180.2 0c-7.6 8.5-12.2 19.7-12.2 32c0 25.3 19.5 46 44.3 47.9c-7.7 8.5-12.3 19.8-12.3 32.1c0 26.5 21.5 48 48 48l32 0 64 0c70.7 0 128-57.3 128-128l0-113.1c0-40.2-16-78.8-44.4-107.3C444.8 76.8 413.9 64 381.7 64L336 64c-21.3 0-39.3 13.9-45.6 33.1l74.5 23.7c8.4 2.7 13.1 11.7 10.4 20.1s-11.7 13.1-20.1 10.4L288 129.9l0 .1L84 65.8C62.9 59.2 40.5 70.9 33.8 92s5.1 43.5 26.2 50.2L269.5 208 40 208z"/></svg>
    const p = <svg className="icon-rps" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V336c0 1.5 0 3.1 .1 4.6L67.6 283c-16-15.2-41.3-14.6-56.6 1.4s-14.6 41.3 1.4 56.6L124.8 448c43.1 41.1 100.4 64 160 64H304c97.2 0 176-78.8 176-176V128c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V32z"/></svg>
    return (
        <footer>
            <div className="ftr-btns">
                <div className={show ? "popup" : "popup hide"} id="rules">
                    <p>Paper {p} beats Rock {r}.</p> <p>Rock {r} crushes Scissors {s}.</p> <p>Scissors {s} cut Paper {p}.</p> <br></br>
                    <p>In each round, select one of the options and then you’ll see what your opponent chose and who wins. </p><br></br>
                    <p>The score is tracked on the top of the page. Play for as long as you like.</p>
                </div>
                <button className="secondary-btn" onClick={showRules}>{show ? "CLOSE": "RULES"}</button>
            </div>
            <p className="copyright">
            Copyright 2023, <a href="https://www.zuzana-n.cz">Zuzana Náprstková</a>
            </p>
        </footer>
    )
}