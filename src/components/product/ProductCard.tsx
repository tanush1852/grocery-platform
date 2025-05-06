import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Leaf } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { Product } from '../../data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      category: product.category,
      unit: product.unit
    });
  };

  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      {product.organic && (
        <div className="absolute top-2 left-2 z-10 bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
          <Leaf className="h-3 w-3 mr-1" />
          Organic
        </div>
      )}
      
      <Link to={`/product/${product.id}`} className="block">
        <div className="h-48 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold text-neutral-800 mb-1 truncate">{product.name}</h3>
          <p className="text-sm text-neutral-600 mb-2 line-clamp-2">{product.description}</p>
          
          <div className="flex justify-between items-center mt-2">
            <span className="text-lg font-bold text-neutral-900">
              ${product.price.toFixed(2)}
              <span className="text-sm font-normal text-neutral-500 ml-1">/ {product.unit}</span>
            </span>
            
            <button 
              onClick={handleAddToCart}
              className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-full transition-colors duration-200"
              aria-label="Add to cart"
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;