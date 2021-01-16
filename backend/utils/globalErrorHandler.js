const ApiError = require("../utils/ApiError");

const globalErrorHandler = routeHandler => async (req, res, next) => {
    try {
        await routeHandler(req, res, next);
    } catch(err) {
        next(new ApiError(err.message, 500))
    }
}

module.exports = globalErrorHandler; 