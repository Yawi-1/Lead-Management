import { List, UserRoundPlus, ArrowRight, BarChart3, Filter, Target, Zap } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Transform Your{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Lead Management
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Capture, organize, and track your leads with an intuitive system designed to boost your sales productivity and conversion rates.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/lead-form"
              className="inline-flex items-center justify-center px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium hover:from-blue-700 hover:to-indigo-800 transition-all shadow-lg hover:shadow-xl"
            >
              <UserRoundPlus size={20} className="mr-2" />
              Capture New Lead
              <ArrowRight size={16} className="ml-2" />
            </Link>
            <Link
              to="/lead-list"
              className="inline-flex items-center justify-center px-6 py-4 rounded-xl bg-white text-gray-800 font-medium border border-gray-200 hover:border-gray-300 transition-all shadow-md hover:shadow-lg"
            >
              <List size={20} className="mr-2" />
              View All Leads
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mr-4">
              <UserRoundPlus className="text-blue-600" size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">500+</h3>
              <p className="text-gray-600">Leads Captured</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center">
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mr-4">
              <BarChart3 className="text-green-600" size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">32%</h3>
              <p className="text-gray-600">Conversion Rate</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center">
            <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center mr-4">
              <Zap className="text-amber-600" size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">24h</h3>
              <p className="text-gray-600">Average Response Time</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Our Lead Manager?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mx-auto mb-3">
                <Target className="text-blue-600" size={20} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Targeted Approach</h3>
              <p className="text-gray-600 text-sm">Focus on the leads that matter most with intelligent filtering</p>
            </div>
            <div className="p-4">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mx-auto mb-3">
                <Filter className="text-green-600" size={20} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Smart Organization</h3>
              <p className="text-gray-600 text-sm">Categorize leads by status, source, and priority</p>
            </div>
            <div className="p-4">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mx-auto mb-3">
                <Zap className="text-purple-600" size={20} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Quick Actions</h3>
              <p className="text-gray-600 text-sm">Save time with streamlined workflows and shortcuts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;