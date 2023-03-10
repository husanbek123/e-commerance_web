import React from "react";
import { useGetData } from "../../hooks/useQueryHook";
import cl from "./stayle.module.scss";
import { useSearchParams } from "react-router-dom";

export const Sidebar = () => {
  const { data } = useGetData(["category"], "/category");
  const [param, setParam] = useSearchParams();

  return (
    <div className={cl.bar}>
      <div className={cl.bar__list}>
        {data?.data?.map((e) => (
          <button onClick={() => setParam({ categ: e.id })}>
            {e?.name_Uz}
          </button>
        ))}
      </div>
    </div>
  );
};
