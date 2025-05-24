import { Button } from '@/components/ui/button';
import { ShoppingCart, Download, ArrowRight } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="py-16 bg-gradient-to-r from-fresh-green to-deep-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Experience Fresh Grocery Delivery?
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Join over 1 million satisfied customers across India. Start your first order today 
            and get fresh groceries delivered to your doorstep in just 30 minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-white text-fresh-green hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Start Shopping Now
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-fresh-green font-semibold px-8 py-4 text-lg"
            >
              <Download className="h-5 w-5 mr-2" />
              Download App
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-2xl font-bold mb-2">₹0</div>
              <div className="text-green-100">Delivery Fee*</div>
              <div className="text-sm text-green-200 mt-1">*On orders above ₹999</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-2xl font-bold mb-2">30 Min</div>
              <div className="text-green-100">Fast Delivery</div>
              <div className="text-sm text-green-200 mt-1">Average delivery time</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-2xl font-bold mb-2">24/7</div>
              <div className="text-green-100">Customer Support</div>
              <div className="text-sm text-green-200 mt-1">Always here to help</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}