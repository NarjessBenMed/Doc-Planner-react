import React from 'react'
import './LeftPart.css'
import LogoHeader from '../logoHeader/LogoHeader'

export default function LeftPart(props) {
    return (
        <div className="secondSectionLeftPart">

            {   ( <div className="LF"> <h1>{props.tabLeftPart.H_1}</h1> 
            
              <p>   {props.tabLeftPart.P}  </p>

            <img  className="bigLogo"  src={ props.tabLeftPart.src} />
               
            
            </div>) }
            
        </div>
    )
}

