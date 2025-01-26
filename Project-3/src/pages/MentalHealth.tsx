import React from 'react';
import { Brain, Sun, Moon, Heart } from 'lucide-react';

const strategies = [
  {
    icon: <Sun className="w-6 h-6 text-emerald-500" />,
    title: "Daily Self-Care",
    description: "Practice regular self-care activities like meditation, journaling, or spending time in nature."
  },
  {
    icon: <Moon className="w-6 h-6 text-emerald-500" />,
    title: "Quality Sleep",
    description: "Maintain a consistent sleep schedule and create a relaxing bedtime routine."
  },
  {
    icon: <Heart className="w-6 h-6 text-emerald-500" />,
    title: "Social Connection",
    description: "Nurture relationships and maintain strong social connections with friends and family."
  }
];

const MentalHealth = () => {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[40vh]"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Mental Health & Wellness</h1>
            <p className="text-xl md:text-2xl">Nurture your mind, embrace well-being</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Strategies Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {strategies.map((strategy, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex flex-col items-center text-center">
                {strategy.icon}
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{strategy.title}</h3>
                <p className="mt-2 text-gray-600">{strategy.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mental Health Tips */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Mental Wellness Tips</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-emerald-600 mb-3">1. Practice Mindfulness</h3>
              <p className="text-gray-700">Set aside time each day for mindfulness meditation or deep breathing exercises to reduce stress and anxiety.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-emerald-600 mb-3">2. Set Boundaries</h3>
              <p className="text-gray-700">Learn to set healthy boundaries in relationships and at work to protect your mental energy.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-emerald-600 mb-3">3. Seek Support</h3>
              <p className="text-gray-700">Don't hesitate to reach out to friends, family, or mental health professionals when you need support.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-emerald-600 mb-3">4. Healthy Habits</h3>
              <p className="text-gray-700">Maintain a balanced lifestyle with regular exercise, healthy eating, and adequate sleep to support mental well-being.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentalHealth;