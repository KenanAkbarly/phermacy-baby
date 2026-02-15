import React, { useState, useMemo } from 'react';
import { products } from '../data/products';
import ProductFilter from '../components/products/ProductFilter';
import ProductGrid from '../components/products/ProductGrid';
import Footer from '../components/layout/Footer';
import { Button } from '../components/ui/Button';
import { Filter } from 'lucide-react';

const HomePage: React.FC = () => {
  // State for filters
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  
  // State for grid/pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('recommended');
  
  // Mobile filter drawer state
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Derived data
  const brands = useMemo(() => Array.from(new Set(products.map(p => p.brand))), []);
  const categories = useMemo(() => {
    const cats = products.map(p => p.category);
    const uniqueCats = Array.from(new Set(cats));
    return uniqueCats.map(c => ({
      name: c,
      count: products.filter(p => p.category === c).length
    }));
  }, []);

  // Filter Logic
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Price
      if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
      
      // Category
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) return false;
      
      // Brand
      if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) return false;

      // Rating
      if (selectedRatings.length > 0) {
          if (!product.rating) return false;
          // Check if product rating is >= any selected rating (assuming "4 stars & up")
          // Logic: if 4 is selected, show 4.0 - 5.0. 
          // Since it's a checkbox list, we might want "match any selected" or "match min".
          // Prompt says "4+ ulduz", "3+ ulduz". 
          // If multiple selected, usually we take the lowest or union. 
          // Let's assume union of ranges. e.g. 4+ selected -> >=4.
          const matchesRating = selectedRatings.some(r => (product.rating || 0) >= r);
          if (!matchesRating) return false;
      }

      return true;
    });
  }, [priceRange, selectedCategories, selectedBrands, selectedRatings]);

  // Sorting Logic
  const sortedProducts = useMemo(() => {
    let sorted = [...filteredProducts];
    switch (sortBy) {
        case 'price-asc':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'rating-desc':
             sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
             break;
        case 'newest':
            sorted.sort((a, b) => (a.isNew === b.isNew) ? 0 : a.isNew ? -1 : 1);
            break;
        default:
            // Recommended (default) - maybe simply ID or isPopular
            sorted.sort((a, b) => (b.isPopular === a.isPopular) ? 0 : b.isPopular ? -1 : 1);
            break;
    }
    return sorted;
  }, [filteredProducts, sortBy]);

  // Pagination Logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-4">
             <Button onClick={() => setIsFilterOpen(!isFilterOpen)} variant="outline" className="w-full">
                <Filter className="w-4 h-4 mr-2" />
                Filterlər
             </Button>
          </div>

          {/* Sidebar Filters (Desktop) */}
          <aside className={`lg:w-1/4 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <ProductFilter 
                categories={categories}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                brands={brands}
                selectedBrands={selectedBrands}
                setSelectedBrands={setSelectedBrands}
                selectedRatings={selectedRatings}
                setSelectedRatings={setSelectedRatings}
            />
          </aside>

          {/* Product Grid */}
          <main className="lg:w-3/4">
            <ProductGrid 
                products={currentProducts}
                totalProducts={filteredProducts.length}
                currentPage={currentPage}
                setCurrentPage={(page) => { setCurrentPage(page); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                productsPerPage={productsPerPage}
                viewMode={viewMode}
                setViewMode={setViewMode}
                sortBy={sortBy}
                setSortBy={setSortBy}
            />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
