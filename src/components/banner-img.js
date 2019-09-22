/* eslint-disable */
import React from 'react'
import './banner-img.css'

const BannerImg = props => (
    <div>
    <div className="container">
    <div className="banner-img">
    <h3>{props.title}</h3>
    <img src={props.image} />
    </div>
    </div>
    </div>
    
)


export default BannerImg
