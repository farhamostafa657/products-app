export interface Product {
  id: number;
  availabilityStatus: String;
  brand: string;
  category: string;
  description: string;
  dimensions: Object;
  discountPercentage: number;
  images: Array<string>;
  meta: Object;
  minimumOrderQuantity: number;
  price: number;
  rating: number;
  returnPolicy: string;
  reviews: Object;
  shippingInformation: string;
  sku: string;
  stock: number;
  tags: Array<string>;
  thumbnail: string;
  title: string;
  warrantyInformation: string;
  weight: string;
}
