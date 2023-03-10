import React from "react";
import styles from "./index.module.scss";
import logo from "../../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Select } from "antd";
import { useGetData } from "../../hooks/useQueryHook";
import useMyStore from "../context/Store";
import { useContext } from "react";
import { KarzinaContext } from "../context/karzina";

function Navbar({ value, lang, func }) {
  let { currentLang, setCurrentLang } = useMyStore((state) => state);
  let { data } = useGetData(["all_products"], "/products");
  let products = data?.data;
  let navigate = useNavigate();

  function Click(e) {
    navigate(`/products/${e}`);
  }
  function SwitchLang(e) {
    console.log(e);
    setCurrentLang(e);
  }

  const { karzina } = useContext(KarzinaContext);

  return (
    <div className={styles.navbar}>
      <div className={styles.main}>
        <div className={styles.logo}>
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className={styles.search}>
          <Form>
            <Select
              showSearch
              onChange={Click}
              placeholder="Search"
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={products?.map((item) => ({
                label: item[`name_${lang}`],
                value: item?.id,
              }))}
            />
          </Form>
        </div>
        <div className={styles.icons}>
          <div className={styles.cart}>
            <Link
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
              to={"/karzina"}
            >
              <i className="fa-solid fa-cart-shopping"></i>
              <p>{karzina.length}</p>
            </Link>
          </div>
          <Select
            defaultValue={currentLang}
            className={styles.lang}
            onChange={SwitchLang}
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            options={["Uz", "Ru", "En"]?.map((item) => ({
              label: item,
              value: item,
            }))}
          />
        </div>
      </div>
      <div className={styles.search_part}>
        <Select
          className={styles.search}
          showSearch
          onChange={Click}
          placeholder="Search"
          filterOption={(input, option) =>
            (option?.label ?? "").includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? "")
              .toLowerCase()
              .localeCompare((optionB?.label ?? "").toLowerCase())
          }
          options={products?.map((item) => ({
            label: item[`name_${lang}`],
            value: item?.id,
          }))}
        />
        <div className={styles.menuIcon}>
          {value ? (
            <i className="fa-solid fa-xmark" onClick={() => func(false)}></i>
          ) : (
            <i onClick={() => func(true)} className="fa-solid fa-bars"></i>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
