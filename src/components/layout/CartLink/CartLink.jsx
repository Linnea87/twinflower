import { NavLink } from "react-router";
import { useSelector } from "react-redux";
import { ShoppingBasket } from "lucide-react";
import { selectCartCount } from "../../../features/cart/cartSelectors";
import styles from "./CartLink.module.css";

function CartLink({ onNavigate }) {
  const count = useSelector(selectCartCount);
  const label = `Cart, ${count} ${count === 1 ? "item" : "items"}`;

  return (
    <NavLink
      to="/cart"
      className={styles.cartLink}
      onClick={onNavigate}
      aria-label={label}
    >
      <ShoppingBasket size={24} strokeWidth={1.8} aria-hidden="true" />
      {count > 0 && <span className={styles.badge}>{count}</span>}
    </NavLink>
  );
}

export default CartLink;
