const Lead = require('../models/Lead');

const addNewLead = async (req, res) => {
    try {
        const { name, email, phone, status, source } = req.body;

        if (!name || !email || !phone || !source) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingLead = await Lead.findOne({ email });
        if (existingLead) {
            return res.status(409).json({ message: "Lead with this email already exists" });
        }
        const lead = await Lead.create({ name, email, phone, status, source });
        return res.status(201).json({
            message: "Lead created successfully",
            lead,
        });
    } catch (error) {
        console.error("Error adding lead:", error.message);
        return res.status(500).json({ message: "Server error", error: error.message });
    }
};

const getAllLeads = async (req, res) => {
    try {
        const { page = 1, limit = 5 } = req.query;
        const skip = (page - 1) * limit;
        const leads = await Lead.find({})
            .skip(skip)
            .limit(limit)
        return res.status(201).json({
            message: "All leads retreived",
            leads,
        });
    } catch (error) {

    }
}

module.exports = { addNewLead, getAllLeads };
