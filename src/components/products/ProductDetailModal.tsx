import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, X, Truck, ShieldCheck, Tag, Info } from 'lucide-react';
import { Button } from '../ui/Button';
import { Dialog, DialogContent, DialogClose } from '../ui/Dialog';
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
      <DialogContent className="sm:max-w-4xl p-0 overflow-hidden bg-white dark:bg-zinc-900 border-none shadow-2xl">
        <div className="grid md:grid-cols-2 h-full">
          {/* Image Section */}
          <div className="relative bg-white p-8 flex items-center justify-center border-r dark:border-zinc-800">
             <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                src={product.image}
                alt={product.name}
                className="max-h-[400px] w-full object-contain"
             />
             {product.discount && (
                <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1.5 rounded-full shadow-lg">
                  -{product.discount}% Endirim
                </div>
             )}
          </div>

          {/* Content Section */}
          <div className="p-8 flex flex-col h-full overflow-y-auto max-h-[90vh]">
            <DialogClose className="absolute right-4 top-4 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors z-10">
              <X className="w-5 h-5" />
            </DialogClose>

            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                   <span className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">
                     {product.brand}
                   </span>
                   <div className="flex items-center text-yellow-400 text-sm bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 rounded-full">
                     <Star className="w-4 h-4 fill-current mr-1" />
                     <span className="font-semibold text-black dark:text-white">{product.rating}</span>
                     <span className="text-gray-500 dark:text-gray-400 ml-1">({product.reviewCount} rəy)</span>
                   </div>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
                  {product.name}
                </h2>
                
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-3xl font-bold text-blue-600">
                    {product.price.toFixed(2)} ₼
                  </span>
                  {product.oldPrice && (
                    <span className="text-xl text-gray-400 line-through">
                      {product.oldPrice.toFixed(2)} ₼
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <div className="bg-gray-50 dark:bg-white/5 p-4 rounded-xl border dark:border-white/10">
                    <div className="flex items-center gap-2 mb-2 text-gray-500 dark:text-gray-400 text-sm">
                       <Tag className="w-4 h-4" />
                       Kateqoriya
                    </div>
                    <p className="font-semibold capitalize">{product.category.replace('_', ' ')}</p>
                 </div>
                 <div className="bg-gray-50 dark:bg-white/5 p-4 rounded-xl border dark:border-white/10">
                    <div className="flex items-center gap-2 mb-2 text-gray-500 dark:text-gray-400 text-sm">
                       <ShieldCheck className="w-4 h-4" />
                       Satıcı
                    </div>
                    <p className="font-semibold">{product.seller}</p>
                 </div>
                 {(product.weight || product.quantity) && (
                   <div className="bg-gray-50 dark:bg-white/5 p-4 rounded-xl border dark:border-white/10 col-span-2">
                      <div className="flex items-center gap-2 mb-2 text-gray-500 dark:text-gray-400 text-sm">
                         <Info className="w-4 h-4" />
                         Xüsusiyyətlər
                      </div>
                      <p className="font-semibold">
                        {product.weight ? `Çəki: ${product.weight}` : `Say: ${product.quantity} əd`}
                        {product.ageRange && ` • Yaş: ${product.ageRange}`}
                      </p>
                   </div>
                 )}
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl flex items-start gap-3">
                 <Truck className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                 <div>
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 text-sm mb-1">Pulsuz Çatdırılma</h4>
                    <p className="text-xs text-blue-700 dark:text-blue-300">50 AZN üzəri sifarişlərdə çatdırılma pulsuzdur.</p>
                 </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                {product.description}
              </p>

              <div className="pt-4 mt-auto">
                <Button 
                   className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/30 h-12 text-lg"
                   onClick={handleAddToCart}
                   disabled={isAdding}
                >
                   {isAdding ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Səbətə əlavə edilir...
                      </div>
                   ) : (
                      <>
                        <ShoppingCart className="w-5 h-5 mr-2" />
                        Səbətə əlavə et
                      </>
                   )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;
