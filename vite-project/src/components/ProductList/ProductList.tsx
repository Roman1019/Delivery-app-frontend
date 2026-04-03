// import css from "./ProductList.module.css";

// export default function ProductList() {
//   return <div></div>;
// }
import { useEffect, useState } from "react";
import css from "./ProductList.module.css";

type Product = {
  _id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("http://localhost:3000/products");
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className={css.list}>
      {products.map((product) => (
        <div key={product._id} className={css.card}>
          <img
            className={css.imgProduct}
            src={product.image}
            alt={product.name}
          />
          <h3>{product.name}</h3>
          <p>{product.price} грн</p>
        </div>
      ))}
    </div>
  );
}
