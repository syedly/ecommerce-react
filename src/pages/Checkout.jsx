import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Checkout = () => {
    const { cart, getSubtotal } = useCart();
    const navigate = useNavigate();
    const [deliveryOption, setDeliveryOption] = useState('standard');

    const subtotal = getSubtotal();
    const deliveryCost = deliveryOption === 'express' ? 10 : 0;
    const total = subtotal + deliveryCost;

    if (cart.length === 0) {
        navigate('/cart');
        return null;
    }

    const handlePlaceOrder = () => {
        alert(`Order placed successfully! Total: $${total.toFixed(2)}`);
        // In a real app, this would process the order
    };

    return (
        <div className="page">
            <div className="container">
                <h2>Checkout</h2>

                <div className="checkout-container">
                    <div className="checkout-items">
                        <h3>Order Summary</h3>
                        {cart.map((item) => (
                            <div key={item.id} className="checkout-item">
                                <img src={item.image} alt={item.title} />
                                <div className="checkout-item-details">
                                    <h4>{item.title}</h4>
                                    <p>Quantity: {item.quantity}</p>
                                    <p className="price">${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="checkout-sidebar">
                        <h3>Delivery Options</h3>
                        <div className="delivery-options">
                            <label className="radio-option">
                                <input
                                    type="radio"
                                    name="delivery"
                                    value="standard"
                                    checked={deliveryOption === 'standard'}
                                    onChange={(e) => setDeliveryOption(e.target.value)}
                                />
                                <div>
                                    <strong>Standard Delivery</strong>
                                    <p>5-7 business days - Free</p>
                                </div>
                            </label>

                            <label className="radio-option">
                                <input
                                    type="radio"
                                    name="delivery"
                                    value="express"
                                    checked={deliveryOption === 'express'}
                                    onChange={(e) => setDeliveryOption(e.target.value)}
                                />
                                <div>
                                    <strong>Express Delivery</strong>
                                    <p>1-2 business days - $10.00</p>
                                </div>
                            </label>
                        </div>

                        <div className="order-total">
                            <div className="total-row">
                                <span>Subtotal:</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="total-row">
                                <span>Delivery:</span>
                                <span>${deliveryCost.toFixed(2)}</span>
                            </div>
                            <div className="total-row total">
                                <span>Total:</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>

                        <button onClick={handlePlaceOrder} className="btn-primary btn-large">
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
