import { products, orders, type Product, type InsertProduct, type Order, type InsertOrder } from "@shared/schema";

export interface IStorage {
  // Products
  getAllProducts(): Promise<Product[]>;
  getProductsByCategory(category: string): Promise<Product[]>;
  searchProducts(query: string): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  
  // Orders
  createOrder(order: InsertOrder): Promise<Order>;
  getOrder(id: number): Promise<Order | undefined>;
}

export class MemStorage implements IStorage {
  private products: Map<number, Product>;
  private orders: Map<number, Order>;
  private currentProductId: number;
  private currentOrderId: number;

  constructor() {
    this.products = new Map();
    this.orders = new Map();
    this.currentProductId = 1;
    this.currentOrderId = 1;
    
    // Initialize with sample products
    this.initializeProducts();
  }

  private initializeProducts() {
    const sampleProducts: Omit<Product, 'id'>[] = [
      {
        name: "Organic Bananas",
        category: "produce",
        price: "120.00",
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        description: "Fresh organic bananas from Kerala farms, perfect for snacking",
        unit: "1 kg",
        inStock: 50,
      },
      {
        name: "Organic Whole Milk",
        category: "dairy",
        price: "85.00",
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        description: "Fresh organic whole milk from local dairy farms",
        unit: "1 liter",
        inStock: 30,
      },
      {
        name: "Vine Tomatoes",
        category: "produce",
        price: "60.00",
        image: "https://images.unsplash.com/photo-1607305387299-a3d9611cd469?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Fresh vine-ripened tomatoes from Maharashtra",
        unit: "500g pack",
        inStock: 40,
      },
      {
        name: "Chicken Breast",
        category: "meat",
        price: "450.00",
        image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        description: "Fresh chicken breast, antibiotic-free from certified farms",
        unit: "1 kg",
        inStock: 25,
      },
      {
        name: "Fresh Broccoli",
        category: "produce",
        price: "80.00",
        image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        description: "Fresh green broccoli heads from hill stations",
        unit: "1 piece",
        inStock: 35,
      },
      {
        name: "Whole Grain Bread",
        category: "pantry",
        price: "45.00",
        image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        description: "Artisan whole grain bread made with Indian wheat",
        unit: "400g loaf",
        inStock: 20,
      },
      {
        name: "Farm Fresh Eggs",
        category: "dairy",
        price: "180.00",
        image: "https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        description: "Free-range farm fresh eggs from happy hens",
        unit: "30 count tray",
        inStock: 45,
      },
      {
        name: "Frozen Mixed Berries",
        category: "frozen",
        price: "350.00",
        image: "https://images.unsplash.com/photo-1515872474884-c6a548860190?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Premium frozen mixed berries imported from Kashmir",
        unit: "500g pack",
        inStock: 30,
      },
    ];

    sampleProducts.forEach(product => {
      const id = this.currentProductId++;
      this.products.set(id, { ...product, id });
    });
  }

  async getAllProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      product => product.category === category
    );
  }

  async searchProducts(query: string): Promise<Product[]> {
    const searchTerm = query.toLowerCase();
    return Array.from(this.products.values()).filter(
      product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        (product.description && product.description.toLowerCase().includes(searchTerm))
    );
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createOrder(insertOrder: InsertOrder): Promise<Order> {
    const id = this.currentOrderId++;
    const order: Order = {
      ...insertOrder,
      id,
      createdAt: new Date(),
    };
    this.orders.set(id, order);
    return order;
  }

  async getOrder(id: number): Promise<Order | undefined> {
    return this.orders.get(id);
  }
}

export const storage = new MemStorage();
