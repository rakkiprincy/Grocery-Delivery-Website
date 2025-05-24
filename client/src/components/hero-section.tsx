import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Star, CheckCircle } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-fresh-green via-deep-green to-emerald-700 text-white py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-white rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-white rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Star className="h-4 w-4 mr-2 text-yellow-300" />
              #1 Grocery Delivery in India
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block animate-slide-up">Premium</span>
              <span className="block animate-slide-up delay-200">Fresh Groceries</span>
              <span className="block text-yellow-300 animate-slide-up delay-400">Delivered Fast</span>
            </h1>
            
            {/* Description */}
            <p className="text-xl lg:text-2xl mb-8 text-green-100 leading-relaxed animate-slide-up delay-600">
              Experience the finest quality produce, dairy, and essentials delivered fresh to your doorstep across 50+ Indian cities in just 30 minutes.
            </p>
            
            {/* Features */}
            <div className="flex flex-col sm:flex-row gap-6 mb-8 animate-slide-up delay-800">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-300" />
                <span>30-Min Delivery</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-300" />
                <span>Fresh Guarantee</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-300" />
                <span>Free Delivery ₹999+</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up delay-1000">
              <Button
                size="lg"
                className="bg-white text-fresh-green hover:bg-gray-100 font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Start Shopping Now
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="border-2 border-white text-white hover:bg-white hover:text-fresh-green font-semibold px-8 py-4 text-lg backdrop-blur-sm"
              >
                <Play className="h-5 w-5 mr-2" />
                Watch Demo
              </Button>
            </div>
          </div>
          
          {/* Hero Images */}
          <div className="hidden lg:block relative">
            <div className="relative animate-float">
              {/* Main Image */}
              <div className="relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500"
                  alt="Fresh groceries and produce"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -right-6 bg-white text-gray-900 p-4 rounded-xl shadow-lg animate-bounce-subtle">
                <div className="text-2xl font-bold text-fresh-green">30min</div>
                <div className="text-sm">Delivery</div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-4 rounded-xl shadow-lg animate-bounce-subtle delay-1000">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-1" />
                  <span className="text-xl font-bold">4.8</span>
                </div>
                <div className="text-sm">Rating</div>
              </div>
            </div>
            
            {/* Secondary Images */}
            <div className="absolute top-20 -right-20 transform -rotate-12 animate-float-delay">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400"
                alt="Fresh vegetables"
                className="rounded-xl shadow-xl w-32 h-40 object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            
            <div className="absolute bottom-10 -left-16 transform rotate-12 animate-float-delay-2">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
                alt="Fresh fruits"
                className="rounded-xl shadow-xl w-28 h-28 object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
        
        {/* Stats Bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-slide-up delay-1200">
          <div>
            <div className="text-3xl lg:text-4xl font-bold mb-2">1M+</div>
            <div className="text-green-200">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold mb-2">50+</div>
            <div className="text-green-200">Cities Served</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold mb-2">10M+</div>
            <div className="text-green-200">Orders Delivered</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold mb-2">30min</div>
            <div className="text-green-200">Avg Delivery</div>
          </div>
        </div>
      </div>
    </section>
  );
}
