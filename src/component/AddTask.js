import React, { useState } from 'react'

function AddTask(props) {

    const [task,setTask]=useState(
        {tas:""}
    )



 const addTask=(e)=>{
   e.preventDefault()
       props.addalltasks(task)
       setTask({tas:""})
      
    }
  return (
    <div>
    
       <form onSubmit={addTask}>
         <div>
           <input type='text' name='tas' value={task.tas} onChange={(e)=>setTask({tas:e.target.value})}></input>
         </div>
         <button>add</button>
       
</form>

    </div>
  )
}

export default AddTask