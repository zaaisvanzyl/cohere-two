const express = require('express')
const { baseController } = require('../controllers/baseController')

const router = express.Router()

// GET
router.get('/', baseController)

module.exports = router