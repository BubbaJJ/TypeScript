import React from 'react';
import './Greeting.css'

export const Greeting = (props: {name: string}) => {
    return (
        <div>
        {props.name}
            <h1 className="title">Hello, Awesome website has arrived!</h1>
            </div>
    )
}