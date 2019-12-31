import React from 'react'
import './CenterParagraphs.css'

export default function CenterParagraphs(props) {
    return (
        <div className="CenterP">
             <h1> { props.centerParagraph.H_1 }  </h1>
             <p>  { props.centerParagraph.P}    </p>
        </div>
    )
}
