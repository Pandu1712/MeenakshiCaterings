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
            <h2 className=" text-4xl md:text-5xl font-bold mb-4" style={{ color: "#875724" }}>
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
        {/* NEW 4x4 GRID SECTION WITH VERTICAL SCROLL */}
<section className="mt-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
    <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#875724" }}>
      Event Highlights
    </h2>
    <p className="text-lg max-w-2xl mx-auto" style={{ color: "#875724" }}>
      More beautiful memories captured from our catering services
    </p>
  </div>

  {/* SCROLLER HEIGHT */}
  <div className="overflow-hidden h-[600px] relative">
    {/* CONTAINER WITH AUTOMATIC VERTICAL SCROLL */}
    <div className="vertical-scroll-wrapper">

      {/* REPEATED GRID FOR INFINITE LOOP */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {[
          "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763897074/WhatsApp_Image_2025-11-23_at_16.08.57_0870ac85_zeffzb.jpg",
          "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763897074/WhatsApp_Image_2025-11-23_at_16.08.58_89ee7aea_lidvmj.jpg",
          "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763897073/WhatsApp_Image_2025-11-23_at_16.09.46_e8f4ed4e_fqc1jm.jpg",
          "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763897073/WhatsApp_Image_2025-11-23_at_16.09.45_777fef51_vj87fu.jpg",
          "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763897074/WhatsApp_Image_2025-11-23_at_16.09.00_1d77ff63_ytdi9w.jpg",
          "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763897073/WhatsApp_Image_2025-11-23_at_16.08.56_f58a5f83_nt08fw.jpg",
          "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763897074/WhatsApp_Image_2025-11-23_at_16.08.57_a35522f9_hl0jyi.jpg",
          "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763897073/WhatsApp_Image_2025-11-23_at_16.10.32_4dfd8f7f_wkh4jd.jpg"
        ].map((img, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <img src={img} className="w-full h-60 object-cover" alt="gallery" />
          </div>
        ))}
      </div>

      {/* Duplicate grid for infinite scroll effect */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 px-4">
        {[
          "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763897074/WhatsApp_Image_2025-11-23_at_16.08.57_0870ac85_zeffzb.jpg",
          "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763897074/WhatsApp_Image_2025-11-23_at_16.08.58_89ee7aea_lidvmj.jpg",
          "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763897073/WhatsApp_Image_2025-11-23_at_16.09.46_e8f4ed4e_fqc1jm.jpg",
          "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763897073/WhatsApp_Image_2025-11-23_at_16.09.45_777fef51_vj87fu.jpg",
          "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763897074/WhatsApp_Image_2025-11-23_at_16.09.00_1d77ff63_ytdi9w.jpg",
          "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763897073/WhatsApp_Image_2025-11-23_at_16.08.56_f58a5f83_nt08fw.jpg",
          "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763897074/WhatsApp_Image_2025-11-23_at_16.08.57_a35522f9_hl0jyi.jpg",
          "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763897073/WhatsApp_Image_2025-11-23_at_16.10.32_4dfd8f7f_wkh4jd.jpg"
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
  </div>
</section>

      </section>
    </>
  );
};

export default Gallery;
