import React from "react"

class ToDoTask extends React.Component {
    render() {
        return (
            <>
                <div className="max-w-sm blur shadow-2xl mx-auto mt-5 h-auto flex items-center p-5">
                    <input type="checkbox" checked={this.props.item.completed} 
                        onChange= {() => this.props.handleChange(this.props.item.id)} />
                    <p>&nbsp; {this.props.item.text}</p>
                </div>
            </>
        )
    }
    
    
}

export default ToDoTask