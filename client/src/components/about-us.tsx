import { Users, Award, Heart, Truck } from 'lucide-react';

export function AboutUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">About FreshCart</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Founded in 2020, FreshCart has been revolutionizing grocery delivery across India, 
            bringing farm-fresh produce and quality essentials directly to your doorstep.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Started by a team of passionate entrepreneurs who believed that everyone deserves access 
              to fresh, quality groceries without the hassle of traditional shopping. We've built 
              strong partnerships with local farmers and trusted suppliers across India.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we serve over 50 cities and have delivered millions of orders, maintaining our 
              commitment to freshness, quality, and customer satisfaction.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
              alt="Our team at work"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-fresh-green rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-white h-8 w-8" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">1M+</h4>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-fresh-green rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-white h-8 w-8" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">50+</h4>
            <p className="text-gray-600">Cities Served</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-fresh-green rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-white h-8 w-8" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">99%</h4>
            <p className="text-gray-600">Customer Satisfaction</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-fresh-green rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="text-white h-8 w-8" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">10M+</h4>
            <p className="text-gray-600">Orders Delivered</p>
          </div>
        </div>
      </div>
    </section>
  );
}