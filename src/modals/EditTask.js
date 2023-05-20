import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditTaskPopup = ({ modal, toggle, updateTask }) => {
  const [taskname, setTaskname] = useState("");
  const [description, setDescription] = useState("");
  const [taskNameError, setTaskNameError] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "taskName") {
      setTaskname(value);
    } else {
      setDescription(value);
    }
  };
  useEffect (()=>{
    setTaskname(taskObj.name);
    setDescription(taskObj.description);
  },[])
  const handleUpdate= (e) => {
e.preventDefault();
let TempObj = {}
tempObj['Name'] = taskName
tempObj['Description']= description
updateTask(TempObj)
  }

  const handleSave = (e) => {
e.preventDefault();
if (taskname === "") {
    setTaskNameError("this task is required");
    
  }else{
    setTaskNameError("");
    if (description ===""){
        setTaskDescription("this description is required");
    } else{
      setTaskDescription("");
    }
    
  }
    let taskObj = {};
    taskObj["Name"] = taskname;
    taskObj["description"] = description;
    // save(taskObj);

  };
  
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update task</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label>Task's Title</label>
            <input
              type="text"
              className="form-control"
              value={taskname}
              onChange={handleChange}
              name="taskName"
              
            />
            <span>{taskNameError}</span>
          </div>
          <div className="form-group">
            <lable>Description</lable>
            <textarea
              row="5"
              className="form-control"
              value={description}
              onChange={handleChange}
              name="description"
            ><span>{taskDescription}</span>
            </textarea>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleUpdate}>
          update
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditTaskPopup;
