import React, { Component } from "react"

class ToDoTask extends Component {
   
    render() {
        console.log(this.props)
        return (
            <>
                <div className="max-w-sm blur shadow-2xl mx-auto mt-5 h-auto flex items-center p-5">
                    <input type="checkbox"/>
                    <p>&nbsp; {this.item.text}</p>
                </div>
            </>
        )
    }
}

export default ToDoTask