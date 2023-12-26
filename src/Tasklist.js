import React ,{useState}from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import MyVerticallyCenteredModal from "./Updatetask";
import { LuClipboardEdit } from "react-icons/lu";
import { MdDeleteForever } from "react-icons/md";
import{useSelector,useDispatch} from 'react-redux';
import { setselectedTask,removeTaskFromList,check } from "./Taskslice";

const Tasklist=()=>{

  const{taskList}=useSelector((state)=>state.tasks)
  const dispatch=useDispatch()
    const updateTask=(task)=>{
        console.log("update task")
         setModalShow(true)
         dispatch(setselectedTask(task))
         console.log(task)
    }

    const deleteTask=(task)=>{
         console.log("delete task")
         dispatch(removeTaskFromList(task))

    }
    const [modalShow, setModalShow] = useState(false);


const checkbox=(i)=>{
  let a=taskList&&taskList.map((task,index)=>{
    return task.id===i?  task.check?{...task,check:false}:{...task,check:true}:task
  })
  console.log(a);
  dispatch(check(a))
}


    return(
        <div>


<Table striped bordered hover>
      <thead>
        <tr>
        <th>S.NO</th>
          <th>Status</th>
          <th>Task Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>

        {
          taskList && taskList.map((task,index)=>{
              return( 
              <tr key={task.id}>
                <td>{index+1}</td>
               {
                !task.check?(<>
            <td><input type="checkbox" onClick={()=>checkbox(task.id)} /></td>
                <td>{task.description}</td>

                </>)

                :(<>
               <td> <input type="checkbox" onClick={()=>checkbox(task.id)} checked/></td>
                <td><del>{task.description}</del></td>

                </>)
               }

                <td> 
                <Button variant="success" className="mx-3"

                onClick={()=>updateTask(task)}>
                  <LuClipboardEdit />
                 </Button>


                <Button variant="danger"
                onClick={()=>deleteTask(task)}
                >
                  <MdDeleteForever />
                  </Button>
                </td>
              </tr>
             )
          })
        }


      </tbody>
    </Table>


    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </div>
    )
}
export default Tasklist ;