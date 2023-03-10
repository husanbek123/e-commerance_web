import React from "react";
import Comments from "../../components/comments/comments";
import Scard from "../../components/Scard/homecard";
import Categ from "../../components/Scateg/categ";
import c from "./home.module.scss";
import { useSearchParams } from "react-router-dom";
import { useGetData } from "../../hooks/useQueryHook";

export default function Home() {
  return <div className={c.home}></div>;
}
