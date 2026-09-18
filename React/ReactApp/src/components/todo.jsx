import React, {useState} from 'react'


function ToDoList(){
 const [tasks, setTasks ] = useState([]);
 const [task, setTask] = useState("");

 function handleChange(e){
  setTask(e.target.value);
 }

const input =document.getElementsByTagName('input');
input.addEventListener("keydown",function(e){
  if(e.key==='Enter'){
    e.preventDefault();
    handleChange();
  } 
});

 function handleAdd(e){
    setTasks(t=>([...t,task]));
    setTask("");
 }

 function handleRemove(index){
    setTasks(taks.filter((_,ind)=>ind!==index));
 }

    return(
        <div className='todo' >
        <h1>ToDo List</h1>
      
        <div className='input'>
       <input type="text" value={task} onChange={handleChange}  placeholder='Enter task'  />
       <button onClick={handleAdd} >Add</button>
       </div>
        <div className='list' >
        {tasks.map((task,index)=><p key='index' >{task} <button onClick={()=>handleRemove(index)} >Delete</button> 
        <button >up</button> <button>down</button></p>)}
       </div>
       
        </div>
    )
}

export default ToDoList;