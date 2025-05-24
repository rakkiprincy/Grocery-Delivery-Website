export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  unit: string;
  quantity: number;
}

export interface DeliveryAddress {
  street: string;
  city: string;
  zip: string;
}

export interface PaymentInfo {
  cardNumber: string;
  expiry: string;
  cvc: string;
}

export interface CheckoutFormData {
  deliveryTime: string;
  address: DeliveryAddress;
  payment: PaymentInfo;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
}

export type ProductCategory = 'all' | 'produce' | 'dairy' | 'meat' | 'pantry' | 'frozen';
