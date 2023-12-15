import { useState } from "react";
import "./CustomDropdownStyles.css"

export default function CustomDropdown({}){

    const [ open , setOpen ] = useState(false)
    const [ items, setItems ] = useState(["My Courses", "My Preferences", "My Schedule", "My Portfolio"])

    return(
        <div className="dropdown-container">
            <div className="dropdown-button" onClick={()=>{setOpen(!open)}}>
                User Profile Account
            </div>
            {open && 
                <div className="dropdown-items">
                    {items.map((item)=>{
                        return(
                            <div className="dropdown-item">
                                {item}
                            </div>

                        )})
                    }  
                </div>
            }    
            
             
            
                
        </div>
    )
}