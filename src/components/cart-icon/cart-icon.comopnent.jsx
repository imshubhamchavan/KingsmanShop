import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import "./cart-icon.style.scss";

const CartIcon = () => {

    const {isCartOpen ,setIsCartOpen} = useContext(CartContext);
    const toggleiIsCartOpen = () => setIsCartOpen(!isCartOpen);
    return(
        <div className="cart-icon-container" onClick={toggleiIsCartOpen}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">3</span>
        </div>
    )

}
export default CartIcon;