import React from 'react';
import ProductCard from './ProductCard';
import type { Product } from '../../types/product';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { ChevronLeft, ChevronRight, LayoutGrid, List } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  totalProducts: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  productsPerPage: number;
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  totalProducts,
  currentPage,
  setCurrentPage,
  productsPerPage,
  viewMode,
  setViewMode,
  sortBy,
  setSortBy
}) => {
  
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="flex-1">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <p className="text-sm text-muted-foreground">
           <span className="font-bold text-foreground">{totalProducts}</span> məhsul tapıldı
        </p>

        <div className="flex items-center gap-4">
          <select 
            className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="recommended">Tövsiyə olunan</option>
            <option value="price-asc">Ən aşağı qiymət</option>
            <option value="price-desc">Ən yüksək qiymət</option>
            <option value="rating-desc">Ən yüksək reytinq</option>
            <option value="newest">Yenilər</option>
          </select>

          <div className="flex items-center border rounded-md">
            <Button
              variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
              size="icon"
              onClick={() => setViewMode('grid')}
              className="rounded-none rounded-l-md"
            >
              <LayoutGrid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'secondary' : 'ghost'}
              size="icon"
              onClick={() => setViewMode('list')}
              className="rounded-none rounded-r-md"
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Grid */}
      {products.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
              <p className="text-xl text-muted-foreground">Məhsul tapılmadı.</p>
              <Button variant="link" onClick={() => window.location.reload()}>Bütün filtrləri təmizlə</Button>
          </div>
      ) : (
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className={viewMode === 'grid' 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" 
                : "flex flex-col gap-4"
            }
        >
            {products.map((product) => (
            <div key={product.id} className={viewMode === 'list' ? "w-full" : ""}>
                <ProductCard product={product} />
            </div>
            ))}
        </motion.div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-8 flex justify-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          {[...Array(totalPages)].map((_, i) => (
            <Button
              key={i}
              variant={currentPage === i + 1 ? "default" : "outline"}
              size="icon"
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </Button>
          ))}

          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
