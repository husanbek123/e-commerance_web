import React from "react";
import { useGetData } from "../../hooks/useQueryHook";
import cl from "./stayle.module.scss";
import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";

export const Sidebar = ({ value, categories, lang}) => {
  const { data } = useGetData(["category"], "/category");
  const [param, setParam] = useSearchParams();

  let params = useParams() 
  let loc = useLocation()

  let direction = loc.pathname.replace("/categories/", '')
  console.log(loc.pathname, "111111111111111111111");
  return (
    <div className={[cl.bar, value == true && cl.open].join(" ") }>
      <div className={cl.bar__list}>
        <Link to={'/products'}  className="link" ><p className={loc.pathname == '/products' && 'activeLink'}>All products</p></Link>
        {
          categories?.map(item => (
            <Link className="link" to={`/categories/${item.id}`}><p className={item.id == direction && "activeLink"}>{item[`name_${lang}`] }</p></Link>
          ))
        }
      </div>
    </div>
  );
};
