import { useContext } from "react";
import carrito from "../carrito.svg";
import '../components/CartWidget.css'
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";


const CartWidget = () => {
    const { totalQuantity} = useContext(CartContext)

    return (
        <Link to='/cart' className="CartWidget" style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
            <img src={carrito} alt="cart-widget" className="carrito"/>
            { totalQuantity }
        </Link>
    )
   
}

export default CartWidget; 