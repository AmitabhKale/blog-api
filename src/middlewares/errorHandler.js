const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  if (err) {
    res.status(statusCode).json({
      error: err.message,
    });
  } else {
    next();
  }
};

module.exports = errorHandler;
