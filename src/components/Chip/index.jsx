import React from "react"
import "./index.css"

export default function Chip({ content, backgroundColor = "#488fb5" }) {
    return (
        <span id="chip" style={{ backgroundColor: backgroundColor }}>
            {content}
        </span>
    )
}