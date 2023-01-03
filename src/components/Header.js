import React from "react"

export default function Header({darkMode, handleToggleDarkMode}) {
    return (
        <div className="header">
            <h1>Notes</h1>
            <button
                onClick={() =>
                    handleToggleDarkMode(
                        (prevDarkMode) => !prevDarkMode
                    )
                }
                className={`save${darkMode ? "dark" : ""}`}
            >
                {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
        </div>
    )
}
