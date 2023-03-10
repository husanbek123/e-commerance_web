import React from "react";
import Navbar from "../navbar";
import { Footer } from "../footer/footer";
import { TemaContext } from "../context/temaContext";
import { useContext } from "react";
import { KarzinaContext } from "../context/karzina";
import { useGetData } from "../../hooks/useQueryHook";

import { Sidebar } from "../Sidebar";
import useMyStore from '../context/Store'
import { useLocation } from "react-router-dom";
import styles from './index.module.scss'

function Layout({ karzina, mode, children }) {
  const { tema, setTema } = useContext(TemaContext);
  let {currentLang} = useMyStore((state) => state)
  let {data: categories} = useGetData(['categories'], "/category")

  let loc = useLocation()
  return (
    <div className={styles.layout}>
      <Navbar lang={currentLang} />
      <div className={styles.middle}>
        {
          loc.pathname != "/" &&
          <div className={styles.sidebar}>
            <Sidebar categories={categories?.data} lang={currentLang} />
          </div>
        }
        <div className={styles.right}>
          {
            loc.pathname != "/" ? <div className={styles.children}>
            {children}
            </div>
            :
            children
          }
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
