import NavMenu from "../NavMenu/NavMenu";
import { Routes, Route } from "react-router-dom";
import Shop from "../../pages/Shop/Shop";
import ShoppingCard from "../../pages/ShoppingCard/ShoppingCard";
import css from "./App.module.css";
export default function App() {
  return (
    <div className={css.container}>
      <NavMenu />
      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route path="/shoppingCart" element={<ShoppingCard />} />
      </Routes>
    </div>
  );
}
