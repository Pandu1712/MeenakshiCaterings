import { useEffect, useRef } from 'react';

const Gallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const galleryItems = [
    {
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
      name: 'Wedding Buffet',
    },
    {
      image: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800',
      name: 'Traditional Feast',
    },
    {
      image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=800',
      name: 'Dessert Table',
    },
    {
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
      name: 'Corporate Event',
    },
    {
      image: 'https://images.pexels.com/photos/3184189/pexels-photo-3184189.jpeg?auto=compress&cs=tinysrgb&w=800',
      name: 'Birthday Celebration',
    },
    {
      image: 'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=800',
      name: 'Appetizers',
    },
    {
      image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=800',
      name: 'Main Course',
    },
    {
      image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800',
      name: 'Festival Special',
    },
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

    const handleMouseEnter = () => {
      isPaused = true;
    };

    const handleMouseLeave = () => {
      isPaused = false;
    };

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
    <section id="gallery" className="py-16 bg-gradient-to-br from-orange-50 to-amber-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">Our Gallery</h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Glimpses of our delicious creations and memorable events
          </p>
        </div>
      </div>

      <div ref={scrollRef} className="flex space-x-6 overflow-x-hidden px-4" style={{ scrollBehavior: 'auto' }}>
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
            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/90 via-amber-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
              <p className="text-amber-100">Crafted with love and passion</p>
            </div>
            <div className="absolute top-4 right-4 bg-amber-600 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
