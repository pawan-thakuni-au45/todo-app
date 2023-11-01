import React from 'react'
import './ShowTask.css'

function ShowList(props) {
    console.log(props,'p')

    const {tas}=props.pro

    const renderlist=props.pro.map((e)=>(

        <div className='col'>
       
       <ol>
       
        <li><h1>{e.tas}</h1></li>

        </ol>
        </div>
    ))
    console.log(renderlist,'rr');

      
  
  return (
     <div>
     {
       renderlist
     }
     
     </div>
  )
}

export default ShowList