import React from 'react'
import './DoctorsPatient.css'

export default function DoctorsPatient(props) {
    return (

        <div className="div_boxes">
            
        { props.tabElement.map ((el , i) => {return  <div style={{background:el.tab_Country ? '#00CCB1':'#3D83DF'}}  className="DoctorsPatient">
         <h5  key={i}> {el.H_5}  </h5>
         <h2 key={i}>  {el.H_2}</h2>
        <div className="select_and_img">
         { (el.tab_Country)&&
         
    <select className="country-select select_and_img">
           { el.tab_Country.map ((elm,j) => {return <option key={i}>   {elm}   </option>})}
         
         </select>
        
         }  

         
           <img  className ="imag_doctors"   src={el.src}  />

      </div>
</div>
          }
        
         ) }

        </div>
    )
}

