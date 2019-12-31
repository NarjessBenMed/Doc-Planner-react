import React from 'react'
import * as data from '../allData'
import LogoHeader from '../logoHeader/LogoHeader'
import NavMenu from '../navBar/NavMenu'
import './HeaderComponent.css'

export default function HeaderComponent() {
    return (
        <div>
            
            <div className="DPheader">

<LogoHeader src={data.LogoHeader.src} height={data.LogoHeader.height} width={data.LogoHeader.width} alt={data.LogoHeader.alt}/>
<NavMenu  links={data.tab} />
</div>




        </div>
    )
}
