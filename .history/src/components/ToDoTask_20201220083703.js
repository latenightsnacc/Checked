import React from "react"

function ToDoTask(props) {
    return (
        <>
            <div className="max-w-sm blur shadow-2xl mx-auto mt-5 h-auto flex items-center p-5">
                <input type="checkbox" checked={props.item.completed} 
                    onChange= {() => console.log('Changed', props.item.id)} />
                <p>&nbsp; {props.item.text}</p>
            </div>
        </>
    )
    
}

export default ToDoTask