import { createContext, useContext, useEffect, useState } from "react";
const LeadContext = createContext(null)
import axios from 'axios'
import { toast } from "react-toastify";
const LeadProvider = ({ children }) => {
    axios.defaults.baseURL = 'http://localhost:3000'
    const [leads, setLeads] = useState([])
    const [loading, setLoading] = useState(false)

    const getLeads = async () => {
        setLoading(true)
        try {
            const { data } = await axios.get('/api/leads')
            setLeads(data.leads)
        } catch (error) {
            toast(error?.response?.data?.message || error.message)
        } finally {
            setLoading(false)
        }
    }

    const addLead = async (formData) => {
        setLoading(true)
        try {
            const { data } = await axios.post('/api/leads', formData)
            toast.success(data.message)
            setLeads((prev) => [...prev, data.lead]);
        } catch (error) {
            toast(error?.response?.data?.message || error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getLeads()
    }, [])

    return (
        <LeadContext.Provider value={{ leads, loading, getLeads, addLead }}>
            {children}
        </LeadContext.Provider>
    )
}

export default LeadProvider
export const useLead = () => useContext(LeadContext)