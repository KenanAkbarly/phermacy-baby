import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, CreditCard } from 'lucide-react';
import { Button } from '../ui/Button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary/30 pt-16 pb-8 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand & About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                <span className="font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                PharmaBaby
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Körpəniz və sizin üçün ən keyfiyyətli məhsullar. 
              Sürətli çatdırılma və sərfəli qiymətlər.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-pink-100 hover:text-pink-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-sky-100 hover:text-sky-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Şirkət</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">Haqqımızda</Link></li>
              <li><Link to="/careers" className="hover:text-primary transition-colors">Karyera</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Məxfilik Siyasəti</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">İstifadə Şərtləri</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-bold text-lg mb-4">Müştəri Xidmətləri</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/faq" className="hover:text-primary transition-colors">Tez-tez verilən suallar</Link></li>
              <li><Link to="/shipping" className="hover:text-primary transition-colors">Çatdırılma</Link></li>
              <li><Link to="/returns" className="hover:text-primary transition-colors">Qaytarma şərtləri</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Bizimlə əlaqə</Link></li>
              <li><Link to="/track" className="hover:text-primary transition-colors">Sifarişi izlə</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Əlaqə</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Bakı şəhəri, Nərimanov rayonu,<br />Aşıq Molla Cümə küç. 19B</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+994 50 123 45 67</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>support@pharmababy.az</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} PharmaBaby. Bütün hüquqlar qorunur.
          </p>
          <div className="flex items-center gap-3 opacity-60 grayscale hover:grayscale-0 transition-all">
             {/* Payment Icons Placeholder using generic CreditCard icon repeatedly/styled differently or text */}
             <div className="flex gap-2">
                <div className="bg-white p-1 rounded border shadow-sm"><CreditCard className="w-6 h-6 text-blue-800" /></div>
                <div className="bg-white p-1 rounded border shadow-sm"><CreditCard className="w-6 h-6 text-orange-600" /></div>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
