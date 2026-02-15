import React from 'react';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../hooks/useCart';

const OrderSuccessPage: React.FC = () => {
  const navigate = useNavigate();
  const { clearCart } = useCart();
  
  React.useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="bg-green-100 p-6 rounded-full text-green-600 mb-6"
      >
        <Check className="w-16 h-16" />
      </motion.div>
      
      <h1 className="text-4xl font-bold mb-4">Sifarişiniz qəbul edildi!</h1>
      <p className="text-muted-foreground text-lg mb-8 max-w-md">
        Təşəkkür edirik! Sifarişiniz təsdiqləndi və tezliklə hazırlanacaq.
        Sifariş nömrəsi: <span className="font-mono font-bold text-foreground">#ORD-{Math.floor(Math.random() * 100000)}</span>
      </p>
      
      <div className="flex gap-4">
        <Button variant="outline" onClick={() => navigate('/')}>
          Ana səhifəyə qayıt
        </Button>
        <Button onClick={() => navigate('/')} className="bg-gradient-to-r from-primary to-blue-600">
          Alış-verişə davam et
        </Button>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
