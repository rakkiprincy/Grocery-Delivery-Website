import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export function ContactUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions about our service? Need support with your order? We're here to help! 
            Contact our friendly customer support team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-fresh-green rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone Support</h4>
                  <p className="text-gray-600">+91 1800-123-4567</p>
                  <p className="text-gray-600">+91 1800-765-4321</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-fresh-green rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email Support</h4>
                  <p className="text-gray-600">support@freshcart.in</p>
                  <p className="text-gray-600">orders@freshcart.in</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-fresh-green rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Head Office</h4>
                  <p className="text-gray-600">FreshCart Technologies Pvt. Ltd.</p>
                  <p className="text-gray-600">Tower A, Cyber City,</p>
                  <p className="text-gray-600">Gurgaon, Haryana 122002</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-fresh-green rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-white h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Support Hours</h4>
                  <p className="text-gray-600">24/7 Customer Support</p>
                  <p className="text-gray-600">Delivery: 6:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Enter your phone number" />
              </div>

              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What is this regarding?" />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us how we can help you..."
                  rows={5}
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-fresh-green hover:bg-deep-green text-white font-semibold"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Map or Additional Info */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">We're Here to Help</h3>
            <p className="text-gray-600 mb-6">
              Whether you need help with an order, have feedback, or want to partner with us, 
              our team is ready to assist you.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-fresh-green">&lt; 2 hrs</div>
                <div className="text-gray-600">Average Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-fresh-green">98%</div>
                <div className="text-gray-600">Issue Resolution Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-fresh-green">4.9★</div>
                <div className="text-gray-600">Support Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}