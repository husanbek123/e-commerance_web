import React from "react";
import c from './categ.module.scss';
import { Link } from "react-router-dom";
import useQueryHook from "../../hooks/useQueryHook";


export default function Categ({set}){
    const { data } = useQueryHook({ url: '/category' });
    const mydata = data?.data || [];

    console.log(data);
    return(
        <div className={c.categ}>
            <h3>Categories</h3>
            {mydata.data?.map((e, i) => (
                    // <Link to={"I9g"}>{e.name_Uz}</Link>
                    <Link to={`/category/${e.id}`}>{e.name_Uz}</Link>
            ))}
        </div>
    )
}