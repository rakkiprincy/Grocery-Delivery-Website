import { Clock, Shield, Truck, Headphones, CreditCard, Leaf } from 'lucide-react';

export function OurServices() {
  const services = [
    {
      icon: Clock,
      title: "30-Minute Delivery",
      description: "Lightning-fast delivery service that brings your groceries to your doorstep in just 30 minutes.",
      color: "bg-blue-500"
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "100% fresh guarantee on all products. If you're not satisfied, we'll replace or refund immediately.",
      color: "bg-green-500"
    },
    {
      icon: Truck,
      title: "Free Delivery",
      description: "Enjoy free delivery on orders above ₹999. No hidden charges, transparent pricing always.",
      color: "bg-purple-500"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer support to help you with orders, queries, and assistance anytime.",
      color: "bg-orange-500"
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "Multiple payment options with bank-grade security. Pay with UPI, cards, or cash on delivery.",
      color: "bg-red-500"
    },
    {
      icon: Leaf,
      title: "Organic Selection",
      description: "Curated selection of organic and locally-sourced products for health-conscious customers.",
      color: "bg-teal-500"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive grocery delivery solutions designed to make your shopping experience 
            seamless, convenient, and reliable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}