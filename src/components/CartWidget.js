import carrito from "../carrito.svg";
import '../components/CartWidget.css'

const CartWidget = () => {
    return (
        <div>
            <img src={carrito} alt="cart-widget" className="carrito"/>
            0

        </div>
    )
}

export default CartWidget; 