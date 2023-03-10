import React from "react";
import { useGetData } from "../../hooks/useQueryHook";
import cl from "./stayle.module.scss";
import { Link, useSearchParams } from "react-router-dom";

export const Sidebar = ({categories, lang}) => {
  const { data } = useGetData(["category"], "/category");
  const [param, setParam] = useSearchParams();

  

  return (
    <div className={[cl.bar].join(" ")}>
      <div className={cl.bar__list}>
        {
          categories?.map(item => (
            <Link to={`/categories/${item.id}`}>{item[`name_${lang}`]}</Link>
          ))
        }
      </div>
    </div>
  );
};
