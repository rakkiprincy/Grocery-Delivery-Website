import { Button } from '@/components/ui/button';
import { Apple, Milk, Beef, Package, Snowflake } from 'lucide-react';
import { ProductCategory } from '@/lib/types';

interface CategoryNavigationProps {
  activeCategory: ProductCategory;
  onCategoryChange: (category: ProductCategory) => void;
}

const categories = [
  { id: 'all' as const, label: 'All Products', icon: null },
  { id: 'produce' as const, label: 'Produce', icon: Apple },
  { id: 'dairy' as const, label: 'Dairy', icon: Milk },
  { id: 'meat' as const, label: 'Meat', icon: Beef },
  { id: 'pantry' as const, label: 'Pantry', icon: Package },
  { id: 'frozen' as const, label: 'Frozen', icon: Snowflake },
];

export function CategoryNavigation({ activeCategory, onCategoryChange }: CategoryNavigationProps) {
  return (
    <section className="bg-white py-8 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            
            return (
              <Button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                variant={isActive ? "default" : "secondary"}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  isActive 
                    ? "bg-fresh-green hover:bg-deep-green text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {Icon && <Icon className="h-4 w-4 mr-2" />}
                {category.label}
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
