import React, { Component } from "react"

class ToDoTask extends Component {
  
    render() {
        return (
            <>
                <div className="max-w-sm blur shadow-2xl mx-auto mt-5 h-auto flex items-center p-5">
                    <input type="checkbox"/>
                    <p>&nbsp; {props.item.text}</p>
                </div>
            </>
        )
    }
}

export default ToDoTask