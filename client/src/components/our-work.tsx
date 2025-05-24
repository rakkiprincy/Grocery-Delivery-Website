import { ExternalLink, MapPin, Users, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function OurWork() {
  const projects = [
    {
      title: "Mumbai Metro Network",
      description: "Established delivery network across 15+ Mumbai localities with 50+ delivery partners.",
      image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      stats: "150K+ orders delivered",
      location: "Mumbai, Maharashtra"
    },
    {
      title: "Delhi NCR Expansion",
      description: "Rapid expansion across Delhi, Gurgaon, and Noida with same-day delivery guarantee.",
      image: "https://images.unsplash.com/photo-1554188248-986adbb73be4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      stats: "200K+ orders delivered",
      location: "Delhi NCR"
    },
    {
      title: "Bangalore Tech Hub",
      description: "Premium grocery delivery service for tech professionals with 24/7 support.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      stats: "100K+ orders delivered",
      location: "Bangalore, Karnataka"
    },
    {
      title: "Pune University Area",
      description: "Student-friendly pricing and bulk ordering options for university communities.",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      stats: "75K+ orders delivered",
      location: "Pune, Maharashtra"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Work Across India</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how we've successfully established grocery delivery networks in major Indian cities, 
            serving communities with fresh produce and reliable service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-fresh-green text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.stats}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-600 text-sm mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  {project.location}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>
                <Button variant="outline" size="sm" className="text-fresh-green border-fresh-green hover:bg-fresh-green hover:text-white">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-fresh-green to-deep-green rounded-xl p-8 text-white text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Users className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-green-100">Delivery Partners</div>
            </div>
            <div>
              <MapPin className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-green-100">Cities Covered</div>
            </div>
            <div>
              <ShoppingBag className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <div className="text-3xl font-bold mb-2">1M+</div>
              <div className="text-green-100">Orders Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}