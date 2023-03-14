import React from "react";
import { useGetData } from "../../hooks/useQueryHook";
import cl from "./stayle.module.scss";
import { NavLink, useLocation, useSearchParams } from "react-router-dom";

export const Sidebar = ({ value, categories, lang }) => {
  const { data } = useGetData(["category"], "/category");
  const [param, setParam] = useSearchParams();

  let loc = useLocation();

  let direction = loc.pathname.replace("/categories/", "");
  return (
    <div className={[cl.bar, value == true && cl.open].join(" ")}>
      <div className={cl.bar__list}>
        <NavLink to={"/products"} className="link">
          <p className={loc.pathname == "/products" && "activeLink"}>
            All products
          </p>
        </NavLink>
        <NavLink to={"/categories"} className="link">
          <p className={loc.pathname == "/categories" && "activeLink"}>
            All categories
          </p>
        </NavLink>
        {categories?.map((item) => (
          <NavLink key={item.id} className="link" to={`/categories/${item.id}`}>
            <p className={item.id == direction && "activeLink"}>
              {item[`name_${lang}`]}
            </p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
