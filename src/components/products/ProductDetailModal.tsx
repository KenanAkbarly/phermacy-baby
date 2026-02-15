import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Truck, ShieldCheck, Tag, Info } from 'lucide-react';
import { Button } from '../ui/Button';
import { Dialog, DialogContent } from '../ui/Dialog';
import { useCart } from '../../hooks/useCart';
import { useToast } from '../../context/ToastContext';
import type { Product } from '../../types/product';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, isOpen, onClose }) => {
  const { addItem } = useCart();
  const { toast } = useToast();
  const [isAdding, setIsAdding] = React.useState(false);

  if (!product) return null;

  const handleAddToCart = async () => {
    setIsAdding(true);
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    addItem(product);
    toast(`${product.name} səbətə əlavə olundu`, 'success');
    
    setIsAdding(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      {/* Updated DialogContent with responsive height and layout */}
      <DialogContent className="w-[90vw] max-w-4xl p-0 overflow-hidden bg-white dark:bg-zinc-900 border-none shadow-2xl h-[90vh] md:h-[600px]">
        <div className="flex flex-col md:grid md:grid-cols-2 h-full">
          {/* Image Section - Reduced height on mobile */}
          <div className="relative bg-white p-4 md:p-8 flex items-center justify-center border-b md:border-b-0 md:border-r dark:border-zinc-800 h-48 md:h-full shrink-0">
             <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                src={product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain"
             />
             {product.discount && (
                <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-red-500 text-white text-xs md:text-sm font-bold px-2 py-1 md:px-3 md:py-1.5 rounded-full shadow-lg">
                  -{product.discount}% Endirim
                </div>
             )}
          </div>

          {/* Content Section - Scrollable */}
          <div className="flex flex-col h-full overflow-hidden relative">
            <div className="flex-1 overflow-y-auto p-4 md:p-8">
              <div className="space-y-4 md:space-y-6 pb-20"> {/* Padding bottom for sticky button */}
                <div>
                  <div className="flex items-center justify-between mb-2 mt-2 md:mt-0">
                     <span className="text-xs md:text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">
                       {product.brand}
                     </span>
                     <div className="flex items-center text-yellow-400 text-sm bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 rounded-full">
                       <Star className="w-4 h-4 fill-current mr-1" />
                       <span className="font-semibold text-black dark:text-white">{product.rating}</span>
                       <span className="text-gray-500 dark:text-gray-400 ml-1">({product.reviewCount})</span>
                     </div>
                  </div>
                  
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white leading-tight mb-2 md:mb-4">
                    {product.name}
                  </h2>
                  
                  <div className="flex items-baseline gap-3 md:gap-4 mb-4 md:mb-6">
                    <span className="text-2xl md:text-3xl font-bold text-blue-600">
                      {product.price.toFixed(2)} ₼
                    </span>
                    {product.oldPrice && (
                      <span className="text-lg md:text-xl text-gray-400 line-through">
                        {product.oldPrice.toFixed(2)} ₼
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 md:gap-4">
                   <div className="bg-gray-50 dark:bg-white/5 p-3 md:p-4 rounded-xl border dark:border-white/10">
                      <div className="flex items-center gap-2 mb-1 md:mb-2 text-gray-500 dark:text-gray-400 text-xs md:text-sm">
                         <Tag className="w-3 h-3 md:w-4 md:h-4" />
                         Kateqoriya
                      </div>
                      <p className="font-semibold text-sm md:text-base capitalize">{product.category.replace('_', ' ')}</p>
                   </div>
                   <div className="bg-gray-50 dark:bg-white/5 p-3 md:p-4 rounded-xl border dark:border-white/10">
                      <div className="flex items-center gap-2 mb-1 md:mb-2 text-gray-500 dark:text-gray-400 text-xs md:text-sm">
                         <ShieldCheck className="w-3 h-3 md:w-4 md:h-4" />
                         Satıcı
                      </div>
                      <p className="font-semibold text-sm md:text-base">{product.seller}</p>
                   </div>
                   {(product.weight || product.quantity) && (
                     <div className="bg-gray-50 dark:bg-white/5 p-3 md:p-4 rounded-xl border dark:border-white/10 col-span-2">
                        <div className="flex items-center gap-2 mb-1 md:mb-2 text-gray-500 dark:text-gray-400 text-xs md:text-sm">
                           <Info className="w-3 h-3 md:w-4 md:h-4" />
                           Xüsusiyyətlər
                        </div>
                        <p className="font-semibold text-sm md:text-base">
                          {product.weight ? `Çəki: ${product.weight}` : `Say: ${product.quantity} əd`}
                          {product.ageRange && ` • Yaş: ${product.ageRange}`}
                        </p>
                     </div>
                   )}
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 md:p-4 rounded-xl flex items-start gap-3">
                   <Truck className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                   <div>
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100 text-sm mb-1">Pulsuz Çatdırılma</h4>
                      <p className="text-xs text-blue-700 dark:text-blue-300">50 AZN üzəri sifarişlərdə çatdırılma pulsuzdur.</p>
                   </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                  {product.description}
                </p>
              </div>
            </div>

            {/* Sticky Footer for Action */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white dark:bg-zinc-900 border-t dark:border-white/10 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
              <Button 
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/30 h-12 text-lg"
                onClick={handleAddToCart}
                disabled={isAdding}
              >
                {isAdding ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Bəli...
                  </div>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Səbətə at
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;
