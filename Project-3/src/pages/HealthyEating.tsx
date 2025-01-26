import React from 'react';
import { Utensils, Apple, Coffee, Carrot } from 'lucide-react';

const tips = [
  {
    icon: <Apple className="w-6 h-6 text-emerald-500" />,
    title: "Balanced Diet",
    description: "Include a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats in your daily meals."
  },
  {
    icon: <Coffee className="w-6 h-6 text-emerald-500" />,
    title: "Portion Control",
    description: "Pay attention to portion sizes and practice mindful eating to maintain a healthy weight."
  },
  {
    icon: <Carrot className="w-6 h-6 text-emerald-500" />,
    title: "Meal Planning",
    description: "Plan your meals ahead to ensure nutritious choices and avoid unhealthy food decisions."
  }
];

const HealthyEating = () => {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[40vh]"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Healthy Eating Guide</h1>
            <p className="text-xl md:text-2xl">Nourish your body with the right foods</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Tips Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {tips.map((tip, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex flex-col items-center text-center">
                {tip.icon}
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{tip.title}</h3>
                <p className="mt-2 text-gray-600">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Information */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Nutrition Guidelines</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-emerald-600 mb-3">1. Eat More Plants</h3>
              <p className="text-gray-700">Fill half your plate with vegetables and fruits. They're packed with essential nutrients and fiber.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-emerald-600 mb-3">2. Choose Whole Grains</h3>
              <p className="text-gray-700">Opt for whole grain bread, pasta, and cereals instead of refined grains for better nutrition and sustained energy.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-emerald-600 mb-3">3. Protein Wisdom</h3>
              <p className="text-gray-700">Include a variety of protein sources like lean meats, fish, legumes, and plant-based proteins in your diet.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-emerald-600 mb-3">4. Healthy Fats</h3>
              <p className="text-gray-700">Incorporate sources of healthy fats like avocados, nuts, seeds, and olive oil while limiting saturated fats.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthyEating;