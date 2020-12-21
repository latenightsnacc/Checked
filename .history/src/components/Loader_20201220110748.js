import React from 'react'

export default function Loader(props) {
    props.isLoading ? 
    
        <div className="container">
            <div className="yellow"></div>
            <div className="red"></div>
            <div className="blue"></div>
            <div className="violet"></div>
        </div>
    
        : <h1>Loaded</h1>

}
