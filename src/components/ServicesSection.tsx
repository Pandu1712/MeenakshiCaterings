import { useState } from "react";
import { Check, Leaf, Drumstick, UtensilsCrossed } from "lucide-react";

interface ServicesSectionProps {
  onBooking: (planType: string, planName: string) => void;
}

const ServicesSection = ({ onBooking }: ServicesSectionProps) => {
  const [selectedType, setSelectedType] = useState<"veg" | "non-veg">("veg");

  const proposalMenu = [
    {
      title: "Refresments (90 mins circulation)",
      items: ["Water Melon Juice", "Fruit Punch"],
    },
    {
      title: "Veg Appetizers (90 mins circulation)",
      items: ["VEG RR (ROYAL RECEPIE)", "Baby Corn 65"],
    },
    {
      title: "Salads Bar Station",
      items: [
        "Fresh Green Salad",
        "Classic Veg Greek Salad",
        "Mixed Sprouts",
      ],
    },
    {
      title: "Assorted Indian Breads",
      items: ["Butter Naan", "Masala Kulcha"],
    },
    {
      title: "Sweets - Live Station",
      items: ["Bobbatlu", "Jilebi"],
    },
    {
      title: "Hot Items",
      items: ["Mirchi Bajji", "Sweet Corn Samosa"],
    },
    {
      title: "Sweet Items",
      items: ["Dry Fruit Boorelu", "Carrot Halwa"],
    },
    {
      title: "Main Course",
      items: [
        "Jack Fruit Biryani",
        "Karvepaku Rice",
        "Paneer Butter Masala",
        "Chole Masala",
        "Mulakada Kaju Curry",
        "Guttu Vankaya Curry",
        "Gobi 65",
        "Bendakaya Kaju Fry",
        "Pappu Tomato / Mango",
        "Sambar",
        "Majjiga Pulusu",
      ],
    },
    {
      title: "Fresh Grinded Chutneys",
      items: ["Beerakaya Tomato Chutney", "Coconut Mango Chutney", "Gongura Chutney"],
    },
    {
      title: "Pickles",
      items: ["Fresh Mango Pickle", "Dosakaya Avakaya", "Pandu Mirchi Pickle"],
    },
    {
      title: "Podi’s",
      items: ["Nalla Karam", "Kobbari Karam", "Putnala Podi"],
    },
    {
      title: "Accompaniments",
      items: [
        "White Rice",
        "Premium Fresh Curd",
        "Curd Raitha",
        "Pure Ghee",
        "Plain South Indian Papad & Vadiyalu",
      ],
    },
    {
      title: "Ice Creams",
      items: ["French Vanilla", "Butter Scotch"],
    },
    {
      title: "Desserts",
      items: ["Mini Gulab Jamun"],
    },
    {
      title: "Fruit Bar",
      items: ["Indian - 3 varieties", "Exotic - 3 varieties"],
    },
    {
      title: "Live Pan Station",
      items: ["Special Meetha Paan", "Oreo Paan", "Special Dates Paan"],
    },
    {
      title: "Live Chat Station",
      items: ["Pani Poori", "Aloo Tikka Chat", "Vada Pav"],
    },
  ];

  const vegPlans = [
    {
      name: "Silver",
      items: [
        "Paneer Butter Masala",
        "Dal Tadka",
        "Vegetable Biryani",
        "Chapati (3 pcs)",
        "Raita",
        "Salad",
        "Gulab Jamun",
      ],
    },
    {
      name: "Gold",
      items: [
        "Paneer Tikka Masala",
        "Dal Makhani",
        "Veg Pulao",
        "Malai Kofta",
        "Naan (3 pcs)",
        "Raita & Papad",
        "Salad",
        "Ice Cream",
      ],
    },
    {
      name: "Platinum",
      items: [
        "Paneer Tikka",
        "Mushroom Masala",
        "Dal Makhani",
        "Special Biryani",
        "Veg Manchurian",
        "Kulcha (4 pcs)",
        "Raita & Papad",
        "Salad",
        "Gulab Jamun",
        "Ice Cream",
      ],
    },
    {
      name: "Diamond",
      items: [
        "Paneer Tikka",
        "Malai Paneer",
        "Mushroom Pepper Fry",
        "Dal Makhani",
        "Royal Veg Biryani",
        "Veg Manchurian",
        "Gobi 65",
        "Butter Naan (4 pcs)",
        "Raita & Papad",
        "Fresh Salad",
        "Gulab Jamun",
        "Ice Cream",
        "Fresh Juice",
      ],
    },
  ];

  const nonVegPlans = [
    {
      name: "Silver",
      items: [
        "Chicken Curry",
        "Dal Tadka",
        "Chicken Biryani",
        "Chapati (3 pcs)",
        "Raita",
        "Salad",
        "Gulab Jamun",
      ],
    },
    {
      name: "Gold",
      items: [
        "Chicken Tikka Masala",
        "Mutton Curry",
        "Chicken Biryani",
        "Dal Makhani",
        "Naan (3 pcs)",
        "Raita & Papad",
        "Salad",
        "Ice Cream",
      ],
    },
    {
      name: "Platinum",
      items: [
        "Chicken Tikka",
        "Butter Chicken",
        "Mutton Rogan Josh",
        "Special Biryani",
        "Fish Fry",
        "Kulcha (4 pcs)",
        "Dal Makhani",
        "Raita & Papad",
        "Salad",
        "Gulab Jamun",
        "Ice Cream",
      ],
    },
    {
      name: "Diamond",
      items: [
        "Tandoori Chicken",
        "Butter Chicken",
        "Mutton Rogan Josh",
        "Prawn Masala",
        "Royal Chicken Biryani",
        "Fish Fry",
        "Chicken 65",
        "Butter Naan (4 pcs)",
        "Dal Makhani",
        "Raita & Papad",
        "Fresh Salad",
        "Gulab Jamun",
        "Ice Cream",
        "Fresh Juice",
      ],
    },
  ];

  const plans = selectedType === "veg" ? vegPlans : nonVegPlans;

  return (
    <section
      id="services"
      className="py-20 bg-[#EADABC] text-[#3b2c1a]"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#875724] mb-4">
            MEENAKSHI Outdoor Catering
          </h2>
          <p className="text-xl italic text-[#5a452a]">
            “Flavors that tell a story, service that makes it unforgettable.”
          </p>

          <p className="max-w-3xl mx-auto mt-6 text-lg leading-relaxed">
            At MEENAKSHI Outdoors, we take our personal love for food to the next
            level with innovative gastronomic techniques. Every event is an
            opportunity for us to exceed expectations, bringing the freshest
            flavors and unforgettable experiences to your guests.
          </p>
        </div>

        {/* CATEGORY BUTTONS */}
        <div className="flex justify-center mb-14">
          <div className="bg-white p-3 rounded-full shadow-lg flex space-x-2">
            <button
              onClick={() => setSelectedType("veg")}
              className={`px-8 py-2 rounded-full flex items-center space-x-2 transition ${
                selectedType === "veg"
                  ? "bg-[#875724] text-white shadow"
                  : "text-[#875724] hover:bg-[#eadabc]"
              }`}
            >
              <Leaf size={20} />
              <span>Vegetarian</span>
            </button>
            <button
              onClick={() => setSelectedType("non-veg")}
              className={`px-8 py-2 rounded-full flex items-center space-x-2 transition ${
                selectedType === "non-veg"
                  ? "bg-red-600 text-white shadow"
                  : "text-red-600 hover:bg-[#eadabc]"
              }`}
            >
              <Drumstick size={20} />
              <span>Non-Vegetarian</span>
            </button>
          </div>
        </div>

        {/* PLAN CARDS */}
        {/* PLAN CARDS */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
  {plans.map((plan) => {
    const planColors: Record<string, string> = {
      Silver: "bg-gradient-to-b from-gray-200 to-gray-50 text-gray-800 border-gray-300",
      Gold: "bg-gradient-to-b from-yellow-300 to-yellow-100 text-yellow-900 border-yellow-400",
      Platinum: "bg-gradient-to-b from-slate-300 to-slate-100 text-slate-900 border-slate-400",
      Diamond: "bg-gradient-to-b from-blue-200 to-blue-50 text-blue-900 border-blue-300",
    };

    const planIcons: Record<string, JSX.Element> = {
      Silver: <Leaf className="w-10 h-10" />,
      Gold: <Check className="w-10 h-10" />,
      Platinum: <Drumstick className="w-10 h-10" />,
      Diamond: <UtensilsCrossed className="w-10 h-10" />,
    };

    return (
      <div
        key={plan.name}
        className={`${planColors[plan.name]} rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 p-6 border`}
      >
        {/* ICON */}
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-white rounded-full shadow-md">
            {planIcons[plan.name]}
          </div>
        </div>

        {/* TITLE */}
        <h3 className="text-3xl font-bold text-center mb-4">
          {plan.name}
        </h3>

        {/* ITEMS */}
        <ul className="space-y-2 mb-6">
          {plan.items.map((item, idx) => (
            <li key={idx} className="flex items-start space-x-2">
              <Check size={18} className="text-green-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* BUTTON */}
        <button
          onClick={() => onBooking(selectedType, plan.name)}
          className="w-full bg-[#875724] hover:bg-[#6a431c] text-white py-3 rounded-lg text-lg font-semibold shadow-md transition"
        >
          Choose Plan
        </button>
      </div>
    );
  })}
</div>


        {/* FULL MENU SECTION */}
        <h2 className="text-4xl font-bold text-center text-[#875724] mb-10">
          Full MEENAKSHI Proposal Menu
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {proposalMenu.map((section, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md border border-[#875724]/20"
            >
              <h3 className="text-2xl font-bold text-[#875724] mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i} className="flex space-x-2">
                    <UtensilsCrossed size={18} className="text-[#875724]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-20 text-xl text-[#6a4f2a] font-semibold">
          “Creating unforgettable experiences—one event at a time!”
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
