import { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
    const [view, setView] = useState('list'); // Tracks view state: 'list', 'details', 'cart'
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // The implicit Authorization header is already injected globally by AuthContext
                const { data } = await axios.get('/api/products');
                setProducts(data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch backend products. Ensure Node Express server is running.');
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const viewDetails = (product) => {
        setSelectedProduct(product);
        setView('details');
    };

    const addToCart = (product) => {
        const item = product && product._id ? product : selectedProduct;
        if (item) {
            setCart([...cart, item]);
            setView('cart'); // Simulate auto-redirecting to cart for quick testing
        }
    };

    const checkout = () => {
        window.alert('Checkout mock triggered successfully! Cart has been wiped.');
        setCart([]);
        setView('list');
    };

    if (loading) return (
        <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
    );
    
    if (error) return <div className="bg-red-50 text-red-600 p-4 border border-red-200 rounded-lg">{error}</div>;

    return (
        <div>
            {/* Header / Nav Area strictly for this Playground */}
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-gray-200 pb-4 gap-4">
                <div>
                    <h2 className="text-2xl font-black text-gray-900 tracking-tight">E-Commerce Simulation</h2>
                    <p className="text-gray-500 mt-1 text-sm font-medium">
                        Write scripts to test a dynamic flow: View Catalog → Select Detail → Trigger Cart
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    {view !== 'list' && (
                        <button 
                            onClick={() => { setView('list'); setSelectedProduct(null); }}
                            className="text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors"
                        >
                            All Products
                        </button>
                    )}
                    <button 
                        id="viewCartBtn"
                        onClick={() => setView('cart')}
                        className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2 rounded-lg text-sm font-bold shadow-sm transition-colors flex items-center gap-2"
                    >
                        Cart <span className="bg-slate-700 text-xs px-2 py-0.5 rounded-full">{cart.length}</span>
                    </button>
                </div>
            </div>

            {/* List View Component Layout */}
            {view === 'list' && (
                <>
                    {products.length === 0 ? (
                        <div className="p-16 flex flex-col items-center justify-center bg-white border border-gray-200 rounded-xl shadow-sm text-gray-500">
                            <svg className="w-12 h-12 mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                            <span className="text-lg font-medium">Inventory database currently empty.</span>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {products.map(p => (
                                <div key={p._id} className="product-card border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md hover:border-blue-200 transition-all group" data-testid="product-card">
                                    <img src={p.image} alt={p.name} className="w-full h-48 object-cover border-b border-gray-100 group-hover:opacity-95" />
                                    <div className="p-5">
                                        <h3 className="product-title font-bold text-gray-900 text-lg mb-1">{p.name}</h3>
                                        <p className="product-price text-blue-600 font-bold mb-4 tracking-tight">${p.price}</p>
                                        <button 
                                            onClick={() => viewDetails(p)}
                                            className="w-full text-sm font-bold bg-slate-50 text-slate-700 border border-slate-200 py-2.5 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-colors mb-2"
                                        >
                                            View Source
                                        </button>
                                        <button 
                                            onClick={() => addToCart(p)}
                                            className="btn btn-primary w-full text-sm font-bold bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </>
            )}

            {/* Product Details Component Layout */}
            {view === 'details' && selectedProduct && (
                <div className="bg-white border border-gray-200 rounded-xl p-8 flex flex-col md:flex-row gap-8 shadow-sm">
                    <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full md:w-1/3 object-cover rounded-lg border border-gray-100 shadow-sm" />
                    <div className="flex-1">
                        <div className="flex items-start justify-between">
                            <h2 id="product-name" className="product-title text-3xl font-black text-gray-900 mb-2 tracking-tight">{selectedProduct.name}</h2>
                            <p className="product-price text-3xl text-blue-600 font-black tracking-tighter">${selectedProduct.price}</p>
                        </div>
                        
                        <span className="inline-block bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded font-bold uppercase tracking-widest mt-1 mb-6 border border-emerald-200">
                            In Stock ({selectedProduct.countInStock})
                        </span>
                        
                        <p className="text-gray-600 mb-8 text-lg leading-relaxed">{selectedProduct.description}</p>
                        
                        <button 
                            id="addToCart"
                            onClick={() => addToCart(selectedProduct)}
                            className="btn btn-primary w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-8 rounded-lg shadow-sm transition-transform active:scale-95"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            )}

            {/* Shopping Cart Component Layout */}
            {view === 'cart' && (
                <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                    <h2 className="text-2xl font-black text-gray-900 mb-6 border-b border-gray-100 pb-4 tracking-tight">Your Cart Payload</h2>
                    
                    {cart.length === 0 ? (
                        <div className="text-center py-12 bg-gray-50 border border-dashed border-gray-300 rounded-lg">
                            <p className="text-gray-500 font-medium">Your cart is currently empty. Simulate adding an item first.</p>
                        </div>
                    ) : (
                        <div>
                            <ul className="divide-y divide-gray-100 mb-8">
                                {cart.map((item, idx) => (
                                    <li key={idx} className="py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 hover:bg-gray-50 px-2 rounded transition-colors">
                                        <div className="flex items-center gap-4">
                                            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg border border-gray-200" />
                                            <div>
                                                <span className="product-title font-bold text-gray-900 block">{item.name}</span>
                                                <span className="text-sm font-medium text-gray-500">Qty: 1</span>
                                            </div>
                                        </div>
                                        <span className="product-price font-black text-gray-900">${item.price}</span>
                                    </li>
                                ))}
                            </ul>
                            
                            <div className="flex flex-col sm:flex-row justify-between items-center bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <div className="text-lg text-slate-500 font-medium mb-4 sm:mb-0">
                                    Total Value: <span className="text-2xl font-black text-slate-900 ml-2">${cart.reduce((a, b) => a + b.price, 0).toFixed(2)}</span>
                                </div>
                                <button id="checkoutBtn" onClick={checkout} className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-10 rounded-lg shadow-sm transition-colors">
                                    Simulate Checkout
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Products;
