import React from "react"

export default function Footer({ darkMode }) {
    // const dark = darkMode ? "dark-mode" : ""
    return (
        <div className={`footer${darkMode ? "dark" : ""}`}>
            <span className="icon">{`<`}{`/`}{`>`}</span>
            <p className="info">
                Developed by <span className="name"> <a href="https://github.com/gjha133" target="_blank" rel="noreferrer" className={`link${darkMode ? "dark" : ""}`}>
                    Gautam Jha
                </a></span>
            </p>
        </div>
    )
}