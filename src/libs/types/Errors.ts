export enum HttpCode {
    OK = 200,
    CREATED = 201,
    NOT_MODIFIED = 304,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEM = 403,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
}

export enum Message {
    SOMETHING_WENT_WRONG = "Something went wrong",
    NO_DATA_FOUND = "No data found",
    CREATED_FAILED = "Create failed",
    UPDATED_FAILED = "Updated failed",
}

class Errors extends Error {
    public code: HttpCode;
    public message: Message;

    constructor(statusCode: HttpCode, statusMessage: Message) {
        super();
        this.code = statusCode;
        this.message = statusMessage;
    }
}
export default Errors;