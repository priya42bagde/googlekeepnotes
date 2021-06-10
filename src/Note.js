import React from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

function Note(props) {
    const deleteNote =()=>{
        props.deleteItem(props.id)
    }
    return (
        <div style={{ margin:"30px"}} className="note">
        <h3> {props.title}</h3>
        <p>{props.content}</p>
        <button className="btn" onClick={deleteNote}>
            <DeleteOutlineIcon className="deleteIcon"/>
        </button>
        <br/>
        </div>
    )
}

export default Note
