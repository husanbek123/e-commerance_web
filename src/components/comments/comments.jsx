import React from "react";
import c from './comments.module.scss';

// import { Carousel } from 'antd';
// const contentStyle = {
//     width:'40%',
//     margin:'auto',
//     height: '130px',
//     color: 'black',
//     lineHeight: '160px',
//     textAlign: 'center',
//     // background: '#364d79',
// };



export default function Comments() {
    return (
        <div className={c.comments}>
            <h2>Our customers says</h2>
            {/* <Carousel autoplay>
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
            </Carousel> */}

<div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="center: true">

<ul class="uk-slider-items uk-grid">
    <li class="uk-width-3-4">
        <div class="uk-panel">
            <div class="uk-position-center uk-panel"><h1>1</h1></div>
        </div>
    </li>
    <li class="uk-width-3-4">
        <div class="uk-panel">
            <div class="uk-position-center uk-panel"><h1>2</h1></div>
        </div>
    </li>
    <li class="uk-width-3-4">
        <div class="uk-panel">
            <div class="uk-position-center uk-panel"><h1>3</h1></div>
        </div>
    </li>
    <li class="uk-width-3-4">
        <div class="uk-panel">
            <div class="uk-position-center uk-panel"><h1>4</h1></div>
        </div>
    </li>
    <li class="uk-width-3-4">
        <div class="uk-panel">
            <div class="uk-position-center uk-panel"><h1>5</h1></div>
        </div>
    </li>
</ul>

<a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
<a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

</div>

        </div>
    )
}