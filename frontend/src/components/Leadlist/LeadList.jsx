import React, { useState } from "react";
import data from '../../assets/data'
import LeadTable from "./LeadTable";
import LeadCard from "./LeadCard";

const LeadList = () => {
  const [leads] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [view, setView] = useState("table");

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.company.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || lead.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Lead List</h1>
      <p className="text-gray-600 mb-8">
        View and manage all your captured leads.
      </p>

      {/* Filters */}
      <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Search */}
          <div>
            <label
              htmlFor="search"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Search Leads
            </label>
            <input
              type="text"
              id="search"
              placeholder="Search by name, email, or company..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Status filter */}
          <div>
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Filter by Status
            </label>
            <select
              id="status"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="qualified">Qualified</option>
              <option value="lost">Lost</option>
            </select>
          </div>

          {/* View Toggle */}
          <div className="flex items-end justify-end">
            <button
              onClick={() => setView(view === "table" ? "card" : "table")}
              className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
            >
              {view === "table" ? "Switch to Card View" : "Switch to Table View"}
            </button>
          </div>
        </div>

        {/* Table And Cards View Conditional Rendering*/}
        <div className="w-full md:h-[20rem] p-2  overflow-y-auto">
          {view === "table" ? (
            <LeadTable filteredLeads={filteredLeads} />
          ) : (
            <LeadCard filteredLeads={filteredLeads} />
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadList;