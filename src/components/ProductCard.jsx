import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className="product-card">
            <img src={product.image} alt={product.title} />
            <div className="product-info">
                <h3>{product.title}</h3>
                <p className="price">${product.price.toFixed(2)}</p>
                <button onClick={() => addToCart(product)} className="btn-primary">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
