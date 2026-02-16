import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = ({ searchQuery, setSearchQuery }) => {
    const { getCartCount } = useCart();
    const cartCount = getCartCount();

    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="logo">
                    <h1>ShopHub</h1>
                </Link>

                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <Link to="/cart" className="cart-icon">
                    <ShoppingCart size={24} />
                    {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
