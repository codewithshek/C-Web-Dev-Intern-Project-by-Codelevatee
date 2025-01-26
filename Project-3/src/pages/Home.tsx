import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Brain, Utensils, Activity } from 'lucide-react';

const features = [
  {
    icon: <Utensils className="w-8 h-8 text-emerald-500" />,
    title: 'Healthy Eating',
    description: 'Discover nutritious recipes and dietary guidelines for optimal health.',
    link: '/healthy-eating'
  },
  {
    icon: <Activity className="w-8 h-8 text-emerald-500" />,
    title: 'Exercise Tips',
    description: 'Learn effective workout routines and fitness recommendations.',
    link: '/exercise'
  },
  {
    icon: <Brain className="w-8 h-8 text-emerald-500" />,
    title: 'Mental Health',
    description: 'Find resources and tips for maintaining mental wellness.',
    link: '/mental-health'
  }
];

const Home = () => {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[60vh]"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to HealthyLife</h1>
            <p className="text-xl md:text-2xl mb-8">Your journey to a healthier lifestyle starts here</p>
            <Link
              to="/contact"
              className="bg-emerald-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-600 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Explore Health Topics</h2>
          <p className="mt-4 text-xl text-gray-600">Discover comprehensive resources for your well-being</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.link}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                {feature.icon}
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-emerald-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-2 bg-emerald-100 rounded-full mb-4">
            <Heart className="w-6 h-6 text-emerald-500" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Life?</h2>
          <p className="text-xl text-gray-600 mb-8">Join our community and get personalized health tips.</p>
          <Link
            to="/contact"
            className="inline-block bg-emerald-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-600 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;