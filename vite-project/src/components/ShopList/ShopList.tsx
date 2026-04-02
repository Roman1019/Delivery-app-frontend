// import { NavLink } from "react-router-dom";
// import css from "./NavMenu.module.css";
// import clsx from "clsx";
import css from "./ShopList.module.css";

export default function ShopList() {
  //   const getLinkStyle = ({ isActive }: { isActive: boolean }) => {
  //     return clsx(css.link, isActive && css.active);
  //   };
  return (
    <ul className={css.ulList}>
      <li>
        <button className={css.buttonList}>Burgers</button>
      </li>
      <li>
        <button className={css.buttonList}>Wraps & Salads</button>
      </li>
      <li>
        <button className={css.buttonList}>Happy Meal</button>
      </li>
      <li>
        <button className={css.buttonList}>McCafe</button>
      </li>
      <li>
        <button className={css.buttonList}>McCafe</button>
      </li>
      <li>
        <button className={css.buttonList}>McCafe</button>
      </li>
    </ul>
  );
}
