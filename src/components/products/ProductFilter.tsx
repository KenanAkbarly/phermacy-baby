import React from 'react';
import { Slider } from '../ui/Slider';
import { Checkbox } from '../ui/Checkbox';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FilterProps {
  categories: { name: string; count: number }[];
  priceRange: number[];
  setPriceRange: React.Dispatch<React.SetStateAction<number[]>>;
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
  selectedBrands: string[];
  setSelectedBrands: React.Dispatch<React.SetStateAction<string[]>>;
  selectedRatings: number[];
  setSelectedRatings: React.Dispatch<React.SetStateAction<number[]>>;
  brands: string[];
}

const FilterSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <div className="border-b py-4">
      <div 
        className="flex items-center justify-between cursor-pointer mb-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-semibold text-sm">{title}</h3>
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pt-2 pb-1 space-y-2">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ProductFilter: React.FC<FilterProps> = ({
  categories,
  priceRange,
  setPriceRange,
  selectedCategories,
  setSelectedCategories,
  selectedBrands,
  setSelectedBrands,
  brands,
  selectedRatings,
  setSelectedRatings
}) => {

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev: string[]) => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleBrandChange = (brand: string) => {
     setSelectedBrands((prev: string[]) => 
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  }
  
  const handleRatingChange = (rating: number) => {
      setSelectedRatings((prev: number[]) =>
        prev.includes(rating)
            ? prev.filter(r => r !== rating)
            : [...prev, rating]
      );
  }

  return (
    <div className="space-y-1">
      <h2 className="text-xl font-bold mb-4">Filterlər</h2>
      
      {/* Categories */}
      <FilterSection title="Kateqoriya">
        {categories.map((cat) => (
          <div key={cat.name} className="flex items-center space-x-2">
            <Checkbox 
              id={`cat-${cat.name}`} 
              checked={selectedCategories.includes(cat.name)}
              onCheckedChange={() => handleCategoryChange(cat.name)}
            />
            <label
              htmlFor={`cat-${cat.name}`}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex-1 flex justify-between cursor-pointer"
            >
              <span className="capitalize">{cat.name.replace('_', ' ')}</span>
              <span className="text-muted-foreground text-xs">{cat.count}</span>
            </label>
          </div>
        ))}
      </FilterSection>

      {/* Price Range */}
      <FilterSection title="Qiymət Aralığı">
        <div className="px-2 pt-4 pb-2">
            <Slider
                defaultValue={[0, 500]}
                max={500}
                step={1}
                value={priceRange}
                onValueChange={setPriceRange}
            />
        </div>
        <div className="flex items-center justify-between text-sm mt-2">
            <div className="border rounded px-2 py-1 min-w-[60px] text-center">
                {priceRange[0]} ₼
            </div>
            <span>-</span>
             <div className="border rounded px-2 py-1 min-w-[60px] text-center">
                {priceRange[1]} ₼
            </div>
        </div>
      </FilterSection>

      {/* Brands */}
      <FilterSection title="Brend">
         <div className="max-h-48 overflow-y-auto pr-2 space-y-2 scrollbar-thin scrollbar-thumb-rounded">
            {brands.map(brand => (
                 <div key={brand} className="flex items-center space-x-2">
                    <Checkbox 
                        id={`brand-${brand}`}
                        checked={selectedBrands.includes(brand)}
                        onCheckedChange={() => handleBrandChange(brand)}
                    />
                    <label 
                        htmlFor={`brand-${brand}`}
                        className="text-sm font-medium leading-none cursor-pointer"
                    >
                        {brand}
                    </label>
                 </div>
            ))}
         </div>
      </FilterSection>

       {/* Ratings */}
      <FilterSection title="Reytinq">
          {[5, 4, 3].map(rating => (
              <div key={rating} className="flex items-center space-x-2">
                  <Checkbox 
                      id={`rating-${rating}`}
                      checked={selectedRatings.includes(rating)}
                      onCheckedChange={() => handleRatingChange(rating)}
                  />
                  <label htmlFor={`rating-${rating}`} className="flex items-center cursor-pointer">
                      <div className="flex text-yellow-500">
                          {[...Array(5)].map((_, i) => (
                              <span key={i} className={i < rating ? "fill-current" : "text-gray-300"}>★</span>
                          ))}
                      </div>
                      <span className="text-sm ml-2">& Yuxarı</span>
                  </label>
              </div>
          ))}
      </FilterSection>

    </div>
  );
};

export default ProductFilter;
