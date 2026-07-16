const express = require('express');
const {
  listWaitlist,
  getWaitlistEntry,
  createWaitlistEntry
} = require('../controllers/waitlist.controller');
const { validateWaitlistEntry } = require('../middleware/validate');

const router = express.Router();

router.get('/', listWaitlist);
router.get('/:id', getWaitlistEntry);
router.post('/', validateWaitlistEntry, createWaitlistEntry);

module.exports = router;
