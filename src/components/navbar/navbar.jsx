import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { TemaContext } from "../context/temaContext";
import c from "../navbar/navbar.module.scss";
import "../../App.css";
import { Button, Dropdown } from "antd";

function Navbar({ karzina, mode }) {
  const { tema, setTema } = useContext(TemaContext);
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
          <input id="chek" type="checkbox" />
          <ul className={c.ul1}>
            <label className={c.barclose} for="chek">
              X
            </label>
            <ul className={c.ul02}>
              <li>
                <NavLink to={"/home"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About As</NavLink>
              </li>
              <li>
                <NavLink to={"/blog"}>Blog</NavLink>
              </li>
            </ul>
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
            <div className={c.userAndKarzina2}>
              <NavLink to={"/karzina"}>
                <i class="fa-solid fa-cart-shopping"></i>
                {karzina.length}
              </NavLink>

              <NavLink to={"#"}>
                <i className="fa-solid fa-user"></i>
              </NavLink>
            </div>
          </ul>
          <ul className={c.ul2}>
            <li>
              <NavLink to={"/home"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About As</NavLink>
            </li>
            <li>
              <NavLink to={"/blog"}>Blog</NavLink>
            </li>
          </ul>
          <div className={c.respons}>
            <div className={c.wra}>
              <NavLink to={"/"}>Freshnesecom</NavLink>
              <button
                className={c.btn}
                onClick={() =>
                  setTema((e) => (e == "light" ? "dark" : "light"))
                }
              >
                {mode}
              </button>
            </div>
            <form className={c.forma2}>
              <Dropdown
                className={c.allDrop2}
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
          </div>
          <label className={c.bar} for="chek">
            <i class="fa-solid fa-bars"></i>
          </label>
          <label className={c.outbar} for="chek"></label>
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
        <form className={c.forma3}>
          <Dropdown
            className={c.allDrop2}
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
            <input type="text" placeholder="Search Products, categories ..." />
            <i className="fa-solid fa-search"></i>
          </label>
        </form>
      </header>
    </div>
  );
}

export default Navbar;
