import React, {useState} from "react";

function Note(props) {

    const [showDescription,setShowDescription] = useState(false);
    const toggleDescription = () => {
        setShowDescription(!showDescription);
    }
    const editHandler = () => {
        props.onEdit({
            title: props.title, 
            body:props.body, 
            id: props.id
        })
    }

    // props.onDelete(props.id);
    return (
        <div className = "note">
        <p onClick={toggleDescription}>{props.title}</p>
        {showDescription && (<div className="description">{props.body}</div>)}
        <button onClick={() => editHandler()}>Edytuj</button>
        <button className="delete" onClick={() => props.onDelete(props.id)}>usuń</button>
    </div>
    );
}

export default Note;