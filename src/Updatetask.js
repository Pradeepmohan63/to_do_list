import React,{useState,useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import{useSelector,useDispatch} from 'react-redux';

import { updateTaskInList } from "./Taskslice";


const  MyVerticallyCenteredModal=(props)=>{

  const{selectedTask}=useSelector((state)=>state.tasks)

    const [name,setName]= useState("")
 const [description,SetDescrip]=useState("")
 const [id,setId]=useState(0)
 


const dispatch=useDispatch()

 const updateTask=()=>{
    props.onHide()
    dispatch(updateTaskInList({id,name,description}))

    // console.log(name,description)
 }
 useEffect(()=>{
     if(Object.keys(selectedTask).length !==0){
     setName(selectedTask.name)
         SetDescrip(selectedTask.description)
         setId(selectedTask.id)
       
   }
    
},[selectedTask])

    return(
        <div>
            <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Task 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <section className="my-4">
    <Form>
     


      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Enter your changes </Form.Label>
        <Form.Control type="text" placeholder="Enter Product Name"

        value={description}
           onChange={(e)=>SetDescrip(e.target.value)}  />
      </Form.Group>

     
    </Form>
    </section>
      </Modal.Body>
      <Modal.Footer>
      <Button variant="primary" type="submit"
      
      onClick={(e)=>updateTask(e)}>
        Update
      </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  </div>

    
    )
}

export default  MyVerticallyCenteredModal ;