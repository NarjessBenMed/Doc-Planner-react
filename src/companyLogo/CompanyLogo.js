import React from 'react'
import './CompanyLogo.css'

export default function CompanyLogo(props) {
    return (
        <div className="LastDivFirstSection">

            <h2 className="GlobalCompany">   {props.tabCountry.H_1}            </h2>
              
            <div className="LogoCompany">  
                
                 { props.tabCountry.list.map((el,i )=> { return <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 32">
    <path d={el}> </path></svg></a> }) } 
                
                
                     </div>
        

        </div>
    )
}




