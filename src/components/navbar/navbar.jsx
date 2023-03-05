import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { TemaContext } from "../context/temaContext";
import c from "../navbar/navbar.module.scss";
import { Button, Dropdown } from "antd";

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
          1st menu item
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
          2nd menu item
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          // target="_blank"
          href="#"
        >
          3rd menu item
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
            <p>AllCategories</p>
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
        <div className={c.categ}>
          <Dropdown
            menu={{
              items,
            }}
            placement="bottom"
            arrow
          >
            <Button>Bakery <i class="fa-solid fa-chevron-down"></i></Button>
          </Dropdown>
          <Dropdown
            menu={{
              items,
            }}
            placement="bottom"
            arrow
          >
            <Button>Fruit and vegetables <i class="fa-solid fa-chevron-down"></i></Button>
          </Dropdown>
          <Dropdown
            menu={{
              items,
            }}
            placement="bottom"
            arrow
          >
            <Button>Meat and fish <i class="fa-solid fa-chevron-down"></i></Button>
          </Dropdown>
          <Dropdown
            menu={{
              items,
            }}
            placement="bottom"
            arrow
          >
            <Button>Drinks <i class="fa-solid fa-chevron-down"></i></Button>
          </Dropdown>
          <Dropdown
            menu={{
              items,
            }}
            placement="bottom"
            arrow
          >
            <Button>Kitchen <i class="fa-solid fa-chevron-down"></i></Button>
          </Dropdown>
          <Dropdown
            menu={{
              items,
            }}
            placement="bottom"
            arrow
          >
            <Button>Special nutrition <i class="fa-solid fa-chevron-down"></i></Button>
          </Dropdown>
          <Dropdown
            menu={{
              items,
            }}
            placement="bottom"
            arrow
          >
            <Button>Baby <i class="fa-solid fa-chevron-down"></i></Button>
          </Dropdown>
          <Dropdown
            menu={{
              items,
            }}
            placement="bottom"
            arrow
          >
            <Button>Pharmacy <i class="fa-solid fa-chevron-down"></i></Button>
          </Dropdown>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
