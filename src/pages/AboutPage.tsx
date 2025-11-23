import { Users, Award, Heart, Clock } from "lucide-react";

const AboutPage = () => {
  const features = [
    {
      icon: Users,
      title: "Experienced Team",
      description: "Professional chefs with over 15 years of culinary expertise",
    },
    {
      icon: Award,
      title: "Quality Service",
      description: "Award-winning catering services recognized across the region",
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every dish prepared with authentic ingredients and passion",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Punctual service ensuring your event runs smoothly",
    },
  ];

  return (
     <section id="About">
       <div className="min-h-screen bg-[#EADABC]">
      {/* HERO SECTION */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-[#875724]/80 z-10" />

        <img
          src="https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="About Us"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold tracking-wide">
              MEENAKSHI Outdoor Catering
            </h1>
            <p className="text-xl mt-4 italic">
              “Flavors that tell a story, service that makes it unforgettable.”
            </p>
          </div>
        </div>
      </div>

      {/* OUR STORY */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#875724] mb-6">
              Our Story
            </h2>

            <p className="text-[#4a3c2b] text-lg leading-relaxed mb-4">
              At MEENAKSHI Outdoors, we wish to take our personal love for food
              to the next level by taking up innovative gastronomic food
              flavours & techniques. Each and every event we serve is a
              beautiful opportunity for us to exceed expectations by celebrating
              food in a way no one does.
            </p>

            <p className="text-[#4a3c2b] text-lg leading-relaxed mb-4">
              We would love to enhance our guest's palate with the freshest
              ingredients and flavours taking the joyous occasion a step higher.
              In the years to come we would be grateful to continue the legacy
              and create the same magic and experience one event at a time.
            </p>

            <p className="text-[#4a3c2b] text-lg leading-relaxed">
              Our journey is driven by passion, quality and a commitment to
              deliver unforgettable culinary experiences with every celebration.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Kitchen"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-[#875724] text-white p-6 rounded-xl shadow-xl">
              <p className="text-4xl font-bold">15+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="mt-24">
          <h2 className="text-4xl font-bold text-center text-[#875724] mb-12">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-[#875724]/20"
              >
                <div className="bg-[#875724] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#875724] text-center">
                  {item.title}
                </h3>
                <p className="text-center text-gray-700 mt-3">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* OUR PROMISE */}
        <div className="mt-24 bg-[#875724] text-white p-14 rounded-2xl shadow-xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Promise</h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed text-[#EADABC]">
            We deliver not just food, but unforgettable experiences. From
            premium ingredients to impeccable presentation—every detail is
            handled with love, dedication and perfection. Your satisfaction is
            our success.
          </p>
        </div>
      </div>
    </div>
    </section>
   
  );
};

export default AboutPage;
