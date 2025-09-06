import React, { useState } from "react";
import { useLead } from "../../context/LeadProvider";
import LeadFilters from "./LeadFilters";
import LeadTable from "./LeadTable";
import LeadCard from "./LeadCard";
import Spinner from '../Spinner/Spinner'

const LeadList = () => {
  const { leads, loading } = useLead();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [view, setView] = useState("table");

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.source.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === "all" || lead.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Lead Management</h1>
          <p className="text-gray-600">View and manage all your captured leads in one place</p>
        </div>

        {/* Filters */}
        <LeadFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          view={view}
          setView={setView}
        />

        {/* Results Summary */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{filteredLeads.length}</span> leads
          </p>
          <p className="text-sm text-gray-500">
            Total leads: <span className="font-medium">{leads.length}</span>
          </p>
        </div>

        {/* Leads */}
        {loading ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
            <Spinner/>
            <p className="mt-4 text-gray-600">Loading leads...</p>
          </div>
        ) : view === "table" ? (
          <LeadTable filteredLeads={filteredLeads} />
        ) : (
          <LeadCard filteredLeads={filteredLeads} />
        )}
      </div>
    </div>
  );
};

export default LeadList;
