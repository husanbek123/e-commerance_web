import React from "react";
import Comments from "../../components/comments/comments";
import Scard from "../../components/Scard/homecard";
import Categ from "../../components/Scateg/categ";
import c from './home.module.scss';


export default function Home(){
    return(
        <div className={c.home}>
            <div className={c.box}>
                <div className={c.card1}><Categ/></div>
                <div className={c.card2}> <Scard/></div>
            </div>
            <div className={c.comments}><Comments/></div>
        </div>
    )
}
