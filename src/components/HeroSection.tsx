import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Welcome To Meenakshi Parcel and Catering',
      description: 'The Southern Flavours of India',
      image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763897074/WhatsApp_Image_2025-11-23_at_16.08.57_0870ac85_zeffzb.jpg',
    },
    {
      title: 'Welcome To Meenakshi Parcel and Catering',
      description: 'The Southern Flavours of India',
      image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763897074/WhatsApp_Image_2025-11-23_at_16.08.58_89ee7aea_lidvmj.jpg',
    },
    {
      title: 'Welcome To Meenakshi Parcel and Catering',
      description: 'The Southern Flavours of India',
      image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763897074/WhatsApp_Image_2025-11-23_at_16.09.00_1d77ff63_ytdi9w.jpg',
    },
    {
      title: 'Welcome To Meenakshi Parcel and Catering',
      description: 'The Southern Flavours of India',
      image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763897072/WhatsApp_Image_2025-11-23_at_16.26.37_ac1d542e_szn2rb.jpg',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[600px] md:h-[700px] overflow-hidden bg-gradient-to-br from-amber-50 to-orange-100">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/70 to-orange-900/50 z-10" />

          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* TEXT AREA WITH ANIMATION */}
          <div className="absolute inset-0 z-20 flex items-end justify-center pb-20 md:pb-28">
            <div
              className={`text-center text-white px-4 transition-all duration-1000 ${
                index === currentSlide
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-3 drop-shadow-xl">
                {slide.title}
              </h2>
              <p className="text-lg md:text-2xl text-amber-100 font-light tracking-wide">
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* LEFT BUTTON */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-amber-800/80 hover:bg-amber-700 text-white p-3 rounded-full transition-all hover:scale-110"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-amber-800/80 hover:bg-amber-700 text-white p-3 rounded-full transition-all hover:scale-110"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* DOT INDICATORS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? 'w-8 bg-amber-500' : 'w-2 bg-amber-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
