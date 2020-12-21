import React from 'react'

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
            <h1>Hello World</h1>
        )
    }

}
