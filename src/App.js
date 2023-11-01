import logo from './logo.svg';
import './App.css';
import AddTask from './component/AddTask';
import ShowList from './component/ShowList';
import { useEffect, useState } from 'react';

function App() {
   const LOCAL_STORAGE_KEY='list'

  const[list,setList]=useState([])

  const addalltasks=(lists)=>{
    console.log(lists,'oo');
    setList([...list,lists])
    
      
  }

 

 


  useEffect(()=>{
    const  retriveContact=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
     if(retriveContact)  setList(retriveContact)
  },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(list))
  },[list])


 
 
 
 
  return (
    <div className="App">
      <AddTask addalltasks={addalltasks}/>
    <ShowList pro={list}/>
    </div>
  );
}

export default App;
