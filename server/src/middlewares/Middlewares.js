import dotenv from 'dotenv';

const notFound = (request, response, next) => {
    const error = new Error('Invalid URL - NOT FOUND' + request.originalUrl)
    response.status(404)
    next(error)
}

const errorHandler = (error, request, response, next) => {
    const statuscode = response.statusCode >= 200 && response.statusCode <= 300 ? 500 : response.statusCode
    response.status(statuscode)
    response.json({
        statuscode: statuscode,
        message: error.message,
        stackTrace: ENVIRONMENT === 'PRODUCTION' ? null : error.stack
    })
}

export default {
    notFound,
    errorHandler
}