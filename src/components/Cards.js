import React,{useState} from "react";
import TodoList from "./todolist";
import EditTaskPopup from "../modals/EditTask";
import { Modal } from "reactstrap";

const Card = (taskObj,index,deleteTask,updateListArray) => {
  const [modal,setModal] = useState(false);
    const colors = [
        { 
            primaryColor : "#5D93E1",  
            secondaryColor  : "#ECF3FC"
    },
    { 
        primaryColor : "#F9D288",  
        secondaryColor  : "#FEFAF1"
},
{ 
    primaryColor : "#5DC250",  
    secondaryColor  : "#F2FAF1"
},
{ 
    primaryColor : "#F48687",  
    secondaryColor  : "#FDF1F1"
},
{ 
    primaryColor : "#B964E7",  
    secondaryColor  : "#F3F0FD"
}
     
]
const handleDelete = () => {
deleteTask(index)
}
const toggle = () =>{
  setModal(!Modal)
}
const updateTask = () => {
  updateListArray(Obj,index )
}


  return (
    <div className="Card-wrapper mr-5">
      <div className="card-top" style={{ "backgroundColor": colors[index%5].primaryColor }}></div>
      <div className="task-holder">
        <span
          className="card-header"
          style={{ "backgroundColor": colors[index%5].secondaryColor, "borderRadius": "10px" }}>{taskObj.name}
        </span>
        <p className="mt-3">{taskObj.Description}</p>

        <div style={{ "position": "absolute"," right": "20px", "buttom": "20px" }}>
          <i className="far fa-edit mr-3" style={{ "color": colors[index%5].primaryColor,"cursor" : "pointer" }} onClick={() =>setModal(true)}></i>
          <i className="fas fa-trash-alt" style={{"color" : colors[index%5].primaryColor,"cursor" : "pointer"}} onClick={handleDelete}></i>
        </div>
      </div>
      <EditTaskPopup modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj}  />
    </div>
  );
  }

export default Card;
