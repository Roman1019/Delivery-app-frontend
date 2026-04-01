import { NavLink } from "react-router-dom";
import css from "./NavMenu.module.css";
import clsx from "clsx";

export default function AuthNav() {
  const getLinkStyle = ({ isActive }: { isActive: boolean }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <nav className={css.nav}>
      <div className={css.list}>
        <NavLink className={getLinkStyle} to="/register">
          Register
        </NavLink>
        <NavLink className={getLinkStyle} to="/login">
          Log in
        </NavLink>
      </div>
    </nav>
  );
}
