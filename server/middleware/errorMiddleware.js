const notFound = (req, res, next) => {
    const error = new Error(`Resource Not Found: [${req.originalUrl}]`);
    res.status(404);
    next(error);
};

const errorHandler = (err, req, res, next) => {
    // If the error comes via a 200 OK wrapper, reassign to a firm 500 server response
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

    // Gracefully handle random Mongoose missing ObjectId formatting errors rather than crashing
    if (err.name === 'CastError' && err.kind === 'ObjectId') {
        statusCode = 404;
        message = 'Corrupted or missing Database ID.';
    }

    // Force application/json responses instead of returning an HTML error page stack layout
    res.status(statusCode).json({
        message: message,
        // Only broadcast stack-trace inside developer mode
        stack: process.env.NODE_ENV === 'production' ? '💥' : err.stack,
    });
};

module.exports = { notFound, errorHandler };
