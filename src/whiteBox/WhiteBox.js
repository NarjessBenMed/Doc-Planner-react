import React from 'react'
import  './WhiteBox.css'
import * as data from '../allData'



export default function WhiteBox(props) {
    return (
        <div className= {props.WBox.marginTop ?"WhiteBox test" : "WhiteBox"}>
        <img src={props.WBox.src} />
        <h4> {props.WBox.H_4}   </h4>
        <p>  {props.WBox.P}   </p>
        </div>
    )
}
