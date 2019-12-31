import React from 'react'
import './LogoHeader.css'

export default function LogoHeader(props) {
    return ( 
        <img  src= {props.src} height={props.height} width={props.width}/>
    )
}
