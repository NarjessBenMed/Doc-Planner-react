import React from 'react'
import './Office.css'


export default function Offices(props) {
    return (
        <div> 
         <a className="officeByCountry">
         < img src={props.off.src} />
         <div className="office_seeMore">
         <span className="office"> { props.off.offic} </span>
         <span className="see_more">  {props.off.seeM}  </span>
         </div>

        </a>
        

            
        </div>
    )
}
