import { useState } from 'react';
import { Check, Leaf, Drumstick } from 'lucide-react';

interface ServicesSectionProps {
  onBooking: (planType: string, planName: string) => void;
}

const ServicesSection = ({ onBooking }: ServicesSectionProps) => {
  const [selectedType, setSelectedType] = useState<'veg' | 'non-veg'>('veg');

  const vegPlans = [
    {
      name: 'Silver',
      items: [
        'Paneer Butter Masala',
        'Dal Tadka',
        'Vegetable Biryani',
        'Chapati (3 pcs)',
        'Raita',
        'Salad',
        'Gulab Jamun',
      ],
    },
    {
      name: 'Gold',
      items: [
        'Paneer Tikka Masala',
        'Dal Makhani',
        'Veg Pulao',
        'Malai Kofta',
        'Naan (3 pcs)',
        'Raita & Papad',
        'Salad',
        'Ice Cream',
      ],
    },
    {
      name: 'Platinum',
      items: [
        'Paneer Tikka',
        'Mushroom Masala',
        'Dal Makhani',
        'Special Biryani',
        'Veg Manchurian',
        'Kulcha (4 pcs)',
        'Raita & Papad',
        'Salad',
        'Gulab Jamun',
        'Ice Cream',
      ],
    },
    {
      name: 'Diamond',
      items: [
        'Paneer Tikka',
        'Malai Paneer',
        'Mushroom Pepper Fry',
        'Dal Makhani',
        'Royal Veg Biryani',
        'Veg Manchurian',
        'Gobi 65',
        'Butter Naan (4 pcs)',
        'Raita & Papad',
        'Fresh Salad',
        'Gulab Jamun',
        'Ice Cream',
        'Fresh Juice',
      ],
    },
  ];

  const nonVegPlans = [
    {
      name: 'Silver',
      items: [
        'Chicken Curry',
        'Dal Tadka',
        'Chicken Biryani',
        'Chapati (3 pcs)',
        'Raita',
        'Salad',
        'Gulab Jamun',
      ],
    },
    {
      name: 'Gold',
      items: [
        'Chicken Tikka Masala',
        'Mutton Curry',
        'Chicken Biryani',
        'Dal Makhani',
        'Naan (3 pcs)',
        'Raita & Papad',
        'Salad',
        'Ice Cream',
      ],
    },
    {
      name: 'Platinum',
      items: [
        'Chicken Tikka',
        'Butter Chicken',
        'Mutton Rogan Josh',
        'Special Biryani',
        'Fish Fry',
        'Kulcha (4 pcs)',
        'Dal Makhani',
        'Raita & Papad',
        'Salad',
        'Gulab Jamun',
        'Ice Cream',
      ],
    },
    {
      name: 'Diamond',
      items: [
        'Tandoori Chicken',
        'Butter Chicken',
        'Mutton Rogan Josh',
        'Prawn Masala',
        'Royal Chicken Biryani',
        'Fish Fry',
        'Chicken 65',
        'Butter Naan (4 pcs)',
        'Dal Makhani',
        'Raita & Papad',
        'Fresh Salad',
        'Gulab Jamun',
        'Ice Cream',
        'Fresh Juice',
      ],
    },
  ];

  const plans = selectedType === 'veg' ? vegPlans : nonVegPlans;

  const getPlanColor = (planName: string) => {
    switch (planName) {
      case 'Silver':
        return 'from-slate-400 to-slate-600';
      case 'Gold':
        return 'from-yellow-400 to-yellow-600';
      case 'Platinum':
        return 'from-cyan-400 to-cyan-600';
      case 'Diamond':
        return 'from-pink-400 to-purple-600';
      default:
        return 'from-gray-400 to-gray-600';
    }
  };

  return (
    <section id="services" className="py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">Our Services</h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Choose from our carefully curated menu plans designed to make your event memorable
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-white p-2 rounded-full shadow-lg inline-flex">
            <button
              onClick={() => setSelectedType('veg')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                selectedType === 'veg'
                  ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md'
                  : 'text-amber-800 hover:bg-amber-50'
              }`}
            >
              <Leaf className="h-5 w-5" />
              <span>Vegetarian</span>
            </button>
            <button
              onClick={() => setSelectedType('non-veg')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                selectedType === 'non-veg'
                  ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md'
                  : 'text-amber-800 hover:bg-amber-50'
              }`}
            >
              <Drumstick className="h-5 w-5" />
              <span>Non-Vegetarian</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              <div className={`bg-gradient-to-r ${getPlanColor(plan.name)} text-white p-6 text-center`}>
                <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm opacity-90">Package</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {plan.items.map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => onBooking(selectedType, plan.name)}
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
