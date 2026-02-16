import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = ({ searchQuery }) => {
    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="page">
            <div className="container">
                <h2>Our Products</h2>
                {filteredProducts.length === 0 ? (
                    <p className="no-results">No products found matching "{searchQuery}"</p>
                ) : (
                    <div className="product-grid">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
