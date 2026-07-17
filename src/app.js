const express = require('express');
const waitlistRoutes = require('./routes/waitlist.routes');
const { notFoundHandler, globalErrorHandler } = require('./middleware/errorHandler');

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    data: { status: 'ok' },
    error: null
  });
});

app.use('/waitlist', waitlistRoutes);

app.use(notFoundHandler);
app.use(globalErrorHandler);

module.exports = app;