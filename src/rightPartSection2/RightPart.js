import React from 'react'
import WhiteBox from '../whiteBox/WhiteBox'
import './RightPart.css'




export default function RightPart(props) {
    return (
        <div className="second_section_right_part">
            { props.tabRBoxes.map ((el, i)=> <WhiteBox WBox={el} /> )
            
            }
      
        </div>
    )
}
