import React from 'react'
import './NavMenu.css'


export default function NavMenu(props) {
    return (
        <div className="navBar">
            <ul className="links_navBar">
             {props.links.map((el, i) => { return  <li key={i}> <a href={el.address}> {el.title} </a>
                 
                {  (el.SubMenu) && 
                
            <ul className="subMenu">  
                      { el.SubMenu.map ((elm,j) => {return <li key={j}>  <a> {elm}  </a>  </li>})}

             </ul>
                
                
                }
                     
                 
                  </li>
                 
    })}

            </ul>
     

        </div>
    )
}
