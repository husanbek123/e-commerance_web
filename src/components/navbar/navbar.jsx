import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { TemaContext } from "../context/temaContext";
import c from "../navbar/navbar.module.scss";
import { Button, Dropdown } from "antd";
// import { KarzinaContext } from "../context/karzina";

function Navbar({ karzina, mode }) {
  const { tema, setTema } = useContext(TemaContext);
  // const { karzina, setKarzina } = useContext(KarzinaContext);
  const items = [
    {
      key: "1",
      label: (
        <a
          // target="_blank"
          href="#"
        >
          Bakery
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          // target="_blank"
          href="#"
        >
          Fruit and vegetables
        </a>
      ),
    },
    {
      key: "4",
      label: (
        <a
          // target="_blank"
          href="#"
        >
          Meat and fish
        </a>
      ),
    },
    {
      key: "5",
      label: (
        <a
          // target="_blank"
          href="#"
        >
          Drinks
        </a>
      ),
    },
    {
      key: "6",
      label: (
        <a
          // target="_blank"
          href="#"
        >
          Kitchen
        </a>
      ),
    },
    {
      key: "7",
      label: (
        <a
          // target="_blank"
          href="#"
        >
          Special nutrition
        </a>
      ),
    },
    {
      key: "8",
      label: (
        <a
          // target="_blank"
          href="#"
        >
          Baby
        </a>
      ),
    },
    {
      key: "9",
      label: (
        <a
          // target="_blank"
          href="#"
        >
          Pharmacy
        </a>
      ),
    },
  ];
  return (
    <div>
      <header>
        <div className={c.nav1}>
          <ul className={c.ul1}>
            <li>
              <a href="#">Chat with us</a>
            </li>
            <li>
              <a href="tel:+420 336 775 664">+420 336 775 664</a>
            </li>
            <li>
              <a href="mailto:info@freshnesecom.com">info@freshnesecom.com</a>
            </li>
            <li>
              <button
                onClick={() =>
                  setTema((e) => (e == "light" ? "dark" : "light"))
                }
              >
                {mode}
              </button>
            </li>
          </ul>
          <ul className={c.ul2}>
          <li>
              <NavLink to={"/home"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About As</NavLink>
            </li>
            <li>
              <NavLink to={"/category"}>Category</NavLink>
            </li>
            <li>
              <NavLink to={"/blog"}>Blog</NavLink>
            </li>
          </ul>
        </div>
        <nav>
          <div className={c.logo}>
            <NavLink to={"/"}>Freshnesecom</NavLink>
          </div>
          <form className={c.forma}>
            <Dropdown
              className={c.allDrop}
              menu={{
                items,
              }}
              placement="bottom"
              arrow
            >
              <Button>
                AllCategories <i class="fa-solid fa-chevron-down"></i>
              </Button>
            </Dropdown>
            <label>
              <input
                type="text"
                placeholder="Search Products, categories ..."
              />
              <i className="fa-solid fa-search"></i>
            </label>
          </form>
          <div className={c.userAndKarzina}>
            <NavLink to={"/karzina"}>
              <i class="fa-solid fa-cart-shopping"></i>
              {karzina.length}
            </NavLink>

            <NavLink to={"#"}>
              <i className="fa-solid fa-user"></i>
            </NavLink>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
