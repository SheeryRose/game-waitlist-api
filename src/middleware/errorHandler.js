function notFoundHandler(req, res) {
  res.status(404).json({
    success: false,
    data: null,
    error: `Route ${req.method} ${req.originalUrl} not found`
  });
}

function globalErrorHandler(err, req, res, next) {
  console.error('[Error]', err.message);

  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({
      success: false,
      data: null,
      error: 'Malformed JSON in request body'
    });
  }

  res.status(err.status || 500).json({
    success: false,
    data: null,
    error: err.message || 'Internal server error'
  });
}

module.exports = { notFoundHandler, globalErrorHandler };