export interface Product {
    id: string;
    name: string;
    brand: string;
    category: 'uşaq_qidası' | 'beziklər' | 'kremlər_şampunlar' | 'püresi' | 'sıyıq' | 'kolyaska' | 'salfetlər';
    subCategory?: string;
    price: number;
    oldPrice?: number;
    seller: string;
    image: string;
    description: string;
    ageRange?: string;
    weight?: string;
    quantity?: number;
    inStock: boolean;
    rating?: number;
    reviewCount?: number;
    tags?: string[];
    isNew?: boolean;
    isPopular?: boolean;
    discount?: number;
  }
