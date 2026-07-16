function validateWaitlistEntry(req, res, next) {
  const { name, gameTitle, partySize } = req.body;
  const errors = {};

  if (!name || typeof name !== 'string' || name.trim() === '') {
    errors.name = 'name is required and must be a non-empty string';
  }

  if (!gameTitle || typeof gameTitle !== 'string' || gameTitle.trim() === '') {
    errors.gameTitle = 'gameTitle is required and must be a non-empty string';
  }

  if (
    partySize === undefined ||
    typeof partySize !== 'number' ||
    !Number.isInteger(partySize) ||
    partySize <= 0
  ) {
    errors.partySize = 'partySize is required and must be a positive integer';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      data: null,
      error: 'Validation failed',
      fields: errors
    });
  }

  next();
}

module.exports = { validateWaitlistEntry };