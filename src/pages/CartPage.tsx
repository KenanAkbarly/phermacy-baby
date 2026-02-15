import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CartPage: React.FC = () => {
  const { items, removeItem, updateQuantity, total, itemCount } = useCart();
  const navigate = useNavigate();
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);

  // Mock promo code logic
  const handleApplyPromo = () => {
    if (promoCode.toLowerCase() === 'welcome10') {
        setDiscount(total * 0.1);
        setPromoApplied(true);
    } else {
        alert('Keçərsiz promo kod');
    }
  };

  const finalTotal = total - discount;
  const isFreeShipping = finalTotal > 50;

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
        <div className="bg-secondary/30 p-8 rounded-full mb-6">
            <ShoppingBag className="w-16 h-16 text-muted-foreground" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Səbətiniz boşdur</h1>
        <p className="text-muted-foreground mb-8 text-lg">
          Hələ heç bir məhsul əlavə etməmisiniz.
        </p>
        <Button size="lg" onClick={() => navigate('/')}>
          Alış-verişə başla
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
        Alış-veriş səbəti <span className="text-muted-foreground text-lg font-normal">({itemCount} məhsul)</span>
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Cart Items */}
        <div className="flex-1 space-y-4">
            <AnimatePresence>
                {items.map((item) => (
                    <motion.div
                        key={item.product.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border p-4 rounded-xl bg-card shadow-sm"
                    >
                        <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center shrink-0">
                            <img src={item.product.image} alt={item.product.name} className="w-full h-full object-contain p-2" />
                        </div>

                        <div className="flex-1 min-w-0 space-y-1">
                            <Link to={`/product/${item.product.id}`} className="font-semibold text-lg hover:text-primary transition-colors line-clamp-1">
                                {item.product.name}
                            </Link>
                            <p className="text-sm text-muted-foreground">{item.product.brand} | {item.product.category}</p>
                            <div className="flex items-center gap-1 text-xs text-green-600 font-medium">
                                <Check className="w-3 h-3" /> Stokda var
                            </div>
                        </div>

                        <div className="flex flex-row sm:flex-col items-center gap-4 sm:gap-1 w-full sm:w-auto justify-between sm:justify-end">
                             <div className="flex items-center border rounded-md">
                                <Button 
                                    variant="ghost" 
                                    size="icon" 
                                    className="h-8 w-8 rounded-none"
                                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                    disabled={item.quantity <= 1}
                                >
                                    <Minus className="w-3 h-3" />
                                </Button>
                                <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                                <Button 
                                    variant="ghost" 
                                    size="icon" 
                                    className="h-8 w-8 rounded-none"
                                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                    disabled={item.quantity >= 10}
                                >
                                    <Plus className="w-3 h-3" />
                                </Button>
                             </div>

                             <div className="text-right">
                                <div className="font-bold text-lg">{(item.product.price * item.quantity).toFixed(2)} ₼</div>
                                <div className="text-xs text-muted-foreground">{item.product.price} ₼ / ədəd</div>
                             </div>

                             <Button 
                                variant="ghost" 
                                size="icon"
                                className="text-destructive hover:bg-destructive/10"
                                onClick={() => removeItem(item.product.id)}
                            >
                                <Trash2 className="w-4 h-4" />
                            </Button>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>

        {/* Summary Sidebar */}
        <div className="lg:w-1/3 space-y-6">
            <div className="bg-card border rounded-xl p-6 shadow-sm sticky top-24">
                <h2 className="text-xl font-bold mb-4">Sifariş xülasəsi</h2>
                
                <div className="space-y-3 text-sm mb-6">
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Ara cəm</span>
                        <span className="font-medium">{total.toFixed(2)} ₼</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Çatdırılma</span>
                        <span className="font-medium text-green-600">{isFreeShipping ? 'PULSUZ' : '5.00 ₼'}</span>
                    </div>
                    {promoApplied && (
                        <div className="flex justify-between text-green-600">
                             <span>Endirim (Promo)</span>
                             <span>-{discount.toFixed(2)} ₼</span>
                        </div>
                    )}
                    <div className="border-t pt-3 flex justify-between items-center text-lg font-bold">
                        <span>Ümumi</span>
                        <span className="text-primary">{finalTotal.toFixed(2)} ₼</span>
                    </div>
                </div>

                {!isFreeShipping && (
                    <div className="bg-blue-50 text-blue-700 text-xs p-3 rounded-lg mb-6 flex items-start gap-2">
                        <ShoppingBag className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>50 ₼ üzəri sifarişlərdə çatdırılma pulsuzdur. Pulsuz çatdırılma üçün daha {(50 - finalTotal).toFixed(2)} ₼ dəyərində məhsul əlavə edin.</span>
                    </div>
                )}

                <div className="space-y-3 mb-6">
                    <div className="flex gap-2">
                        <Input 
                            placeholder="Promo kod" 
                            value={promoCode}
                            onChange={(e) => setPromoCode(e.target.value)}
                            disabled={promoApplied}
                        />
                        <Button variant="outline" onClick={handleApplyPromo} disabled={promoApplied}>
                            Tətbiq et
                        </Button>
                    </div>
                    {promoApplied && <p className="text-xs text-green-600">Promo kod tətbiq edildi!</p>}
                </div>

                <Button 
                    fullWidth 
                    size="lg" 
                    className="bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 shadow-md group"
                    onClick={() => navigate('/checkout')}
                >
                    Sifarişi rəsmiləşdir
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    <ShieldCheck className="w-4 h-4 text-green-600" />
                    <span>Təhlükəsiz ödəniş</span>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default CartPage;
