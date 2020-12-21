import React from 'react'

export default function Loader(props) {
    console.log(props.isLoading)
    return (
        <div class="container">
            <div class="yellow"></div>
            <div class="red"></div>
            <div class="blue"></div>
            <div class="violet"></div>
        </div>
    )
}
