import React, { useState } from 'react';
import { ShoppingCart, Filter, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';
import { Product } from '../types';

const SupplementsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const { addToCart } = useCart();
  
  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(product => product.category === activeCategory);
    
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };
  
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative py-20 bg-gray-900 text-white overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0 opacity-40" 
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/7674476/pexels-photo-7674476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          }}
        />
        <div className="absolute inset-0 bg-dark/70 z-0"></div>
        
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Supplements Store</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Premium quality supplements to enhance your fitness journey and maximize your results.
          </p>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="section bg-light">
        <div className="container">
          {/* Mobile Filters Toggle */}
          <div className="md:hidden mb-6">
            <button 
              onClick={toggleFilters} 
              className="flex items-center justify-between w-full p-3 bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <div className="flex items-center">
                <Filter size={18} className="text-gray-500 mr-2" />
                <span>Filter Products</span>
              </div>
              <ChevronDown 
                size={18} 
                className={`text-gray-500 transition-transform ${showFilters ? 'rotate-180' : ''}`} 
              />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className={`${showFilters ? 'block' : 'hidden'} md:block`}>
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h2 className="text-lg font-semibold mb-4">Categories</h2>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`block w-full text-left px-3 py-2 rounded-md transition ${
                        activeCategory === category.id
                          ? 'bg-primary text-white'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="md:col-span-3">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold">
                  {activeCategory === 'all' 
                    ? 'All Products' 
                    : categories.find(cat => cat.id === activeCategory)?.name}
                </h2>
                <p className="text-gray-500">
                  {filteredProducts.length} products
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <div 
      className="card h-full flex flex-col transition-transform hover:translate-y-[-5px]"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative overflow-hidden rounded-t-lg" style={{ height: '200px' }}>
        <img 
          src={product.image} 
          alt={product.name} 
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ${isHovering ? 'scale-110' : 'scale-100'}`}
        />
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
        <p className="text-2xl font-bold text-primary mb-2">${product.price.toFixed(2)}</p>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{product.description}</p>
        <button 
          onClick={() => onAddToCart(product)} 
          className="btn-primary mt-auto flex items-center justify-center"
        >
          <ShoppingCart size={18} className="mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SupplementsPage;