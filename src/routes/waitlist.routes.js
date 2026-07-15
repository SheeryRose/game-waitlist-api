const express = require('express');
const { listWaitlist, getWaitlistEntry } = require('../controllers/waitlist.controller');

const router = express.Router();

router.get('/', listWaitlist);
router.get('/:id', getWaitlistEntry);

module.exports = router;