import React from "react";
import { User, Mail, Phone, Building, Search } from "lucide-react";
import getStatusColor from "../../utils/StatusColor";

const LeadCard = ({ filteredLeads }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {filteredLeads.length > 0 ? (
        filteredLeads.map((lead, index) => (
          <div
            key={lead.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md hover:border-blue-100"
          >
            <div className="p-5 border-b border-gray-100 flex justify-between items-center">
              <span className="text-sm font-medium text-gray-500">Lead #{index + 1}</span>
              <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${getStatusColor(lead.status)}`}>
                {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
              </span>
            </div>

            <div className="p-5">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <User size={20} className="text-blue-600" />
                </div>
                <h2 className="text-lg font-semibold text-gray-800">{lead.name}</h2>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Mail size={16} className="mr-2 text-gray-400" />
                  <span className="text-sm">{lead.email}</span>
                </div>

                <div className="flex items-center text-gray-600">
                  <Phone size={16} className="mr-2 text-gray-400" />
                  <span className="text-sm">{lead.phone}</span>
                </div>

                {lead.source && (
                  <div className="flex items-center text-gray-600">
                    <Building size={16} className="mr-2 text-gray-400" />
                    <span className="text-sm">{lead.source}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-full text-center py-12">
          <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <Search size={24} className="text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-600 mb-1">No leads found</h3>
          <p className="text-gray-500 text-sm">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default LeadCard;
