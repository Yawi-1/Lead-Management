const router = require('express').Router()
const { addNewLead, getAllLeads } = require('../controllers/lead.controller')

router.get('/', getAllLeads)
router.post('/', addNewLead)

module.exports = router