import './App.css';
import Footer from './Footer';
import Header from "./Header"
import CreateNote from "./CreateNote"
import Note from './Note';
import { useState } from 'react';

function App() {
  
  const [addItem, setAddItem]= useState([])

  const addNote =(note)=>{
       setAddItem(preData =>{
     return [...preData, note]
   })
   console.log ("note")
  }
 
  const onDelete =(id)=>{
      setAddItem( oldData => oldData.filter((currdata, index)=>{
        return index !== id
      }))
  }
  
  return (
    <div className="App">
       <Header />  
       <CreateNote passNote={addNote} />
        {addItem.map((val, index)=>{
             return <Note key={index} id ={index} title={val.title} content={val.content} deleteItem={onDelete} />
          })}

       <Footer />       
    </div>
  );
}

export default App;
