import React from 'react';
import { Activity, Timer, Heart, Dumbbell } from 'lucide-react';

const workouts = [
  {
    icon: <Timer className="w-6 h-6 text-emerald-500" />,
    title: "Cardio",
    description: "30 minutes of moderate-intensity cardio exercises like walking, jogging, or cycling."
  },
  {
    icon: <Dumbbell className="w-6 h-6 text-emerald-500" />,
    title: "Strength Training",
    description: "2-3 sessions per week focusing on major muscle groups using weights or bodyweight exercises."
  },
  {
    icon: <Heart className="w-6 h-6 text-emerald-500" />,
    title: "Flexibility",
    description: "Daily stretching and flexibility exercises to improve range of motion and prevent injuries."
  }
];

const Exercise = () => {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[40vh]"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Exercise Tips</h1>
            <p className="text-xl md:text-2xl">Stay active, stay healthy</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Workout Types */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {workouts.map((workout, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex flex-col items-center text-center">
                {workout.icon}
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{workout.title}</h3>
                <p className="mt-2 text-gray-600">{workout.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Exercise Guidelines */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Exercise Guidelines</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-emerald-600 mb-3">1. Getting Started</h3>
              <p className="text-gray-700">Begin with light exercises and gradually increase intensity. Aim for 150 minutes of moderate activity per week.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-emerald-600 mb-3">2. Proper Form</h3>
              <p className="text-gray-700">Focus on maintaining proper form during exercises to maximize benefits and prevent injuries.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-emerald-600 mb-3">3. Rest and Recovery</h3>
              <p className="text-gray-700">Allow adequate rest between workouts and listen to your body's signals to prevent overtraining.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-emerald-600 mb-3">4. Stay Consistent</h3>
              <p className="text-gray-700">Create a regular exercise schedule and stick to it. Consistency is key for long-term results.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exercise;