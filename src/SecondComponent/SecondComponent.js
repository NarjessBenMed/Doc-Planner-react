import React from 'react'
import './SecondComponent.css'
import  LeftPart from '../leftPartSection2/LeftPart';
import  RightPart from '../rightPartSection2/RightPart';
import * as data from '../allData'; 

export default function SecondComponent() {
    return (
        <div className="secondSection">
            
             <LeftPart tabLeftPart={data.tab_S2LeftPart} />
             <RightPart tabRBoxes={data.TabWhiteBox} />


        </div>
    )
}
