import React from 'react'
import './Paragraphs.css'

export default function Paragraphs(props) {
    return (
        <div className="Paragraphs">
{props.tab_paragraph.map((el, i) => {return  <p key={i}> {el} </p>}) }
                 
        </div>
    )
}
