import type { Product } from '../types/product';
import { v4 as uuidv4 } from 'uuid';
import Image1 from "../images/image.png"
import Image2 from "../images/image2.png"
import Image3 from "../images/image3.png"
import Image4 from "../images/image4.png"
import Image5 from "../images/image5.png"
import Image6 from "../images/image6.png"
import Image7 from "../images/image7.png"
import Image8 from "../images/image8.png"
import Image9 from "../images/image9.png"
import Image10 from "../images/image10.png"
import Image11 from "../images/image11.png"
import Image12 from "../images/image12.png"
import Image13 from "../images/image13.png"
import Image14 from "../images/image14.png"
import Image15 from "../images/image15.png"
import Image16 from "../images/image16.png"
import Image17 from "../images/image17.png"
import Image18 from "../images/image18.png"
import Image19 from "../images/image19.png"
import Image20 from "../images/image20.png"
import Image21 from "../images/image21.png"
import Image22 from "../images/image22.png"
import Image23 from "../images/image23.png"
import Image24 from "../images/image24.png"
import Image25 from "../images/image25.png"
import Image26 from "../images/image26.png"
import Image27 from "../images/image27.png"
import Image28 from "../images/image28.png"
import Image29 from "../images/image29.png"
import Image30 from "../images/image30.png"

