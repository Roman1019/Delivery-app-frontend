import { useState } from "react";
import clsx from "clsx";
import css from "./ShopList.module.css";

export default function ShopList() {
  const [active, setActive] = useState("burgers");

  return (
    <ul className={css.ulList}>
      <li>
        <button
          onClick={() => setActive("burgers")}
          className={clsx(css.buttonList, active === "burgers" && css.active)}
        >
          Burgers
        </button>
      </li>

      <li>
        <button
          onClick={() => setActive("wraps")}
          className={clsx(css.buttonList, active === "wraps" && css.active)}
        >
          Wraps & Salads
        </button>
      </li>

      <li>
        <button
          onClick={() => setActive("happy")}
          className={clsx(css.buttonList, active === "happy" && css.active)}
        >
          Happy Meal
        </button>
      </li>

      <li>
        <button
          onClick={() => setActive("Snack")}
          className={clsx(css.buttonList, active === "Snack" && css.active)}
        >
          Snack Wrap
        </button>
      </li>
      <li>
        <button
          onClick={() => setActive("meals")}
          className={clsx(css.buttonList, active === "meals" && css.active)}
        >
          Extra Value Meals
        </button>
      </li>
      <li>
        <button
          onClick={() => setActive("Breakfast")}
          className={clsx(css.buttonList, active === "Breakfast" && css.active)}
        >
          Breakfast
        </button>
      </li>
      <li>
        <button
          onClick={() => setActive("cafe")}
          className={clsx(css.buttonList, active === "cafe" && css.active)}
        >
          McCafe
        </button>
      </li>
    </ul>
  );
}
