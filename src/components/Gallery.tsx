import { useEffect, useRef } from 'react';

const Gallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const galleryItems = [
    { image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800', name: 'Wedding Buffet' },
    { image: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800', name: 'Traditional Feast' },
    { image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=800', name: 'Dessert Table' },
    { image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800', name: 'Corporate Event' },
    { image: 'https://images.pexels.com/photos/3184189/pexels-photo-3184189.jpeg?auto=compress&cs=tinysrgb&w=800', name: 'Birthday Celebration' },
    { image: 'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=800', name: 'Appetizers' },
    { image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=800', name: 'Main Course' },
    { image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800', name: 'Festival Special' },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollInterval: NodeJS.Timeout;
    let isPaused = false;

    const startScroll = () => {
      scrollInterval = setInterval(() => {
        if (!isPaused && scrollContainer) {
          scrollContainer.scrollLeft += 1;
          if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
            scrollContainer.scrollLeft = 0;
          }
        }
      }, 20);
    };

    const handleMouseEnter = () => { isPaused = true; };
    const handleMouseLeave = () => { isPaused = false; };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    startScroll();

    return () => {
      clearInterval(scrollInterval);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* CUSTOM SCROLL ANIMATION FOR GRID */}
      

      {/* MAIN SECTION */}
      <section id="gallery" className="py-16" style={{ backgroundColor: "#EADABC" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#875724" }}>
              Our Gallery
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#875724" }}>
              Glimpses of our delicious creations and memorable events
            </p>
          </div>
        </div>

        {/* HORIZONTAL SCROLLER */}
        <div ref={scrollRef} className="flex space-x-6 overflow-x-hidden px-4">
          {[...galleryItems, ...galleryItems].map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 h-96 relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(to top, rgba(135, 87, 36, 0.9), rgba(135, 87, 36, 0.4), transparent)" }}
              />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                <p>Crafted with love and passion</p>
              </div>

              <div
                className="absolute top-4 right-4 text-white px-4 py-2 rounded-full font-semibold shadow-lg"
                style={{ backgroundColor: "#875724" }}
              >
                {item.name}
              </div>
            </div>
          ))}
        </div>

        {/* NEW 4x4 GRID SECTION */}
        <section className="mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#875724" }}>
              Event Highlights
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#875724" }}>
              More beautiful memories captured from our catering services
            </p>
          </div>

          <div className="overflow-hidden h-[600px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-scroll-grid px-4">
              {[
                "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&w=800",
                "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&w=800",
                "https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&w=800",
                "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&w=800",
                "https://images.pexels.com/photos/616484/pexels-photo-616484.jpeg?auto=compress&w=800",
                "https://images.pexels.com/photos/5938/food-salad-restaurant-person.jpg?auto=compress&w=800",
                "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&w=800",
                "https://images.pexels.com/photos/3738751/pexels-photo-3738751.jpeg?auto=compress&w=800",
              ].map((img, index) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <img src={img} className="w-full h-60 object-cover" alt="gallery" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Gallery;
