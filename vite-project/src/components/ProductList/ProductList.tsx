import { useEffect, useState } from "react";
import css from "./ProductList.module.css";

type Product = {
  _id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

type Props = {
  category: string;
};

export default function ProductList({ category }: Props) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(
        "https://delivery-app-backend-kihi.onrender.com/",
      );
      const data = await res.json();

      if (!Array.isArray(data)) {
        return;
      }

      setProducts(
        data.filter((p) => p.category.toLowerCase() === category.toLowerCase()),
      );
    };

    fetchProducts();
  }, [category]);

  return (
    <div className={css.list}>
      <ul className={css.productList}>
        {products.map((product) => (
          <li className={css.productItem}>
            <div key={product._id} className={css.card}>
              <img
                className={css.imgProduct}
                src={product.image}
                alt={product.name}
              />
              <h3 className={css.nameProduct}>{product.name}</h3>
              <p className={css.price}>{product.price} грн</p>
              <button className={css.buttonAdd}>add to Cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
