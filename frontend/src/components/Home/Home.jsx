import { List, UserRoundPlus } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-amber-700 mb-6">
          Streamline Your Lead Management
        </h1>
        <p className="text-xl text-gray-600 mb-10">
          Capture, organize, and track your leads with our simple yet powerful lead management system.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <UserRoundPlus className='text-amber-600' />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Capture New Leads</h2>
            <p className="text-gray-600 mb-4">Quickly add new leads with our simple form that captures all essential information.</p>
            <Link 
              to="/lead-form" 
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              Add a Lead
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <List className='text-amber-600' />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">View Your Leads</h2>
            <p className="text-gray-600 mb-4">Browse, search, and manage all your captured leads in one convenient location.</p>
            <Link 
              to="/lead-list" 
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              View Leads
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
