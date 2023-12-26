import React from "react";
import { useSelector } from "react-redux";

function Header(){
    const {taskList}=useSelector((state)=>state.tasks)
    
    return(
        <div className="col">
            <h1 className="text-success">Task Management</h1>
            <h3>Task-Details</h3>
        </div>
    )
}


export default Header;