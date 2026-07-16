function sanitizeString(value) {
  if (typeof value !== 'string') return value;
  return value
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .trim();
}

function sanitizeWaitlistInput(data) {
  const sanitized = { ...data };
  if (sanitized.name) sanitized.name = sanitizeString(sanitized.name);
  if (sanitized.gameTitle) sanitized.gameTitle = sanitizeString(sanitized.gameTitle);
  if (sanitized.contactNumber) sanitized.contactNumber = sanitizeString(sanitized.contactNumber);
  return sanitized;
}

module.exports = { sanitizeString, sanitizeWaitlistInput };