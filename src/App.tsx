import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BookingModal from './components/BookingModal';
import Gallery from './components/Gallery';
import ServicesSection from './components/ServicesSection';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({
    planType: '',
    planName: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };

  // 🔥 COMMON BOOKING HANDLER (works for Home & Services page)
  const handleBooking = (planType: string, planName: string) => {
    setBookingDetails({ planType, planName });
    setIsBookingOpen(true);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onBooking={handleBooking} />;

      case 'about':
        return <AboutPage />;

      case 'services':
        return (
          <ServicesSection
            onBooking={handleBooking} // 🔥 FIXED — using real handler
          />
        );

      case 'gallery':
        return <Gallery />;

      case 'contact':
        return <ContactPage />;

      default:
        return <HomePage onBooking={handleBooking} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavigate={handleNavigation} currentPage={currentPage} />

      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        planType={bookingDetails.planType}
        planName={bookingDetails.planName}
      />
    </div>
  );
}

export default App;
