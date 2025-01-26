import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Stethoscope, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Doctor {
  id: string;
  profile: {
    full_name: string;
    phone: string;
  };
  specialization: string;
  bio: string;
  available_days: string[];
}

export default function DoctorList() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchDoctors() {
      try {
        const { data, error } = await supabase
          .from('doctors')
          .select(`
            id,
            specialization,
            bio,
            available_days,
            profile:profiles(full_name, phone)
          `)
          .order('specialization');

        if (error) throw error;
        setDoctors(data || []);
      } catch (err) {
        console.error('Error fetching doctors:', err);
        setError('Failed to load doctors. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    fetchDoctors();
  }, []);

  if (loading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="text-gray-600">Loading doctors...</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Our Doctors</h1>
      </div>

      {error && (
        <div className="bg-red-50 text-red-800 p-4 rounded-md mb-6">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Dr. {doctor.profile.full_name}
                  </h2>
                  <div className="flex items-center mt-2 text-gray-600">
                    <Stethoscope className="h-5 w-5 mr-2" />
                    <span>{doctor.specialization}</span>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-gray-600 line-clamp-3">{doctor.bio}</p>

              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-900">Available Days</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {doctor.available_days.map((day) => (
                    <span
                      key={day}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      {day}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <Link
                  to={`/appointments/new?doctor=${doctor.id}`}
                  className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {doctors.length === 0 && !error && (
        <div className="text-center py-12">
          <p className="text-gray-600">No doctors available at the moment.</p>
        </div>
      )}
    </div>
  );
}