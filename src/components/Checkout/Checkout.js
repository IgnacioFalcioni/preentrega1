import { useContext, useState } from "react";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { CartContext } from "../../context/CartContext";
import { db } from "../services/FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState(null);

    const {  clearCart } = useContext(CartContext);

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);

        try {
            const orderData = {
                email: email,
                name: name,
                phone: phone,
                
            };

            const ordersCollectionRef = collection(db, "orders");
            const newDocRef = await addDoc(ordersCollectionRef, orderData);
            setOrderId(newDocRef.id);
            clearCart();

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <h1>Se está generando su orden...</h1>;
    }

    if (orderId) {
        return <h1>El id de su orden es: {orderId}</h1>;
    }

    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    );
};

export default Checkout;