import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import Gallery from '../components/Gallery';
import { Star, Award, Users, Sparkles } from 'lucide-react';

interface HomePageProps {
  onBooking: (planType: string, planName: string) => void;
}

const HomePage = ({ onBooking }: HomePageProps) => {
  const stats = [
    { icon: Users, value: '10,000+', label: 'Happy Customers' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Star, value: '500+', label: 'Events Completed' },
    { icon: Sparkles, value: '100%', label: 'Satisfaction' },
  ];

  return (
    <div>
      <HeroSection />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
              Welcome to Meenakshi Caterings
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the perfect blend of traditional flavors and modern culinary excellence. We bring joy
              to your celebrations with authentic cuisine, impeccable service, and unforgettable dining experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-amber-600 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-amber-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesSection onBooking={onBooking} />

      <section className="py-16 bg-gradient-to-br from-amber-900 to-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">What Makes Us Special</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-amber-600 rounded-full p-1 mt-1">
                    <Star className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Fresh Ingredients</h3>
                    <p className="text-amber-100">We source the finest and freshest ingredients daily to ensure top quality in every dish.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-amber-600 rounded-full p-1 mt-1">
                    <Star className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Expert Chefs</h3>
                    <p className="text-amber-100">Our team of experienced chefs brings decades of culinary expertise to your table.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-amber-600 rounded-full p-1 mt-1">
                    <Star className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Customizable Menus</h3>
                    <p className="text-amber-100">Flexible menu options tailored to your preferences and dietary requirements.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-amber-600 rounded-full p-1 mt-1">
                    <Star className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Professional Service</h3>
                    <p className="text-amber-100">Dedicated staff ensuring seamless execution from planning to cleanup.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Special Features"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Gallery />

      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "Meenakshi Caterings made our wedding day absolutely perfect! The food was delicious, and the
                service was impeccable. All our guests were raving about the biryani!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-amber-600 to-orange-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">
                  R
                </div>
                <div>
                  <p className="font-semibold text-amber-900">Rajesh Kumar</p>
                  <p className="text-sm text-gray-600">Wedding Client</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "Outstanding service for our corporate event! Professional, punctual, and the food quality was
                exceptional. We'll definitely be using their services again."
              </p>
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-amber-600 to-orange-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">
                  P
                </div>
                <div>
                  <p className="font-semibold text-amber-900">Priya Sharma</p>
                  <p className="text-sm text-gray-600">Corporate Client</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
