import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

function CreateNote(props) {
    
    const [note, setNote] = useState({
        title :"", content: ""
    })

    const InputEvent =(event)=>{
        //const name = event.target.name;
        //const value = event.target.value;
        const {name, value} = event.target
        setNote(preData =>{
            return{
                ...preData, [name] : value
            }
        })
    }

    const addEvent =()=>{
        props.passNote(note)
        setNote({
            title :"", content: ""
        })
    }

    return (
        <div className="main_note" >
            <form>  
                <input style={{height: "40px" , margin:"5px 10px"}} type="text" placeholder="Title" autoComplete="off" value={note.title} onChange={InputEvent} name="title"/>
                <input style={{height: "80px", margin:"5px 10px"}} className="textarea" rows="" column="" placeholder="write a notes..." value={note.content} onChange={InputEvent} name="content" />
                <Button onClick={addEvent}><AddIcon className="plus_sign" ></AddIcon></Button>
            </form>
        </div>
    )
}

export default CreateNote 
