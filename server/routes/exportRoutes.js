const express = require('express');
const router = express.Router();
const { exportToExcel } = require('../controllers/exportController');

router.get('/export-excel', exportToExcel);

module.exports = router;
