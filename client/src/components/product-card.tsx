import { useState } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@shared/schema';
import { useCart } from '@/hooks/use-cart';

interface ProductCardProps {
  product: Product;
  onAddToCart: (message: string) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: parseFloat(product.price),
      image: product.image,
      unit: product.unit,
    });
    
    onAddToCart(`${product.name} added to cart!`);
    
    // Animate button
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50"
        >
          <Heart className="h-4 w-4 text-gray-400 hover:text-red-500" />
        </Button>
      </div>
      <CardContent className="p-4">
        <h4 className="font-semibold text-gray-900 mb-1">{product.name}</h4>
        <p className="text-sm text-gray-600 mb-2">{product.unit}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-fresh-green">
            ₹{parseFloat(product.price).toFixed(0)}
          </span>
          <Button
            onClick={handleAddToCart}
            size="sm"
            className={`bg-fresh-green hover:bg-deep-green text-white transition-colors ${
              isAnimating ? 'animate-bounce-subtle' : ''
            }`}
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
