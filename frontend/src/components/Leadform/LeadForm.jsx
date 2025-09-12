import React, { useState } from "react";
import { useLead } from "../../context/LeadProvider";
import { CircleCheckBig, ArrowLeft, User, Mail, Phone, Building, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    source: "",
    status: "new",
  });
  const { addLead } = useLead();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (formData.phone.trim().length !== 10) newErrors.phone = "Phone number should be of 10 digits";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    if (validateForm()) {
      await addLead(formData);
      setIsSubmitted(true);
      setLoading(false)

      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          source: "",
          status: "new",
        });
        setIsSubmitted(false);
        navigate("/lead-list");
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-8">
      <div className="max-w-4xl w-full mx-auto flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-2xl">

        <div className="w-full md:w-2/5 bg-gradient-to-b from-blue-600 to-indigo-700 text-white p-8 flex flex-col justify-between">
          <div>
            <button
              onClick={() => navigate("/lead-list")}
              className="flex items-center text-blue-100 hover:text-white transition-colors mb-10"
            >
              <ArrowLeft size={18} className="mr-2" />
              Back to Leads
            </button>

            <h1 className="text-3xl font-bold mb-4">Capture New Lead</h1>
            <p className="text-blue-100 mb-6">
              Fill in the details below to add a new potential customer to your sales pipeline.
            </p>

            <div className="space-y-4 mt-10">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white text-blue-400 flex items-center justify-center mr-3">
                  <User size={16} />
                </div>
                <p>Contact information</p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white text-blue-400 flex items-center justify-center mr-3">
                  <Building size={16} />
                </div>
                <p>Company details</p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white text-blue-400 flex items-center justify-center mr-3">
                  <BarChart3 size={16} />
                </div>
                <p>Lead status</p>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <p className="text-blue-200 text-sm">© 2025 LeadManager</p>
          </div>
        </div>

        <div className="w-full md:w-3/5 bg-white p-8 md:p-10 flex flex-col justify-center">
          {isSubmitted ? (
            <div className="text-center py-10">
              <CircleCheckBig className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Lead Captured Successfully!
              </h2>
              <p className="text-gray-600 mb-6">
                The lead has been added to your system and you'll be redirected shortly.
              </p>
              <div className="w-16 h-16 border-t-4 border-t-black border-blue-500 border-solid rounded-full animate-spin mx-auto"></div>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-blue-600">Lead Information</h2>
                <p className="text-gray-500">Please provide the lead's details</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="md:col-span-2">
                    <label htmlFor="name" className=" text-sm font-medium text-gray-700 mb-2 flex items-center">
                      <User size={16} className="mr-2 text-gray-400" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? "border-red-500" : "border-gray-300"
                        }`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-2 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="md:col-span-2">
                    <label htmlFor="email" className=" text-sm font-medium text-gray-700 mb-2 flex items-center">
                      <Mail size={16} className="mr-2 text-gray-400" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? "border-red-500" : "border-gray-300"
                        }`}
                      placeholder="john.doe@example.com"
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="md:col-span-2">
                    <label htmlFor="phone" className=" text-sm font-medium text-gray-700 mb-2 flex items-center">
                      <Phone size={16} className="mr-2 text-gray-400" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.phone ? "border-red-500" : "border-gray-300"
                        }`}
                      placeholder="(123) 456-7890"
                    />
                    {errors.phone && (
                      <p className="mt-2 text-sm text-red-600">{errors.phone}</p>
                    )}
                  </div>

                  {/* Source */}
                  <div className="md:col-span-2">
                    <label htmlFor="source" className=" text-sm font-medium text-gray-700 mb-2 flex items-center">
                      <Building size={16} className="mr-2 text-gray-400" />
                      Source
                    </label>
                    <input
                      type="text"
                      id="source"
                      name="source"
                      value={formData.source}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="LinkedIn, Instagram, etc."
                    />
                  </div>

                  {/* Status */}
                  <div className="md:col-span-2">
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                      Status
                    </label>
                    <select
                      id="status"
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="qualified">Qualified</option>
                      <option value="lost">Lost</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 disabled:opacity-70 shadow-md"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Saving...
                    </span>
                  ) : (
                    "Save Lead"
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadForm;