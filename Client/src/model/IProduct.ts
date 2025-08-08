export interface IProduct {
    id: number; 
    name: string;
    price: number;
    description?: string; // Optional property
    isActive?: boolean; // Optional property to indicate if the product is active
    imageUrl?: string; // Optional property for product image
    stock?: number; // Optional property for available stock
    }