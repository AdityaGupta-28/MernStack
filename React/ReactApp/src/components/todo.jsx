import React, {useState} from 'react'


function ToDoList(){
 const [tasks, setTasks ] = useState([]);
 const [newTask, setNewTask] = useState("");

 function handleChange(e){
  setNewTask(e.target.value);
 }


 function handleAdd(e){
   if(newTask.trim()!==""){
    setTasks(t=>([...t,newTask]));
    setNewTask("");
   }
 }

 function handleRemove(index){
    setTasks(tasks.filter((_,ind)=>ind!==index));
 }

 function handleUp(index){
   if(index>0){
   const updatedTasks = [...tasks];
   [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];
   setTasks(updatedTasks);
   }
 }

 function handleDown(index){
   if(index<tasks.length-1){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]];
      setTasks(updatedTasks);
   }
 }

 function handleKeyDown(e){
   if(e.key==='Enter'){
      handleAdd(e);
   }
 }

    return(
        <div className='todo' >
        <h1>ToDo List</h1>
      
        <div className='input'>
       <input type="text" value={newTask} onChange={handleChange} onKeyDown={handleKeyDown}  placeholder='Enter task'  />
       <button onClick={handleAdd} >Add</button>
       </div>
        <div className='list' >
        {tasks.map((task,index)=><p key={index} >{task} <button onClick={()=>handleRemove(index)} >Delete</button> 
        <button onClick={()=>handleUp(index)} >up</button> <button onClick={()=>handleDown(index)} >down</button></p>)}
       </div>
       
        </div>
    )
}

export default ToDoList;