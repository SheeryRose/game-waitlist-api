const express = require('express');
const {
  listWaitlist,
  getWaitlistEntry,
  createWaitlistEntry,
  updateWaitlistEntry,
  deleteWaitlistEntry
} = require('../controllers/waitlist.controller');
const { validateWaitlistEntry } = require('../middleware/validate');

const router = express.Router();

router.get('/', listWaitlist);
router.get('/:id', getWaitlistEntry);
router.post('/', validateWaitlistEntry, createWaitlistEntry);
router.put('/:id', validateWaitlistEntry, updateWaitlistEntry);
router.delete('/:id', deleteWaitlistEntry);

module.exports = router;