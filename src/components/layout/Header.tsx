import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { useCart } from '../../hooks/useCart';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Search, Sun, Moon, Menu, X, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../../data/products';
import type { Product } from '../../types/product';

import ProductDetailModal from '../products/ProductDetailModal';

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const { items, total, itemCount, removeItem } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (searchTerm.length > 1) {
      const results = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase())
      ).slice(0, 5);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    setSearchTerm(''); // Clear search on selection
    setIsSearchFocused(false);
  };

  return (
    <>
    <header className={`sticky top-0 h-20 flex items-center z-50 w-full border-b backdrop-blur transition-all duration-200 ${
      isScrolled ? 'bg-background/80 shadow-md '  : 'bg-background/0 border-transparent '
    } pt-0`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1, rotate: 10 }}
            className="bg-primary text-primary-foreground p-2 rounded-xl"
          >
            <span className="font-bold text-xl">P</span>
          </motion.div>
          <motion.span 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent hidden sm:block"
          >
            PharmaBaby
          </motion.span>
        </Link>

        {/* Search Bar */}
        <div className="hidden md:block flex-1 max-w-xl px-8 relative">
          <motion.div
             initial={false}
             animate={isSearchFocused ? { scale: 1.02 } : { scale: 1 }}
             className="relative"
          >
            <Input
              type="text"
              placeholder="Məhsul, brend və ya kateqoriya axtar..."
              className="pl-10 pr-4 h-11 rounded-full border-2 focus:border-primary/50 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
            />
            <Search className="absolute left-3.5 top-3 text-muted-foreground w-5 h-5" />
            
            {/* Search Results Dropdown */}
            <AnimatePresence>
              {isSearchFocused && searchResults.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-card border rounded-xl shadow-xl overflow-hidden z-50"
                >
                  <ul>
                    {searchResults.map(product => (
                      <li key={product.id}>
                        <button 
                          onClick={() => handleProductClick(product)}
                          className="flex items-center gap-3 p-3 w-full text-left hover:bg-muted transition-colors cursor-pointer"
                        >
                          <img src={product.image} alt={product.name} className="w-10 h-10 object-cover rounded" />
                          <div>
                            <p className="font-medium text-sm line-clamp-1">{product.name}</p>
                            <p className="text-xs text-muted-foreground">{product.price.toFixed(2)} AZN</p>
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

  {/* const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  // ... (existing effects)

  return (
    // ... */}
        {/* Right Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          
          {/* Mobile Search Toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
          >
            <Search className="w-5 h-5" />
          </Button>

          {/* Theme Toggle */}
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="relative overflow-hidden">
            <AnimatePresence mode='wait'>
              {theme === 'dark' ? (
                <motion.div
                    key="moon"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <Moon className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                    key="sun"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <Sun className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>

          {/* Cart Icon (Mini Cart) */}
          <div className="relative group">
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
                    {itemCount}
                  </span>
                )}
              </Button>
            </Link>
            
            {/* Mini Cart Dropdown (Hover) */}
            <div className="absolute right-0 top-full mt-2 w-80 bg-card border rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
               <div className="p-4">
                  <h3 className="font-semibold mb-3">Səbət ({itemCount})</h3>
                  <div className="max-h-60 overflow-y-auto space-y-3">
                     {items.length === 0 ? (
                        <p className="text-sm text-muted-foreground text-center py-4">Səbət boşdur</p>
                     ) : (
                        items.slice(0, 3).map(item => (
                           <div key={item.product.id} className="flex gap-3 items-center">
                              <img src={item.product.image} alt={item.product.name} className="w-10 h-10 object-contain bg-white rounded" />
                              <div className="flex-1 min-w-0">
                                 <p className="text-sm font-medium truncate">{item.product.name}</p>
                                 <p className="text-xs text-muted-foreground">{item.quantity} x {item.product.price} ₼</p>
                              </div>
                              <Button variant="ghost" size="icon" className="h-6 w-6" onClick={(e) => { e.preventDefault(); removeItem(item.product.id); }}>
                                 <X className="w-3 h-3" />
                              </Button>
                           </div>
                        ))
                     )}
                     {items.length > 3 && (
                        <p className="text-xs text-center text-muted-foreground">+ {items.length - 3} məhsul daha</p>
                     )}
                  </div>
                  
                  {items.length > 0 && (
                     <div className="mt-4 pt-4 border-t space-y-3">
                        <div className="flex justify-between font-semibold text-sm">
                           <span>Cəmi:</span>
                           <span>{total.toFixed(2)} ₼</span>
                        </div>
                        <Link to="/cart" className="block">
                           <Button fullWidth size="sm">Səbətə bax</Button>
                        </Link>
                     </div>
                  )}
               </div>
            </div>
          </div>

          {/* User Actions (Desktop) */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost">Daxil ol</Button>
            <Button className="bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 transition-opacity">
              Qeydiyyat
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>
      
      <AnimatePresence>
        {isMobileSearchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-b bg-background absolute top-20 left-0 right-0 z-40 overflow-hidden"
          >
            <div className="container px-4 py-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Məhsul, brend və ya kateqoriya axtar..."
                  className="w-full pl-10 h-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  autoFocus
                />
                <Search className="absolute left-3 top-2.5 text-muted-foreground w-5 h-5" />
              </div>
              
               {/* Mobile Search Results */}
               {searchResults.length > 0 && searchTerm.length > 1 && (
                  <div className="mt-2 bg-card border rounded-xl shadow-lg overflow-hidden">
                    <ul>
                      {searchResults.map(product => (
                        <li key={product.id}>
                          <button 
                            onClick={() => handleProductClick(product)}
                            className="flex items-center gap-3 p-3 w-full text-left hover:bg-muted transition-colors border-b last:border-none"
                          >
                            <img src={product.image} alt={product.name} className="w-10 h-10 object-cover rounded" />
                            <div>
                               <p className="font-medium text-sm line-clamp-1">{product.name}</p>
                               <p className="text-xs text-muted-foreground">{product.price.toFixed(2)} AZN</p>
                            </div>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
               )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

       {/* Mobile Menu */}
       <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t bg-background"
          >
            <div className="container px-4 py-4 space-y-4">
              <div className="flex flex-col gap-2">
                <Button variant="outline" fullWidth>Daxil ol</Button>
                <Button fullWidth>Qeydiyyat</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    <ProductDetailModal 
      product={selectedProduct}
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
    />
    </>
  );
};

export default Header;
