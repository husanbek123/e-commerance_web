import React from "react";
// import { Link } from "react-router-dom";
import useQueryHook from '../../hooks/useQueryHook';
import c from './homecard.module.scss'



export default function Scard({set}) {
    const { data, isLoading } = useQueryHook({ url: '/products' });
    if (isLoading) {
        return (
            <h1>Loading....</h1>
        )
    }
    const mydata = data.data || [];
    console.log(mydata);
    return (
        <div className={c.box}>
            {mydata.data.map((e, i) => (
                <div className={c.card}>
                    <div className={c.card_img}>
                        <img src={e.image_Url} alt="" />
                    </div>
                    <h3>{e.gender}</h3>
                    {/* <p>{e.description_Uz}</p> */}
                    <i>-{e.discount} USZ</i>
                    <div className={c.price}>
                        <h5>{e.price} UZS</h5>
                        <button onClick={() => set((a) => [...a, e])}>Buy now</button>
                    </div>
                </div>
                // </Link>
            ))}
        </div>
    );
}
