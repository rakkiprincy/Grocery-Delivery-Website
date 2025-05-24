import { Clock, Leaf, Truck } from 'lucide-react';

export function DeliveryInfo() {
  return (
    <section className="bg-gradient-to-r from-green-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Fast & Reliable Delivery</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get your groceries delivered fresh and fast. Choose from same-day delivery or schedule for later.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-fresh-green rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-white h-8 w-8" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">30-Min Delivery</h4>
            <p className="text-gray-600">Get your essentials delivered in as little as 30 minutes</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-fresh-green rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="text-white h-8 w-8" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Fresh Guarantee</h4>
            <p className="text-gray-600">100% fresh produce or your money back</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-fresh-green rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="text-white h-8 w-8" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Free Delivery</h4>
            <p className="text-gray-600">Free delivery on orders over $35</p>
          </div>
        </div>
      </div>
    </section>
  );
}
