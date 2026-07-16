const store = require('../data/waitlist.store');
const { sanitizeWaitlistInput } = require('../utils/sanitize');

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

function createWaitlistEntry(req, res) {
  const cleanData = sanitizeWaitlistInput(req.body);
  const newEntry = store.create(cleanData);

  console.log('[Analytics] User interacted with Game Waitlist CRUD API with Route Parameters');

  res.status(201).json({
    success: true,
    data: newEntry,
    error: null
  });
}

function updateWaitlistEntry(req, res) {
  const id = parseInt(req.params.id, 10);

  if (Number.isNaN(id)) {
    return res.status(400).json({
      success: false,
      data: null,
      error: 'Invalid id parameter'
    });
  }

  const existing = store.getById(id);

  if (!existing) {
    return res.status(404).json({
      success: false,
      data: null,
      error: `No waitlist entry found with id ${id}`
    });
  }

  const cleanData = sanitizeWaitlistInput(req.body);
  const updatedEntry = store.update(id, cleanData);

  console.log('[Analytics] User interacted with Game Waitlist CRUD API with Route Parameters');

  res.status(200).json({
    success: true,
    data: updatedEntry,
    error: null
  });
}

function deleteWaitlistEntry(req, res) {
  const id = parseInt(req.params.id, 10);

  if (Number.isNaN(id)) {
    return res.status(400).json({
      success: false,
      data: null,
      error: 'Invalid id parameter'
    });
  }

  const existing = store.getById(id);

  if (!existing) {
    return res.status(404).json({
      success: false,
      data: null,
      error: `No waitlist entry found with id ${id}`
    });
  }

  store.remove(id);

  console.log('[Analytics] User interacted with Game Waitlist CRUD API with Route Parameters');

  res.status(200).json({
    success: true,
    data: { id },
    error: null,
    message: 'Entry removed successfully'
  });
}

module.exports = {
  listWaitlist,
  getWaitlistEntry,
  createWaitlistEntry,
  updateWaitlistEntry,
  deleteWaitlistEntry
};