export const products: Product[] = [
  // 1. Friso Gold 1 (Bazarstore) - Image1
  {
    id: uuidv4(),
    name: "Friso Gold 1 (400g)",
    brand: "Friso",
    category: "uşaq_qidası",
    price: 20.55,
    seller: "Bazarstore",
    image: Image1,
    description: "Holland istehsalı, yüksək keyfiyyətli uşaq qidası. 0-6 ay arası körpələr üçün.",
    ageRange: "0-6 ay",
    weight: "400g",
    inStock: true,
    rating: 4.8,
    reviewCount: 156,
    tags: ["populyar", "premium", "hollandiya"],
    isNew: false,
    isPopular: true,
  },
  
  // 2. Friso Gold 1 (BIRMARKET) - Image2
  {
    id: uuidv4(),
    name: "Friso Gold 1 (400g)",
    brand: "Friso",
    category: "uşaq_qidası",
    price: 21.00,
    seller: "BIRMARKET",
    image: Image2,
    description: "Holland istehsalı, yüksək keyfiyyətli uşaq qidası. 0-6 ay arası körpələr üçün.",
    ageRange: "0-6 ay",
    weight: "400g",
    inStock: true,
    rating: 4.8,
    reviewCount: 89,
    tags: ["premium", "hollandiya"],
    isNew: false,
    isPopular: true,
  },
  
  // 3. Pampers New Baby-Dry N2 - Image3
  {
    id: uuidv4(),
    name: "Pampers New Baby-Dry N2 (94əd)",
    brand: "Pampers",
    category: "beziklər",
    price: 63.99,
    seller: "Bazarstore",
    image: Image3,
    description: "Yüksək udma qabiliyyətli bezik. 4-8 kq körpələr üçün jumbo paket.",
    ageRange: "4-8 kq",
    quantity: 94,
    inStock: true,
    rating: 4.9,
    reviewCount: 342,
    tags: ["bestseller", "jumbo", "çatdırılma"],
    isNew: false,
    isPopular: true,
  },
  
  // 4. Pampers Active Baby-Dry N4 - Image4
  {
    id: uuidv4(),
    name: "Pampers Active Baby-Dry N4 (70əd)",
    brand: "Pampers",
    category: "beziklər",
    price: 63.99,
    seller: "Bazarstore",
    image: Image4,
    description: "Aktiv körpələr üçün xüsusi dizayn. 9-14 kq jumbo paket.",
    ageRange: "9-14 kq",
    quantity: 70,
    inStock: true,
    rating: 4.7,
    reviewCount: 298,
    tags: ["aktiv", "jumbo"],
    isNew: false,
    isPopular: true,
  },
  
  // 5. HiPP Organic 2 - Image5
  {
    id: uuidv4(),
    name: "HiPP Organic 2 (300g)",
    brand: "HiPP",
    category: "uşaq_qidası",
    subCategory: "6+ ay",
    price: 18.20,
    oldPrice: 20.50,
    seller: "PharmOnline",
    image: Image5,
    description: "Üzvi tərkibli, alman keyfiyyəti. 6 aydan böyük uşaqlar üçün.",
    ageRange: "6+ ay",
    weight: "300g",
    inStock: true,
    rating: 4.9,
    reviewCount: 203,
    tags: ["organic", "premium", "almaniya"],
    isNew: false,
    isPopular: true,
    discount: 11,
  },
  
  // 6. Nutrilon Premium 1 - Image6
  {
    id: uuidv4(),
    name: "Nutrilon Premium 1 (900g)",
    brand: "Nutrilon",
    category: "uşaq_qidası",
    subCategory: "0-6 ay",
    price: 50.99,
    oldPrice: 55.00,
    seller: "Bazarstore",
    image: Image6,
    description: "Premium segment, böyük paket. Yenidoğan körpələr üçün əla seçim.",
    ageRange: "0-6 ay",
    weight: "900g",
    inStock: true,
    rating: 4.8,
    reviewCount: 167,
    tags: ["premium", "böyük_paket", "hollandiya"],
    isNew: false,
    isPopular: true,
    discount: 7,
  },
  
  // 7. Sebamed Baby Shampoo - Image7
  {
    id: uuidv4(),
    name: "Sebamed Baby Shampoo (150ml)",
    brand: "Sebamed",
    category: "kremlər_şampunlar",
    price: 16.90,
    seller: "PharmOnline",
    image: Image7,
    description: "Dəriyə zərərsiz, pH 5.5. Körpələr üçün nəzərdə tutulub.",
    weight: "150ml",
    inStock: true,
    rating: 4.7,
    reviewCount: 134,
    tags: ["dəri_üçün", "hypoallergenic", "almaniya"],
    isNew: false,
    isPopular: false,
  },
  
  // 8. Sudocrem - Image8
  {
    id: uuidv4(),
    name: "Sudocrem (60g)",
    brand: "Sudocrem",
    category: "kremlər_şampunlar",
    price: 14.90,
    seller: "Bonpoppy",
    image: Image8,
    description: "Bezik səpgilərindən qoruyan krem. Antiseptik təsirli.",
    weight: "60g",
    inStock: true,
    rating: 4.9,
    reviewCount: 421,
    tags: ["bestseller", "krem", "qoruma"],
    isNew: false,
    isPopular: true,
  },
  
  // 9. Aptamil 1 - Image9
  {
    id: uuidv4(), 
    name: "Aptamil 1 (400g)",
    brand: "Aptamil",
    category: "uşaq_qidası",
    price: 26.80,
    seller: "AptekOnline",
    image: Image9,
    description: "Avropa brendi, orta segment. Yenidoğanlar üçün.",
    ageRange: "0-6 ay",
    weight: "400g",
    inStock: true,
    rating: 4.6,
    reviewCount: 178,
    tags: ["avropa", "keyfiyyət"],
    isNew: false,
    isPopular: false,
  },
  
  // 10. Bebelac 1 - Image10
  {
    id: uuidv4(),
    name: "Bebelac 1 (400g)",
    brand: "Bebelac",
    category: "uşaq_qidası",
    price: 21.50,
    seller: "PharmOnline",
    image: Image10,
    description: "Əlçatan qiymət, yaxşı keyfiyyət. 0-6 ay körpələr üçün.",
    ageRange: "0-6 ay",
    weight: "400g",
    inStock: true,
    rating: 4.5,
    reviewCount: 92,
    tags: ["əlçatan", "qiymət"],
    isNew: false,
    isPopular: false,
  },
  
  // 11. Bebelac 2 (800g) - Image11 ✅ DÜZƏLDILDI
  {
    id: uuidv4(),
    name: "Bebelac 2 (800g)",
    brand: "Bebelac",
    category: "uşaq_qidası",
    subCategory: "6+ ay",
    price: 39.90,
    seller: "Bazarstore",
    image: Image11,
    description: "6 aydan böyük uşaqlar üçün. Böyük paket, sərfəli.",
    ageRange: "6+ ay",
    weight: "800g",
    inStock: true,
    rating: 4.6,
    reviewCount: 145,
    tags: ["böyük_paket", "sərfəli"],
    isNew: false,
    isPopular: false,
  },
  
  // 12. NAN Optipro 1 (400g) - Image12 ✅ DÜZƏLDILDI
  {
    id: uuidv4(),
    name: "NAN Optipro 1 (400g)",
    brand: "Nestle",
    category: "uşaq_qidası",
    subCategory: "0-6 ay",
    price: 28.40,
    seller: "AptekOnline",
    image: Image12,
    description: "Nestlé məhsulu, optipro formulası ilə.",
    ageRange: "0-6 ay",
    weight: "400g",
    inStock: true,
    rating: 4.7,
    reviewCount: 201,
    tags: ["nestlé", "premium"],
    isNew: false,
    isPopular: true,
  },
  
  // 13. HiPP Alma Püresi (125g) - Image13 ✅ DÜZƏLDILDI
  {
    id: uuidv4(),
    name: "HiPP Alma Püresi (125g)",
    brand: "HiPP",
    category: "püresi",
    subCategory: "4+ ay",
    price: 3.20,
    seller: "KidsStore",
    image: Image13,
    description: "Təbii alma püresi, şəkərsiz. 4 aydan yuxarı.",
    ageRange: "4+ ay",
    weight: "125g",
    inStock: true,
    rating: 4.8,
    reviewCount: 87,
    tags: ["organic", "şəkərsiz", "püre"],
    isNew: false,
    isPopular: false,
  },
  
  // 14. HiPP Alma-Banan (190g) - Image14 ✅ DÜZƏLDILDI
  {
    id: uuidv4(),
    name: "HiPP Alma-Banan (190g)",
    brand: "HiPP",
    category: "püresi",
    subCategory: "6+ ay",
    price: 4.50,
    seller: "KidsStore",
    image: Image14,
    description: "Alma və banan qarışığı. Dadlı və faydalı.",
    ageRange: "6+ ay",
    weight: "190g",
    inStock: true,
    rating: 4.9,
    reviewCount: 103,
    tags: ["organic", "qarışıq", "püre"],
    isNew: false,
    isPopular: true,
  },
  
  // 15. Gerber Alma (125g) - Image15 ✅ DÜZƏLDILDI
  {
    id: uuidv4(),
    name: "Gerber Alma (125g)",
    brand: "Gerber",
    category: "püresi",
    subCategory: "4+ ay",
    price: 3.10,
    seller: "Bazarstore",
    image: Image15,
    description: "Gerber brendi, saf alma. Əlçatan qiymət.",
    ageRange: "4+ ay",
    weight: "125g",
    inStock: true,
    rating: 4.5,
    reviewCount: 64,
    tags: ["amerika", "əlçatan"],
    isNew: false,
    isPopular: false,
  },
  
  // 16. Heinz Uşaq Sıyığı (200g) - Image16 ✅ DÜZƏLDILDI
  {
    id: uuidv4(),
    name: "Heinz Uşaq Sıyığı (200g)",
    brand: "Heinz",
    category: "sıyıq",
    subCategory: "6+ ay",
    price: 5.90,
    seller: "AptekPlus",
    image: Image16,
    description: "Dənli sıyıq, vitaminlərlə zəngin.",
    ageRange: "6+ ay",
    weight: "200g",
    inStock: true,
    rating: 4.6,
    reviewCount: 98,
    tags: ["dənli", "vitamin"],
    isNew: false,
    isPopular: false,
  },
  
  // 17. Nestle Cerelac (400g) - Image17 ✅ DÜZƏLDILDI
  {
    id: uuidv4(),
    name: "Nestle Cerelac (400g)",
    brand: "Nestle",
    category: "sıyıq",
    subCategory: "6+ ay",
    price: 9.80,
    seller: "Bazarstore",
    image: Image17,
    description: "Ən populyar uşaq sıyığı. Demirli və dadlı.",
    ageRange: "6+ ay",
    weight: "400g",
    inStock: true,
    rating: 4.8,
    reviewCount: 267,
    tags: ["bestseller", "populyar", "nestlé"],
    isNew: false,
    isPopular: true,
  },
  
  // 18. Molfix N3 (90əd) - Image18 ✅ DÜZƏLDILDI
  {
    id: uuidv4(),
    name: "Molfix N3 (90əd)",
    brand: "Molfix",
    category: "beziklər",
    price: 42.00,
    seller: "KidsStore",
    image: Image18,
    description: "Türkiyə istehsalı, yüksək keyfiyyət.",
    ageRange: "6-11 kq",
    quantity: 90,
    inStock: true,
    rating: 4.4,
    reviewCount: 156,
    tags: ["türkiyə", "əlçatan"],
    isNew: false,
    isPopular: false,
  },
  
  // 19. Huggies Elite Soft N2 (84əd) - Image19 ✅ DÜZƏLDILDI
  {
    id: uuidv4(),
    name: "Huggies Elite Soft N2 (84əd)",
    brand: "Huggies",
    category: "beziklər",
    price: 54.90,
    seller: "PharmOnline",
    image: Image19,
    description: "Premium bezik, yumşaq toxuma. 4-6 kq.",
    ageRange: "4-6 kq",
    quantity: 84,
    inStock: true,
    rating: 4.7,
    reviewCount: 189,
    tags: ["premium", "yumşaq", "rahat"],
    isNew: false,
    isPopular: true,
  },
  
  // 20. Mustela Hydra Baby Cream (300ml) - Image20 ✅ DÜZƏLDILDI
  {
    id: uuidv4(),
    name: "Mustela Hydra Baby Cream (300ml)",
    brand: "Mustela",
    category: "kremlər_şampunlar",
    price: 29.90,
    seller: "PharmOnline",
    image: Image20,
    description: "Nəmləndirici krem, fransız keyfiyyəti.",
    weight: "300ml",
    inStock: true,
    rating: 4.9,
    reviewCount: 234,
    tags: ["premium", "fransa", "nəmləndirici"],
    isNew: false,
    isPopular: true,
  },
  
  // 21. Mustela Stelatopia Cream (200ml) - Image21 ✅ DÜZƏLDILDI
  {
    id: uuidv4(),
    name: "Mustela Stelatopia Cream (200ml)",
    brand: "Mustela",
    category: "kremlər_şampunlar",
    price: 34.50,
    seller: "AptekPlus",
    image: Image21,
    description: "Ekzema və quru dəri üçün xüsusi krem.",
    weight: "200ml",
    inStock: true,
    rating: 4.8,
    reviewCount: 167,
    tags: ["xüsusi", "dərman", "fransa"],
    isNew: false,
    isPopular: false,
  },
  
  // 22. Chicco Baby Moments Shampoo (200ml) - Image22 ✅ DÜZƏLDILDI
  {
    id: uuidv4(),
    name: "Chicco Baby Moments Shampoo (200ml)",
    brand: "Chicco",
    category: "kremlər_şampunlar",
    price: 13.80,
    seller: "KidsStore",
    image: Image22,
    description: "Yumşaq şampun, göz yandırmaz.",
    weight: "200ml",
    inStock: true,
    rating: 4.6,
    reviewCount: 112,
    tags: ["yumşaq", "italiya"],
    isNew: false,
    isPopular: false,
  },
  
  // 23. Johnson's Baby Shampoo (200ml) - Image23 ✅ DÜZƏLDILDI
  {
    id: uuidv4(),
    name: "Johnson's Baby Shampoo (200ml)",
    brand: "Johnson's",
    category: "kremlər_şampunlar",
    price: 9.90,
    seller: "Bazarstore",
    image: Image23,
    description: "Klassik şampun, göz yandırmaz formula.",
    weight: "200ml",
    inStock: true,
    rating: 4.7,
    reviewCount: 389,
    tags: ["klassik", "populyar", "əlçatan"],
    isNew: false,
    isPopular: true,
  },
  
  // 24. Johnson's Baby Oil (300ml) - Image24 ✅ DÜZƏLDILDI
  {
    id: uuidv4(),
    name: "Johnson's Baby Oil (300ml)",
    brand: "Johnson's",
    category: "kremlər_şampunlar",
    price: 11.50,
    seller: "Bazarstore",
    image: Image24,
    description: "Təmiz mineral yağ, masaj və nəmləndirmə üçün.",
    weight: "300ml",
    inStock: true,
    rating: 4.8,
    reviewCount: 267,
    tags: ["yağ", "masaj", "klassik"],
    isNew: false,
    isPopular: true,
  },
  
  // 25. Uni Baby Nəm Salfet (72əd) - Image25 ✅ DÜZƏLDILDI
  {
    id: uuidv4(),
    name: "Uni Baby Nəm Salfet (72əd)",
    brand: "Uni Baby",
    category: "salfetlər",
    price: 3.99,
    seller: "Birmarket",
    image: Image25,
    description: "Körpələr üçün nəm salfet, 72 ədəd.",
    quantity: 72,
    inStock: true,
    rating: 4.5,
    reviewCount: 234,
    tags: ["nəm", "salfet", "türkiyə"],
    isNew: false,
    isPopular: true,
  },
  
  // 26. Sleepy Nəm Salfet Limon (120əd) - Image26 ✅ DÜZƏLDILDI
  {
    id: uuidv4(),
    name: "Sleepy Nəm Salfet Limon (120əd)",
    brand: "Sleepy",
    category: "salfetlər",
    price: 1.99,
    oldPrice: 2.50,
    seller: "Omid",
    image: Image26,
    description: "Limon ətirli nəm salfet, iqtisadi paket.",
    quantity: 120,
    inStock: true,
    rating: 4.3,
    reviewCount: 178,
    tags: ["əlçatan", "limon", "çox"],
    isNew: false,
    isPopular: false,
    discount: 20,
  },
  
  // 27. Chicco Bravo Trio System - Image27 ✅ DÜZƏLDILDI
  {
    id: uuidv4(),
    name: "Chicco Bravo Trio System",
    brand: "Chicco",
    category: "kolyaska",
    price: 1199.00,
    seller: "KidsStore",
    image: Image27,
    description: "3-ü-1 kolyaska sistemi: kolyaska + beşik + avtomobil oturacağı.",
    ageRange: "0-36 ay",
    inStock: true,
    rating: 4.9,
    reviewCount: 89,
    tags: ["premium", "3in1", "italiya"],
    isNew: true,
    isPopular: true,
  },
  
  // 28. Joie Litetrax 4 - Image28 ✅ DÜZƏLDILDI
  {
    id: uuidv4(),
    name: "Joie Litetrax 4",
    brand: "Joie",
    category: "kolyaska",
    price: 720.00,
    seller: "BabyStore",
    image: Image28,
    description: "Yüngül və rahat şəhər kolyaskası. Avropa brendi.",
    ageRange: "0-36 ay",
    inStock: true,
    rating: 4.7,
    reviewCount: 67,
    tags: ["orta", "yüngül", "rahat"],
    isNew: false,
    isPopular: false,
  },
  
  // 29. Hauck Rapid 4 - Image29 ✅ DÜZƏLDILDI
  {
    id: uuidv4(),
    name: "Hauck Rapid 4",
    brand: "Hauck",
    category: "kolyaska",
    price: 520.00,
    seller: "KidsStore",
    image: Image29,
    description: "Şəhər kolyaskası, gündəlik istifadə üçün ideal.",
    ageRange: "6+ ay",
    inStock: true,
    rating: 4.5,
    reviewCount: 112,
    tags: ["şəhər", "əlçatan", "sadə"],
    isNew: false,
    isPopular: false,
  },
  
  // 30. Kidilo Travel System 3-in-1 - Image30 ✅ DÜZƏLDILDI
  {
    id: uuidv4(),
    name: "Kidilo Travel System 3-in-1",
    brand: "Kidilo",
    category: "kolyaska",
    price: 780.00,
    seller: "KidsStore",
    image: Image30,
    description: "Kombinə kolyaska sistemi. Kolyaska, beşik və avtomobil oturacağı dəsti.",
    ageRange: "0-36 ay",
    inStock: true,
    rating: 4.8,
    reviewCount: 145,
    tags: ["dəst", "sərfəli", "3in1"],
    isNew: true,
    isPopular: true,
  }
];

