export declare enum HttpMethod {
    post = "POST",
    get = "GET",
    put = "PUT",
    patch = "PATCH"
}
export declare enum ContentType {
    json = "application/json",
    text = "text/plain"
}
export declare enum ErrorType {
    cannotParse = 0,
    silentRedirect = 1,
    httpError = 2,
    alreadyExists = 3,
    dhis2ErrorSpecified = 4,
    dhis2ErrorUnspecified = 5
}
export declare type ApiResponse = {
    success: boolean;
    errorType?: ErrorType;
    errorMessage?: string;
    rawResponse: Response;
    responseBody?: any;
};
