import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {addTaskToList} from './Taskslice';
import { useDispatch } from "react-redux";


function Add(){

  const dispatch=useDispatch()

  const[name,setName]=useState("");
  const[description,setDescrip]=useState("");

  const addTask=(e)=>{
    e.preventDefault();
    // console.log(name,description);
    dispatch(addTaskToList({name,description}))
    setDescrip("")

  }


    return(
        <div>
     <section className="my-4">
     <Form>


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Task Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Task Name"
        value={description}
       onChange={(e)=>setDescrip(e.target.value)}

        />
      </Form.Group>

      <Button variant="primary" type="submit"
      onClick={(e)=>addTask(e)}

      >
        Submit
      </Button>
    </Form>
     </section>

        </div>
    )
}


export default Add;
 