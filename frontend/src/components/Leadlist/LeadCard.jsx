import React from "react";
import getStatusColor from "../../utils/StatusColor";

const LeadCard = ({ filteredLeads }) => {
    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredLeads.length > 0 ? (
                filteredLeads.map((lead,index) => (
                    <div
                        key={lead.id}
                        className="border rounded-2xl p-4 shadow-sm bg-white hover:shadow-md transition"
                    >
                         <p>S.No : {index+1}</p>
                        <h2 className="text-lg font-semibold text-gray-800">{lead.name}</h2>
                        <p className="text-sm text-gray-500">{lead.email}</p>
                        <p className="text-sm text-gray-500">{lead.phone}</p>
                        <p className="text-sm text-gray-600 mt-2">
                            <span className="font-medium">Source:</span> {lead.source}
                        </p>
                        <div className="mt-3">
                            <span
                                className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                                    lead.status
                                )}`}
                            >
                                {lead.status}
                            </span>
                        </div>
                    </div>
                ))
            ) : (
                <div className="col-span-full text-center py-6 text-gray-500">
                    No leads found.
                </div>
            )}
        </div>
    );
};

export default LeadCard;