// Helper funksiyalar
export const getProductsByCategory = (category: Product['category']) => {
  return products.filter(p => p.category === category);
};

export const getPopularProducts = (limit: number = 10) => {
  return products.filter(p => p.isPopular).slice(0, limit);
};

export const getNewProducts = (limit: number = 10) => {
  return products.filter(p => p.isNew).slice(0, limit);
};

export const getProductsByPriceRange = (min: number, max: number) => {
  return products.filter(p => p.price >= min && p.price <= max);
};

export const searchProducts = (query: string) => {
  const lowerQuery = query.toLowerCase();
  return products.filter(p => 
    p.name.toLowerCase().includes(lowerQuery) ||
    p.brand.toLowerCase().includes(lowerQuery) ||
    p.category.toLowerCase().includes(lowerQuery) ||
    p.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
};

// Kateqoriya adları
export const categoryNames: Record<Product['category'], string> = {
  'uşaq_qidası': 'Uşaq Qidası',
  'beziklər': 'Beziklər',
  'kremlər_şampunlar': 'Kremlər və Şampunlar',
  'püresi': 'Purelər',
  'sıyıq': 'Sıyıqlar',
  'kolyaska': 'Kolyaskalar',
  'salfetlər': 'Nəm Salfetlər'
};

// Satıcılar
export const sellers = [
  'Bazarstore',
  'BIRMARKET',
  'PharmOnline',
  'Bonpoppy',
  'AptekOnline',
  'KidsStore',
  'AptekPlus',
  'BabyStore',
  'Omid'
];

// Yaş aralıqları
export const ageRanges = [
  '0-6 ay',
  '6+ ay',
  '6-12 ay',
  '12+ ay',
  '4+ ay',
  '0-36 ay',
  '6-11 kq',
  '4-6 kq',
  '4-8 kq',
  '9-14 kq'
];