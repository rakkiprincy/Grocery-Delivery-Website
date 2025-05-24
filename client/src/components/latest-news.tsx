import { Calendar, ArrowRight, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function LatestNews() {
  const articles = [
    {
      title: "FreshCart Expands to 10 New Cities Across India",
      excerpt: "We're excited to announce our expansion to Hyderabad, Chennai, Kolkata, and 7 other major cities, bringing fresh groceries closer to more Indian families.",
      date: "March 15, 2025",
      author: "FreshCart Team",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      category: "Company News"
    },
    {
      title: "Organic Farming Partnerships: Supporting Local Farmers",
      excerpt: "Learn how FreshCart is directly partnering with organic farmers across Maharashtra and Karnataka to bring you the freshest produce while supporting local agriculture.",
      date: "March 10, 2025",
      author: "Sustainability Team",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      category: "Sustainability"
    },
    {
      title: "New Mobile App Features: Smart Shopping Lists & More",
      excerpt: "Discover the latest features in our mobile app including AI-powered shopping suggestions, recurring orders, and improved delivery tracking.",
      date: "March 5, 2025",
      author: "Product Team",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      category: "Technology"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Latest News & Updates</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest developments, features, and initiatives from FreshCart. 
            Read about our expansion, sustainability efforts, and technology innovations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-fresh-green text-white px-3 py-1 rounded-full text-sm font-medium">
                  {article.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {article.date}
                  <span className="mx-2">•</span>
                  <User className="h-4 w-4 mr-1" />
                  {article.author}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <Button variant="ghost" className="text-fresh-green hover:text-deep-green p-0 h-auto font-semibold">
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-fresh-green text-fresh-green hover:bg-fresh-green hover:text-white"
          >
            View All Articles
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
