import {Response} from 'node-fetch';

export enum ErrorType {
    cannotParse,
    invalidAuthentication,
    wrongPassword,
    alreadyExists,
    otherSpecified,
    otherUnspecified
}

export type ApiResponse = {
    success:boolean,
    errorType?:ErrorType,
    errorMessage?:string,
    rawResponse:Response
}