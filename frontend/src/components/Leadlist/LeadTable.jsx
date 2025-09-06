import React from "react";
import { User, Search } from "lucide-react";
import getStatusColor from "../../utils/StatusColor";

const LeadTable = ({ filteredLeads }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr className="text-left text-sm text-gray-600 uppercase font-medium">
              <th className="py-4 px-6">Lead</th>
              <th className="py-4 px-6">Contact</th>
              <th className="py-4 px-6">Source</th>
              <th className="py-4 px-6 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredLeads.length > 0 ? (
              filteredLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <User size={16} className="text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{lead.name}</p>
                        <p className="text-sm text-gray-500">ID: {lead.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="space-y-1">
                      <p className="text-sm text-gray-600">{lead.email}</p>
                      <p className="text-sm text-gray-600">{lead.phone}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <p className="text-sm text-gray-600">{lead.source || "Not specified"}</p>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(lead.status)}`}>
                      {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-12 text-center">
                  <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <Search size={24} className="text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-600 mb-1">No leads found</h3>
                  <p className="text-gray-500 text-sm">Try adjusting your search or filter criteria</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadTable;
