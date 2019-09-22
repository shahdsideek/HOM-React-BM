/* eslint-disable */
import React from 'react'
import './module.css'

const Module = props => (
    <div className= "Module">
    <img src={props.image} />
        <h3>{props.title}</h3>
        <p>{props.text}</p>
    </div>
)


export default Module
