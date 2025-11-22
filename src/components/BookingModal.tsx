import { useState } from 'react';
import { X } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  planType: string;
  planName: string;
}

const BookingModal = ({ isOpen, onClose, planType, planName }: BookingModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    functionType: '',
  });

  const functionTypes = [
    'Wedding',
    'Birthday Party',
    'Anniversary',
    'Corporate Event',
    'Festival Celebration',
    'House Warming',
    'Engagement',
    'Other',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hello Meenakshi Caterings!%0A%0A*New Booking Request*%0A%0APlan: ${planName} (${planType.toUpperCase()})%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AAddress: ${formData.address}%0AFunction Type: ${formData.functionType}%0A%0APlease contact me with more details.`;

    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-amber-600 to-orange-600 text-white p-6 rounded-t-2xl flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold">Book Your Event</h3>
            <p className="text-amber-100 text-sm mt-1">
              {planName} Package - {planType === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-amber-900 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-amber-900 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-amber-900 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
              placeholder="+91 98765 43210"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-amber-900 mb-2">
              Function Type *
            </label>
            <select
              name="functionType"
              required
              value={formData.functionType}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors bg-white"
            >
              <option value="">Select function type</option>
              {functionTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-amber-900 mb-2">
              Event Address *
            </label>
            <textarea
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors resize-none"
              placeholder="Enter full event address"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <span>Send to WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
