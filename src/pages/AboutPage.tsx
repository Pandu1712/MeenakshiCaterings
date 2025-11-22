import { Users, Award, Heart, Clock } from 'lucide-react';

const AboutPage = () => {
  const features = [
    {
      icon: Users,
      title: 'Experienced Team',
      description: 'Professional chefs with over 15 years of culinary expertise',
    },
    {
      icon: Award,
      title: 'Quality Service',
      description: 'Award-winning catering services recognized across the region',
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every dish prepared with authentic ingredients and passion',
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Punctual service ensuring your event runs smoothly',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-orange-900/70 z-10" />
        <img
          src="https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="About Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-amber-100">Crafting Memorable Culinary Experiences</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-amber-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Founded in 2010, Meenakshi Caterings has been serving authentic and delicious food to families
                and businesses across the region. What started as a small family business has grown into one of
                the most trusted names in catering services.
              </p>
              <p>
                Our journey began with a simple mission: to bring the authentic taste of traditional cuisine to
                every celebration. Over the years, we've catered to thousands of weddings, corporate events,
                birthday parties, and special occasions, each time delivering excellence on a plate.
              </p>
              <p>
                We believe that food is not just about taste; it's about creating memories. Every dish we prepare
                carries the warmth of home-cooked meals and the finesse of professional culinary artistry.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Our Kitchen"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-amber-600 to-orange-600 text-white p-6 rounded-xl shadow-xl">
              <p className="text-4xl font-bold">15+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-amber-900 mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-amber-600 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-12 text-white text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Promise</h2>
          <p className="text-lg text-amber-100 max-w-3xl mx-auto leading-relaxed">
            We promise to deliver not just food, but an experience that delights your guests and makes your
            event truly special. From the freshest ingredients to impeccable presentation, we handle every
            detail with care and dedication. Your satisfaction is our success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
