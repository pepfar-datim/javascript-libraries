import {Response} from 'node-fetch';

export enum ErrorType {
    cannotParse,
    silentRedirect,
    httpError,
    alreadyExists,
    dhis2ErrorSpecified,
    dhis2ErrorUnspecified
}

export type ApiResponse = {
    success:boolean,
    errorType?:ErrorType,
    errorMessage?:string,
    rawResponse:Response,
    responseBody?: any
}

export enum HttpMethod {
    post='POST',
    put='PUT'
}