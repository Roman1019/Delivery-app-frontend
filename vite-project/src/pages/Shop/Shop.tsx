import ProductList from "../../components/ProductList/ProductList";
import ShopList from "../../components/ShopList/ShopList";
import css from "./Shop.module.css";
import { useState } from "react";
export default function Shop() {
  const [category, setCategory] = useState<string>("burgers");
  return (
    <div className={css.containerShop}>
      <ShopList activeCategory={category} setActiveCategory={setCategory} />
      <ProductList category={category} />
    </div>
  );
}
