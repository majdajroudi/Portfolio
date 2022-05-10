import React from "react"
import "./index.css"

export default function Chip(props) {
    return (
        <span id="chip" >
            {props.content}
        </span>
    )
}