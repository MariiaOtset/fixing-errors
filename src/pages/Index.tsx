
import { Phone, Clock, Wrench, Droplets, Shield, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const services = [
    {
      icon: Droplets,
      title: "Emergency Leak Repair",
      description: "24/7 emergency response for burst pipes, leaking faucets, and water damage prevention.",
      features: ["Burst pipe repair", "Leak detection", "Water damage prevention"]
    },
    {
      icon: Wrench,
      title: "Drain Cleaning",
      description: "Professional drain cleaning services to restore proper flow and prevent backups.",
      features: ["Clogged drains", "Sewer line cleaning", "Hydro jetting"]
    },
    {
      icon: Shield,
      title: "Water Heater Service",
      description: "Complete water heater installation, repair, and maintenance services.",
      features: ["Installation", "Repair", "Maintenance"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Wrench className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">RapidFlow Plumbing</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <span className="text-gray-600">Licensed & Insured</span>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Emergency Plumbing Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Available 24/7 • Licensed Professionals • Same Day Service
            </p>
            
            <div className="bg-orange-500 text-white p-6 rounded-lg shadow-2xl mb-8 animate-scale-in">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <Phone className="h-8 w-8" />
                <span className="text-3xl font-bold">(555) PLUMBER</span>
              </div>
              <p className="text-lg">Emergency? Call Now - We're Available 24/7!</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex items-center space-x-3 bg-white/10 p-4 rounded-lg">
                <Clock className="h-6 w-6 text-orange-300" />
                <span>24/7 Emergency Service</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 p-4 rounded-lg">
                <Shield className="h-6 w-6 text-orange-300" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 p-4 rounded-lg">
                <CheckCircle className="h-6 w-6 text-orange-300" />
                <span>Same Day Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional plumbing solutions for residential and commercial properties
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 text-center">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Choose RapidFlow Plumbing?</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-lg font-semibold">500+ 5-Star Reviews</span>
                </div>
                <p className="text-gray-600">
                  Our customers consistently rate us 5 stars for our prompt, professional service and quality workmanship.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center space-x-4 mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                  <span className="text-lg font-semibold">Fully Licensed & Bonded</span>
                </div>
                <p className="text-gray-600">
                  All our plumbers are licensed professionals with years of experience and full insurance coverage.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center space-x-4 mb-4">
                  <Clock className="h-8 w-8 text-blue-600" />
                  <span className="text-lg font-semibold">Fast Response Time</span>
                </div>
                <p className="text-gray-600">
                  We arrive within 60 minutes for emergencies and offer same-day service for urgent repairs.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center space-x-4 mb-4">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                  <span className="text-lg font-semibold">Satisfaction Guaranteed</span>
                </div>
                <p className="text-gray-600">
                  We stand behind our work with a 100% satisfaction guarantee and comprehensive warranties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Don't Wait - Call Now!</h2>
          <p className="text-xl mb-8 text-blue-100">
            Plumbing emergencies can't wait. Our expert team is standing by 24/7.
          </p>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-orange-500 p-8 rounded-lg shadow-2xl mb-8">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <Phone className="h-10 w-10" />
                <span className="text-4xl font-bold">(555) PLUMBER</span>
              </div>
              <p className="text-lg">Available 24 Hours a Day, 7 Days a Week</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Emergency Service Areas</h3>
                <p>Downtown • Suburbs • Metro Area</p>
                <p>Within 25 miles of city center</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
                <p>Emergency: 24/7</p>
                <p>Regular Service: Mon-Fri 7AM-6PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Wrench className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">RapidFlow Plumbing</span>
              </div>
              <p className="text-gray-400">
                Professional emergency plumbing services available 24/7. Licensed, insured, and committed to excellence.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Emergency Repairs</li>
                <li>Drain Cleaning</li>
                <li>Water Heater Service</li>
                <li>Pipe Installation</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(555) PLUMBER</span>
                </p>
                <p>Licensed & Insured</p>
                <p>Serving Metro Area</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 RapidFlow Plumbing. All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
