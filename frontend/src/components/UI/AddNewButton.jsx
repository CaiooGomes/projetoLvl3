import React, { useState } from "react";
import './AddNewButton.css'
function AddNewButton() {
    const [mouse,SetMouse]= useState(true)
    return(
        <div 
        onMouseEnter={()=>SetMouse(false)} 
        onMouseLeave={()=>SetMouse(true)}
        className={`${mouse ? "addNewButtom" : "addNewButton-mouse"}`}
        >
            {mouse ? "+" : "Adicionar uma anotação"}
        </div>
    )
}

export default AddNewButton