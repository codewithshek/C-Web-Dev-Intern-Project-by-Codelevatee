import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Shield, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to MediSchedule
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Book appointments with our experienced doctors quickly and easily.
          We're here to make healthcare accessible and convenient for you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Calendar className="h-12 w-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Easy Scheduling</h3>
          <p className="text-gray-600">
            Book appointments at your convenience, 24/7
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <Users className="h-12 w-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Expert Doctors</h3>
          <p className="text-gray-600">
            Choose from our wide range of specialized doctors
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <Clock className="h-12 w-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Instant Confirmation</h3>
          <p className="text-gray-600">
            Get immediate confirmation for your appointments
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <Shield className="h-12 w-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Secure Platform</h3>
          <p className="text-gray-600">
            Your health information is safe and protected
          </p>
        </div>
      </div>

      <div className="text-center">
        <Link
          to="/register"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Get Started Today
        </Link>
      </div>
    </div>
  );
}