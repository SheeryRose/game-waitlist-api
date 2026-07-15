const store = require('../data/waitlist.store');

function listWaitlist(req, res) {
  const entries = store.getAll();

  if (entries.length === 0) {
    return res.status(200).json({
      success: true,
      data: [],
      error: null,
      message: 'No data found'
    });
  }

  res.status(200).json({
    success: true,
    data: entries,
    error: null
  });
}

function getWaitlistEntry(req, res) {
  const id = parseInt(req.params.id, 10);

  if (Number.isNaN(id)) {
    return res.status(400).json({
      success: false,
      data: null,
      error: 'Invalid id parameter'
    });
  }

  const entry = store.getById(id);

  if (!entry) {
    return res.status(404).json({
      success: false,
      data: null,
      error: `No waitlist entry found with id ${id}`
    });
  }

  res.status(200).json({
    success: true,
    data: entry,
    error: null
  });
}

module.exports = {
  listWaitlist,
  getWaitlistEntry
};