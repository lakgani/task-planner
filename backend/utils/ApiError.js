class ApiError extends Error {
    constructor(message, httpStatus) {
        super(message);
        this.httpStatus = httpStatus;
    }
};

module.exports = ApiError;