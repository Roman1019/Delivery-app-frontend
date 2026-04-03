import clsx from "clsx";
import css from "./ShopList.module.css";

type Props = {
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
};

export default function ShopList({ activeCategory, setActiveCategory }: Props) {
  const categories = [
    { key: "burgers", label: "Burgers" },
    { key: "wraps", label: "Wraps & Salads" },
    { key: "happy", label: "Happy Meal" },
    { key: "snack", label: "Snack Wrap" },
    { key: "meals", label: "Extra Value Meals" },
    { key: "breakfast", label: "Breakfast" },
    { key: "cafe", label: "McCafe" },
  ];

  return (
    <ul className={css.ulList}>
      {categories.map((cat) => (
        <li key={cat.key}>
          <button
            onClick={() => setActiveCategory(cat.key)}
            className={clsx(
              css.buttonList,
              activeCategory === cat.key && css.active,
            )}
          >
            {cat.label}
          </button>
        </li>
      ))}
    </ul>
  );
}
