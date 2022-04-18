import fetch, {Response} from 'node-fetch';
import {ApiResponse, ErrorType} from "../types/api.types";

function getErrorMessage(errorType:ErrorType, responseBody?:any):string{
    switch (errorType){
        case ErrorType.cannotParse:
            return `Unsupported server response. Cannot retrieve response body.`
        case ErrorType.invalidAuthentication:
            return `Invalid authentication method. Response status 200; redirected to login`
        case ErrorType.wrongPassword:
            return `Invalid user credentials. Response status 401 Not Authorized`
        case ErrorType.alreadyExists:
            return `Object already exists. Response status 200; Error message in response body: ${responseBody.typeReports[0].objectReports[0].errorReports[0].message}`
        case ErrorType.otherSpecified:
            return `Server response: ${responseBody.typeReports[0].objectReports[0].errorReports[0].message}`
        case ErrorType.otherUnspecified:
            return `Server responded with status 200 but error in response body. Cannot retrieve error message.`
    }
}

class FailService {
    apiResponse:ApiResponse;
    responseBody:any;
    constructor(apiResponse:ApiResponse) {
        this.apiResponse = apiResponse;
    }
    fail(errorType:ErrorType):ApiResponse{
        this.apiResponse.errorType = errorType;
        this.apiResponse.errorMessage = getErrorMessage(errorType, this.responseBody)
        return this.apiResponse;
    }
}

export async function inspectResponse(rawResponse:Response):Promise<ApiResponse>{
    let apiResponse:ApiResponse = {
        success: false,
        rawResponse
    }
    let failService = new FailService(apiResponse);
    if (!rawResponse.ok) return failService.fail(ErrorType.wrongPassword);
    if (rawResponse.redirected&&rawResponse.url.includes('login')) return failService.fail(ErrorType.invalidAuthentication)
    try {
        let responseBody:any = JSON.parse(await rawResponse.text() as any);
        failService.responseBody = responseBody
        if (responseBody.status==='ERROR') try {
            if (responseBody.typeReports[0].objectReports[0].errorReports[0].message.includes('matching')) return failService.fail(ErrorType.alreadyExists)
            else return failService.fail(ErrorType.otherSpecified)
        } catch(e){
            return failService.fail(ErrorType.otherUnspecified)
        }
    } catch (e){
        return failService.fail(ErrorType.cannotParse);
    }
    apiResponse.success = true;
    return apiResponse;
}



export async function sendJson(method:string, url:string, data:any, authorization:string):Promise<ApiResponse>{
    return fetch(url, {
        headers: {
            'Authorization': authorization,
            'Content-type': 'application/json'
        },
        method: method,
        body: JSON.stringify(data)
    })
   .then(inspectResponse)
}