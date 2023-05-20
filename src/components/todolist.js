import React, { useEffect, useState } from "react";
import CreateTaskPopup from "../modals/createTask";
import Card from "./Cards";

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("taskList");
    if(arr){
      let obj =JSON.parse(arr)
      setTaskList(obj)
    }
  },[])

  const handleDelete = (index) => {
    let templist = taskList
    templist.splice(index,1)
    localStorage.setItem("taskList",JSON.stringify(templist))
    setTaskList(templist)
    window.location.reload()
    

    }
    const updateListArray =(Obj,index) =>{
let templist = taskList
templist[index] = obj
localStorage.setItem("tasklist",JSON.stringify(templist))
setTaskList(templist)
window.location.reload()
    }
  const toggle = () => {
    setModal(!modal);
  };
  const saveTask = (taskObj) => {
    let templist = taskList;
    templist.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(templist));
    setTaskList(templist);
    setModal(false);
    setTaskList(taskList);
  };


  return (
    <>
      <div className="header text-center">
        <h3>Todo List</h3>
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
          create task
        </button>
      </div>
      <div className="task-container">
        {taskList && taskList.map((Obj,index) => 
          <Card taskObj = {Obj} key={index} deleteTask = {deleteTask} updateListArray = {updateListArray}/>
        )}
      </div>
      <CreateTaskPopup toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
};

export default TodoList;
// function Myinputs() {
//   const[inputValue,setlnputValue]=react.useState('');

//   function handleInputschange(event){
//     setlnputValue(event.target.value);
//     }
//     function handleSubmit(event){
//       event.preventDefault();
//       console.log("submitted value:",inputValue);
//     }

//   return(
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="my-input">enter something:</label>
//       <input type ='text' id="my-input" value={inputValue} onChange={handleInputschange} />
//       <button type='submit'>submit</button>
//         </form>
//   )
// }
// export default Myinputs ;
