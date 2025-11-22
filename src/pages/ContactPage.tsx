import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    functionType: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hello Meenakshi Caterings!%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AFunction Type: ${formData.functionType}%0A%0AMessage:%0A${formData.message}`;

    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cleaned = e.target.value.replace(/\D/g, '');

    if (cleaned.length <= 10) {
      setFormData({ ...formData, phone: cleaned });
    }
  };

  return (
    <div className="min-h-screen bg-[#EADABC]">

      {/* Title */}
      <h1 className="text-center text-4xl font-bold text-[#875724] pt-10">
        Contact Us
      </h1>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Details */}
          <div>
            <h2 className="text-3xl font-bold text-[#875724] mb-8">Get In Touch</h2>

            <div className="space-y-6 mb-8">

              {/* Address */}
              <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md">
                <div className="bg-[#875724] p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#875724] mb-1">Address</h3>
                  <p className="text-gray-700">
                    123 Catering Street, Food District<br />
                    Chennai, Tamil Nadu 600001
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md">
                <div className="bg-[#875724] p-3 rounded-full">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#875724] mb-1">Phone</h3>
                  <p className="text-gray-700">+91 98765 43210</p>
                  <p className="text-gray-700">+91 98765 43211</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md">
                <div className="bg-[#875724] p-3 rounded-full">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#875724] mb-1">Email</h3>
                  <p className="text-gray-700">info@meenakshicaterings.com</p>
                  <p className="text-gray-700">bookings@meenakshicaterings.com</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md">
                <div className="bg-[#875724] p-3 rounded-full">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#875724] mb-1">Working Hours</h3>
                  <p className="text-gray-700">Monday - Sunday</p>
                  <p className="text-gray-700">8:00 AM - 10:00 PM</p>
                </div>
              </div>

            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-[#875724] mb-6">Send Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-[#875724] mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#D0B89A] rounded-lg focus:border-[#875724]"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-[#875724] mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#D0B89A] rounded-lg focus:border-[#875724]"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-[#875724] mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  className="w-full px-4 py-3 border-2 border-[#D0B89A] rounded-lg focus:border-[#875724]"
                  placeholder="9876543210"
                />
                <p className="text-xs text-red-600 mt-1">
                  {formData.phone.length > 0 && formData.phone.length < 10
                    ? 'Phone number must be 10 digits'
                    : ''}
                </p>
              </div>

              {/* Dropdown */}
              <div>
                <label className="block text-sm font-semibold text-[#875724] mb-2">Function Type</label>
                <select
                  name="functionType"
                  required
                  value={formData.functionType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#D0B89A] rounded-lg focus:border-[#875724]"
                >
                  <option value="">Select Function</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Reception">Reception</option>
                  <option value="Birthday Party">Birthday Party</option>
                  <option value="Corporate Event">Corporate Event</option>
                  <option value="House Warming">House Warming</option>
                  <option value="Baby Shower">Baby Shower</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-[#875724] mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-[#D0B89A] rounded-lg focus:border-[#875724] resize-none"
                  placeholder="Tell us about your event..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={formData.phone.length !== 10}
                className="w-full bg-[#875724] text-white py-4 rounded-lg font-semibold hover:bg-[#6A431E] transition-all duration-300 shadow-lg disabled:opacity-40"
              >
                <div className="flex items-center justify-center space-x-2">
                  <Send className="h-5 w-5" />
                  <span>Send Message on WhatsApp</span>
                </div>
              </button>

            </form>
          </div>
        </div>

        {/* ⭐ GOOGLE MAP SECTION */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-[#875724] mb-6 text-center">
            Our Location
          </h2>

          <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-xl border-4 border-[#875724]">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.1234567!2d80.2707!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265abcd!2sChennai%20Food%20District!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
