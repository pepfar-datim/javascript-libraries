import {ApiResponse} from "../../index";
import {ErrorType} from "../../types/http.types";

export function getErrorMessage(errorType:ErrorType):string{
    switch (errorType){
        case ErrorType.ignored:
            return 'Ignored'
        case ErrorType.silentRedirect:
            return `Redirected to login`
        case ErrorType.httpError:
            return `HTTP error`
        case ErrorType.alreadyExists:
            return `Object already exists`
    }
}

function fail(errorType:ErrorType, serverResponse:any):Error{
    return Error(getErrorMessage(errorType),{cause:serverResponse});
}

export async function inspectResponse(rawResponse:any):Promise<ApiResponse>{
    if (!rawResponse.ok) throw fail(ErrorType.httpError,rawResponse);
    if (rawResponse.redirected&&rawResponse.url.includes('login')) throw fail(ErrorType.silentRedirect,rawResponse)
    if (rawResponse.status===204&&!rawResponse.redirected) return Promise.resolve({success:true, rawResponse});
    let responseBody:any;
    try {
        responseBody = JSON.parse(await rawResponse.text() as any);
    } catch (e){
        return {success:true, rawResponse};
    }
    if (responseBody.status==='ERROR') throw fail(ErrorType.alreadyExists,responseBody)
    if (responseBody.status==='WARNING') throw fail(ErrorType.ignored,responseBody)
    return {success:true, responseBody, rawResponse};
}