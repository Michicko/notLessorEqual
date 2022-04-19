const express = require('express');
const app = express();
const morgan = require('morgan');

const globalErrorHandler = require('./controller/errorControllers');

// middlewares
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true }));

// log http request in production
if (process.env.NODE_ENV === 'production') {
  app.use(morgan('dev'));
}

// Routers
const bagpackRouter = require('./routes/bagpackRoutes');

// routes
app.use('/api/v1/bagpacks', bagpackRouter);

app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl} on this server`
  });
});

app.use(globalErrorHandler);

module.exports = app;