import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { useCart } from '../context/CartContext';

const Cart = () => {
    const { cart, getSubtotal } = useCart();
    const subtotal = getSubtotal();

    if (cart.length === 0) {
        return (
            <div className="page">
                <div className="container">
                    <h2>Shopping Cart</h2>
                    <div className="empty-cart">
                        <p>Your cart is empty</p>
                        <Link to="/" className="btn-primary">
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="page">
            <div className="container">
                <h2>Shopping Cart</h2>

                <div className="cart-items">
                    {cart.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </div>

                <div className="cart-summary">
                    <div className="summary-row">
                        <span>Subtotal:</span>
                        <span className="total">${subtotal.toFixed(2)}</span>
                    </div>
                    <Link to="/checkout" className="btn-primary btn-large">
                        Proceed to Checkout
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;
