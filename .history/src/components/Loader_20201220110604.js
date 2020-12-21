import React from 'react'

export default function Loader(props) {
    console.log(props.isLoading)
    return (
        <div className="container">
            <div className="yellow"></div>
            <div className="red"></div>
            <div className="blue"></div>
            <div className="violet"></div>
        </div>
    )
}
