import React, { useState } from 'react';
import { useCart } from '../hooks/useCart';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { ArrowLeft, CreditCard, ShieldCheck, Truck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const CheckoutPage: React.FC = () => {
    const { items, total } = useCart();
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);

    if (items.length === 0) {
        navigate('/cart');
        return null; // or loading
    }

    const handleAddressSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStep(2);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handlePayment = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate('/order-success');
        }, 2000);
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <div className="mb-8">
                <Button variant="ghost" className="pl-0" onClick={() => navigate('/cart')}>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Səbətə qayıt
                </Button>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-2/3">
                    {/* Steps Indicator */}
                    <div className="flex items-center justify-between mb-8 relative">
                         <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-secondary -z-10" />
                         <div className={`flex items-center gap-2 bg-background pr-4 ${step >= 1 ? 'text-primary' : 'text-muted-foreground'}`}>
                             <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 1 ? 'border-primary bg-primary text-primary-foreground' : 'border-current'}`}>1</div>
                             <span className="font-medium">Ünvan</span>
                         </div>
                         <div className={`flex items-center gap-2 bg-background px-4 ${step >= 2 ? 'text-primary' : 'text-muted-foreground'}`}>
                             <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 2 ? 'border-primary bg-primary text-primary-foreground' : 'border-current'}`}>2</div>
                             <span className="font-medium">Ödəniş</span>
                         </div>
                         <div className={`flex items-center gap-2 bg-background pl-4 text-muted-foreground`}>
                             <div className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-current">3</div>
                             <span className="font-medium">Təsdiq</span>
                         </div>
                    </div>

                    <AnimatePresence mode="wait">
                       {step === 1 && (
                           <motion.div 
                                key="step1"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                           >
                               <h2 className="text-2xl font-bold mb-6">Çatdırılma məlumatları</h2>
                               <form onSubmit={handleAddressSubmit} className="space-y-6">
                                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                       <div className="space-y-2">
                                           <label className="text-sm font-medium">Ad və Soyad *</label>
                                           <Input required placeholder="Məsələn: Əli Məmmədov" />
                                       </div>
                                       <div className="space-y-2">
                                           <label className="text-sm font-medium">Mobil nömrə *</label>
                                           <Input required type="tel" placeholder="+994 XX XXX XX XX" />
                                       </div>
                                       <div className="space-y-2">
                                           <label className="text-sm font-medium">E-poçt *</label>
                                           <Input required type="email" placeholder="email@example.com" />
                                       </div>
                                       <div className="space-y-2">
                                            <label className="text-sm font-medium">Şəhər *</label>
                                            <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                                                <option>Bakı</option>
                                                <option>Sumqayıt</option>
                                                <option>Gəncə</option>
                                            </select>
                                       </div>
                                   </div>
                                   
                                   <div className="space-y-2">
                                       <label className="text-sm font-medium">Küçə ünvanı *</label>
                                       <textarea className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" required placeholder="Küçə, bina, mənzil..." />
                                   </div>

                                   <div className="space-y-2">
                                       <label className="text-sm font-medium">Əlavə qeyd</label>
                                       <textarea className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="Kuryer üçün qeydlər..." />
                                   </div>

                                   <Button fullWidth size="lg" type="submit">Ödənişə keç</Button>
                               </form>
                           </motion.div>
                       )}

                       {step === 2 && (
                           <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                           >
                               <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-lg p-4 mb-6 flex items-start gap-3">
                                   <ShieldCheck className="w-5 h-5 mt-0.5" />
                                   <div>
                                       <h4 className="font-bold">Test Rejimi</h4>
                                       <p className="text-sm">Bu test tətbiqidir. Heç bir real ödəniş edilmir.</p>
                                   </div>
                               </div>

                               <h2 className="text-2xl font-bold mb-6">Ödəniş</h2>
                               
                               <div className="space-y-6 opacity-60 pointer-events-none select-none grayscale-[0.5]">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Kart nömrəsi</label>
                                        <div className="relative">
                                            <Input value="•••• •••• •••• 3456" readOnly />
                                            <CreditCard className="absolute right-3 top-3 w-4 h-4 text-muted-foreground" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Bitmə tarixi</label>
                                            <Input value="12/25" readOnly />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">CVV</label>
                                            <Input value="***" type="password" readOnly />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Kart sahibi</label>
                                        <Input value="TEST USER" readOnly />
                                    </div>
                               </div>

                               <div className="mt-8 flex gap-4">
                                   <Button variant="outline" onClick={() => setStep(1)}>Geri</Button>
                                   <Button 
                                    className="bg-gradient-to-r from-primary to-blue-600 w-full" 
                                    size="lg" 
                                    fullWidth
                                    onClick={handlePayment}
                                    disabled={loading}
                                   >
                                       {loading ? 'Emal edilir...' : 'Ödənişi Tamamla (TEST)'}
                                   </Button>
                               </div>
                           </motion.div>
                       )}
                    </AnimatePresence>
                </div>

                {/* Sidebar Summary */}
                <div className="lg:w-1/3">
                    <div className="bg-card border rounded-xl p-6 shadow-sm sticky top-24">
                        <h3 className="font-bold text-lg mb-4">Sifariş xülasəsi</h3>
                        <div className="space-y-3 mb-6">
                            {items.map(item => (
                                <div key={item.product.id} className="flex justify-between text-sm">
                                    <span className="text-muted-foreground line-clamp-1 flex-1 pr-2">{item.quantity}x {item.product.name}</span>
                                    <span>{(item.product.price * item.quantity).toFixed(2)} ₼</span>
                                </div>
                            ))}
                        </div>
                        <div className="border-t pt-4 space-y-2">
                            <div className="flex justify-between font-bold text-lg">
                                <span>Cəmi</span>
                                <span className="text-primary">{total.toFixed(2)} ₼</span>
                            </div>
                        </div>
                        
                        <div className="mt-6 bg-muted/50 p-4 rounded-lg flex gap-3 text-sm">
                             <Truck className="w-5 h-5 text-primary shrink-0" />
                             <div>
                                 <p className="font-semibold">Sürətli çatdırılma</p>
                                 <p className="text-muted-foreground">1-3 iş günü ərzində</p>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
