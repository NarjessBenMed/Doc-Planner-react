import React from 'react'
import * as data from '../allData'; 
import  './ThirdComponent.css';
import CenterParagraphs from   './centerParagraphs/CenterParagraphs'
import  Office from './office/Office'



export default function ThirdComponent() {
    return (
        <div className="ThirdSection">
            
            <CenterParagraphs  centerParagraph={data.CenterParag} />
             
             <div className="CatalogOffice">

               {data.tabOffice.map((el, i)=> <Office off={ el } /> )}


            </div> 


        </div>
    )
}
