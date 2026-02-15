import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Eye, Star, Info } from 'lucide-react';
import { Button } from '../ui/Button';
import type { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
}

import { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { useToast } from '../../context/ToastContext';
import ProductDetailModal from './ProductDetailModal';
import { Check } from 'lucide-react';

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();
  const { toast } = useToast();
  const [isAdding, setIsAdding] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCheck, setShowCheck] = useState(false);

  const {
    name,
    brand,
    price,
    oldPrice,
    image,
    isNew,
    isPopular,
    discount,
    rating,
    reviewCount,
    seller,
    ageRange,
    weight,
    quantity
  } = product;

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isAdding) return;

    setIsAdding(true);
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    addItem(product);
    toast(`${name} səbətə əlavə olundu`, 'success');
    
    setShowCheck(true);
    setIsAdding(false);

    setTimeout(() => {
      setShowCheck(false);
    }, 2000);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="group relative bg-card border rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-white p-4">
          <motion.img
            src={image}
            alt={name}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full object-contain"
            loading="lazy"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {isNew && (
              <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded shadow-sm animate-pulse">
                YENİ
              </span>
            )}
            {isPopular && (
              <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded shadow-sm">
                POPULYAR
              </span>
            )}
          </div>

          {discount && (
            <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
              -{discount}%
            </div>
          )}

          {/* Action Buttons Overlay */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
             <Button 
               variant="secondary" 
               size="icon" 
               className="rounded-full shadow-lg hover:scale-110 transition-transform"
               onClick={(e) => {
                 e.stopPropagation();
                 setIsModalOpen(true);
               }}
             >
               <Eye className="w-4 h-4" />
             </Button>
             <Button 
               variant="secondary" 
               size="icon" 
               className="rounded-full shadow-lg hover:scale-110 transition-transform text-red-500 hover:text-red-600"
               onClick={(e) => e.stopPropagation()}
             >
               <Heart className="w-4 h-4" />
             </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          <div className="mb-2 flex items-center justify-between">
             <span className="text-xs uppercase text-muted-foreground font-semibold tracking-wider">
               {brand}
             </span>
             <div className="flex items-center text-yellow-400 text-xs">
               <Star className="w-3 h-3 fill-current" />
               <span className="ml-1 font-medium text-foreground">{rating}</span>
               <span className="ml-1 text-muted-foreground">({reviewCount})</span>
             </div>
          </div>

          <h3 className="font-semibold text-foreground mb-2 line-clamp-2 min-h-[3rem]" title={name}>
            {name}
          </h3>

          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
             {ageRange && (
               <span className="flex items-center bg-secondary/50 px-2 py-1 rounded">
                 {ageRange}
               </span>
             )}
             {(weight || quantity) && (
               <span className="flex items-center bg-secondary/50 px-2 py-1 rounded">
                 {weight || `${quantity} əd`}
               </span>
             )}
          </div>

          <div className="mt-auto pt-4 border-t flex items-center justify-between">
             <div className="flex flex-col">
               {oldPrice && (
                 <span className="text-xs text-muted-foreground line-through">
                   {oldPrice.toFixed(2)} AZN
                 </span>
               )}
               <span className="text-lg font-bold text-primary">
                 {price.toFixed(2)} AZN
               </span>
             </div>
             
             <Button 
               size="sm" 
               className={`transition-all shadow-md group-hover:scale-105 ${
                 showCheck ? "bg-green-500 hover:bg-green-600" : "bg-gradient-to-r from-primary to-blue-600 hover:opacity-90"
               }`}
               onClick={handleAddToCart}
               disabled={isAdding}
             >
               {isAdding ? (
                 <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
               ) : showCheck ? (
                 <Check className="w-4 h-4 mr-2" />
               ) : (
                 <ShoppingCart className="w-4 h-4 mr-2" />
               )}
               {showCheck ? "Əlavə olundu" : "Səbət"}
             </Button>
          </div>
          
          <div className="mt-2 flex items-center gap-1 text-[10px] text-muted-foreground">
             <Info className="w-3 h-3" />
             <span>Satıcı: {seller}</span>
          </div>
        </div>
      </motion.div>

      <ProductDetailModal 
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ProductCard;
