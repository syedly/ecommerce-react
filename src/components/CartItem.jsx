import { useState } from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
    const { updateQuantity, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
    const [quantity, setQuantity] = useState(item.quantity);

    const handleUpdate = () => {
        updateQuantity(item.id, quantity);
    };

    const handleQuantityChange = (e) => {
        const value = e.target.value;
        if (value === '' || parseInt(value) > 0) {
            setQuantity(value === '' ? '' : parseInt(value));
        }
    };

    return (
        <div className="cart-item">
            <img src={item.image} alt={item.title} />

            <div className="item-details">
                <h3>{item.title}</h3>
                <p className="price">${item.price.toFixed(2)}</p>
            </div>

            <div className="quantity-controls">
                <button onClick={() => decreaseQuantity(item.id)} className="btn-icon">
                    <Minus size={16} />
                </button>
                <input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    min="1"
                />
                <button onClick={() => increaseQuantity(item.id)} className="btn-icon">
                    <Plus size={16} />
                </button>
            </div>

            <button onClick={handleUpdate} className="btn-secondary">
                Update
            </button>

            <button onClick={() => removeFromCart(item.id)} className="btn-delete">
                <Trash2 size={18} />
            </button>

            <div className="item-total">
                ${(item.price * item.quantity).toFixed(2)}
            </div>
        </div>
    );
};

export default CartItem;
