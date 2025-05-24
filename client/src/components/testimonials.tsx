import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      rating: 5,
      text: "FreshCart has completely transformed my grocery shopping experience. The quality of produce is exceptional and delivery is always on time. Highly recommended!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi, NCR",
      rating: 5,
      text: "Amazing service! I've been using FreshCart for 6 months now. The app is user-friendly and customer support is excellent. Never going back to traditional shopping.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "Anita Patel",
      location: "Bangalore, Karnataka",
      rating: 5,
      text: "The organic selection is fantastic and prices are very competitive. Love the fact that I can get fresh groceries delivered in 30 minutes. Truly convenient!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers across India have to say about FreshCart.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-fresh-green opacity-20" />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  <div className="flex mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-fresh-green">4.8★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-fresh-green">50K+</div>
              <div className="text-gray-600">Reviews</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-fresh-green">98%</div>
              <div className="text-gray-600">Recommend Us</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-fresh-green">1M+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}