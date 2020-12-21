import React from 'react'
import ToDoTask from './ToDoTask'

export default function Loader(props) {
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="yellow"></div>
                <div className="red"></div>
                <div className="blue"></div>
                <div className="violet"></div>
            </div>
        )
    } else {
        return (
            <ToDoTask />
        )
    }

}
