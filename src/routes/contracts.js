const express = require('express');
const { getProfile } = require('../middleware/getProfile');
const contractsController = require('../controllers/contractsController');

const router = express.Router();

router.get('/', getProfile, async (req, res) => contractsController.getAllContractsForProfileId(req, res));

router.get('/:id', getProfile, async (req, res) => contractsController.getContractById(req, res));

module.exports = router;
