import React from 'react'
import style from "./style.module.css";
import { Link } from "react-router-dom";

const MENU = [
  {
    title: "People",
    to: "",
  },
  {
    title: "Planets",
    to: "/planets",
  },
  {
    title: "Starships",
    to: "/starships",
  },
];

const Navbar = () => {
  return (
    <nav>
    <ul className={style.menuItems}>
      {MENU.map(({ title, to }, index) => (
      <li className={style.menuItem} key={Math.random()}>
        <Link to={to}>{title}</Link>
      </li>
      ))}
    </ul>
  </nav>
  )
};

export default Navbar;

