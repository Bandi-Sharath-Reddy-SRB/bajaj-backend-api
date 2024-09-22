const express = require('express');
const router = express.Router();
const bfhlController = require('../controllers/bfhlController');

router.post('/', bfhlController.processPost);
router.get('/', bfhlController.processGet);

module.exports = router;
