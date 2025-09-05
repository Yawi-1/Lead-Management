import React from 'react'
import getStatusColor from '../../utils/StatusColor'
const LeadTable = ({filteredLeads}) => {
    return (
        <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-50 text-gray-700 text-sm uppercase">
                    <tr>
                        <th className="py-3 px-4 text-left">S.No</th>
                        <th className="py-3 px-4 text-left">Name</th>
                        <th className="py-3 px-4 text-left">Email</th>
                        <th className="py-3 px-4 text-left">Phone</th>
                        <th className="py-3 px-4 text-left">Source</th>
                        <th className="py-3 px-4 text-left">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredLeads.length > 0 ? (
                        filteredLeads.map((lead,index) => (
                            <tr
                                key={lead.id}
                                className="border-t hover:bg-gray-50 transition-colors"
                            >
                                <td className="py-3 px-4">{index+1}.</td>
                                <td className="py-3 px-4">{lead.name}</td>
                                <td className="py-3 px-4">{lead.email}</td>
                                <td className="py-3 px-4">{lead.phone}</td>
                                <td className="py-3 px-4">{lead.source}</td>
                                <td className="py-3 px-4">
                                    <span
                                        className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                                            lead.status
                                        )}`}
                                    >
                                        {lead.status}
                                    </span>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center py-6 text-gray-500">
                                No leads found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default LeadTable;