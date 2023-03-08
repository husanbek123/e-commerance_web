import React from "react";
import c from './comments.module.scss';

import { Carousel } from 'antd';
const contentStyle = {
    width:'40%',
    margin:'auto',
    height: '130px',
    color: 'black',
    lineHeight: '160px',
    textAlign: 'center',
    // background: '#364d79',
};



export default function Comments() {
    return (
        <div className={c.comments}>
            <h2>Our customers says</h2>
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}>“ This is an super space for your  customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “</h3>
                    <h3>“ This is an super space for your  customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>“ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here “</h3>
                </div>
            </Carousel>

        </div>
    )
}