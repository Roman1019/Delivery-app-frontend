import ProductList from "../../components/ProductList/ProductList";
import ShopList from "../../components/ShopList/ShopList";
import css from "./Shop.module.css";
export default function Shop() {
  return (
    <div className={css.containerShop}>
      <ShopList />
      <ProductList />
    </div>
  );
}
