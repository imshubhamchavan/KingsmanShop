import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useEffect } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import "./checkout.style.scss"


const Checkout = () => {
    useEffect(() => {
        document.title = "Checkout | Kingsman shop";
    })

    const { cartItems, cartTotal } = useContext(CartContext);
    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Discription</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>

            </div>
            {
                cartItems.map((cartItem) => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )
                )
            }
            <span className="total">Total : &#8377; {cartTotal} </span>
        </div>

    )
}

export default Checkout;