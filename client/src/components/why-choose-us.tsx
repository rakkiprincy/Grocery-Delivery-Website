import { CheckCircle, Star, ThumbsUp, Zap } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Star,
      title: "Premium Quality",
      description: "Hand-picked fresh produce and premium brands sourced directly from trusted suppliers and local farms."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Industry-leading delivery speed with most orders reaching you within 30 minutes of placing the order."
    },
    {
      icon: CheckCircle,
      title: "Reliable Service",
      description: "99.9% on-time delivery rate with real-time tracking and proactive communication throughout."
    },
    {
      icon: ThumbsUp,
      title: "Customer First",
      description: "Dedicated customer support team and hassle-free returns to ensure your complete satisfaction."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose FreshCart?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We're not just another grocery delivery service. We're your trusted partner 
              in bringing convenience, quality, and freshness to your daily life.
            </p>
            
            <div className="space-y-6">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-fresh-green rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{reason.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500"
              alt="Fresh groceries and happy customers"
              className="rounded-xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-fresh-green text-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold">4.8★</div>
                <div className="text-sm">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}