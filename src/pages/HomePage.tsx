import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import Gallery from '../components/Gallery';
import { Star, Award, Users, Sparkles, Contact } from 'lucide-react';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';

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

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#875724] mb-4">
              Welcome to Meenakshi Caterings
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the perfect blend of traditional flavors and modern culinary excellence. 
              We bring joy to your celebrations with authentic cuisine, impeccable service, 
              and unforgettable dining experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-[#EADABC] rounded-2xl shadow-lg hover:shadow-xl 
                transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-[#875724] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#875724] mb-2">{stat.value}</h3>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesSection onBooking={onBooking} />
     <AboutPage/>
      {/* Special Features */}
      <section className="py-16 bg-[#875724] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">What Makes Us Special</h2>

              <div className="space-y-4">
                {['Fresh Ingredients', 'Expert Chefs', 'Customizable Menus', 'Professional Service'].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="bg-white/20 rounded-full p-1 mt-1">
                      <Star className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item}</h3>
                      <p className="text-[#EADABC]">
                        {i === 0 && 'We source the freshest ingredients daily to ensure top quality.'}
                        {i === 1 && 'Our experienced chefs bring decades of culinary mastery.'}
                        {i === 2 && 'Flexible menus tailored for your tastes & dietary needs.'}
                        {i === 3 && 'Professional staff ensuring smooth and memorable service.'}
                      </p>
                    </div>
                  </div>
                ))}
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

      {/* Testimonials */}
      <section className="py-16 bg-[#EADABC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#875724] mb-4">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[ 
              { name: "Rajesh Kumar", letter: "R", text: "Meenakshi Caterings made our wedding day absolutely perfect!" },
              { name: "Priya Sharma", letter: "P", text: "Outstanding service for our corporate event!" }
            ].map((review, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#875724] text-[#875724]" />
                  ))}
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">{review.text}</p>

                <div className="flex items-center space-x-3">
                  <div className="bg-[#875724] w-12 h-12 rounded-full flex items-center 
                  justify-center text-white font-bold">
                    {review.letter}
                  </div>
                  <div>
                    <p className="font-semibold text-[#875724]">{review.name}</p>
                    <p className="text-sm text-gray-600">{index === 0 ? "Wedding Client" : "Corporate Client"}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      <ContactPage/>
    </div>
  );
};

export default HomePage;
