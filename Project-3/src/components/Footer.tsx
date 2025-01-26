import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-emerald-600 text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">HealthyLife</h3>
            <p className="text-emerald-100">Your guide to a healthier lifestyle</p>
          </div>
          <div className="flex items-center space-x-2">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400" />
            <span>for a healthier world</span>
          </div>
        </div>
        <div className="mt-4 text-center text-emerald-100 text-sm">
          © {new Date().getFullYear()} HealthyLife. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;