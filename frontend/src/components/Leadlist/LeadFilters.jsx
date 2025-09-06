import React from "react";
import { Table, List, Search, Filter } from "lucide-react";

const LeadFilters = ({ searchTerm, setSearchTerm, statusFilter, setStatusFilter, view, setView }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
       
        <div className="flex-1">
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
            Search leads
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              id="search"
              placeholder="Search by name, email, or source..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="flex-1">
          <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
            Filter by status
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Filter size={18} className="text-gray-400" />
            </div>
            <select
              id="status"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
            >
              <option value="all">All Statuses</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="qualified">Qualified</option>
              <option value="lost">Lost</option>
            </select>
          </div>
        </div>

        <div className="flex items-end">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setView("table")}
              className={`px-4 py-2.5 text-sm font-medium rounded-l-lg border focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors ${
                view === "table"
                  ? "bg-blue-100 text-blue-700 border-blue-300"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              <Table size={18} className="inline mr-2" />
              Table View
            </button>
            <button
              onClick={() => setView("card")}
              className={`px-4 py-2.5 text-sm font-medium rounded-r-lg border-t border-b border-r focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors ${
                view === "card"
                  ? "bg-blue-100 text-blue-700 border-blue-300"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              <List size={18} className="inline mr-2" />
              Card View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadFilters;
