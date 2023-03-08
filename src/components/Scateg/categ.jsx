import React from "react";
import c from './categ.module.scss';
import { Link } from "react-router-dom";
import useQueryHook from '../../hooks/useQueryHook';


export default function Categ(){
    const { data } = useQueryHook({ url: '/category' });
    const mydata = data.data || [];

    return(
        <div className={c.categ}>
            <h3>Categories</h3>
            {mydata.data.map((e, i) => (
                    <Link to="/category/:id">{e.name_Uz}</Link>
            ))}
        </div>
    )
}