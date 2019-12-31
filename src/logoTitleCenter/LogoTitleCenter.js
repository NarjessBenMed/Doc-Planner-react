import React from 'react'
import LogoHeader from '../logoHeader/LogoHeader'
import * as data  from '../allData'
import './LogoTitleCenter.css'

export default function logoTitleCenter() {
    return (
        <div  className="CentrLogoTitle">

        
           {  <LogoHeader src={data.smallLogo.src}  height={data.smallLogo.height} width={data.smallLogo.width} alt={data.smallLogo.alt} />  }
         
            <h1> Making the healthcare experience more human </h1>
        </div>
    )
}

