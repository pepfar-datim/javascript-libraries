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
//
// class FailService {
//     apiResponse:ApiResponse;
//     responseBody:any;
//     constructor(apiResponse:ApiResponse) {
//         this.apiResponse = apiResponse;
//     }
//     fail(errorType:ErrorType):ApiResponse{
//         this.apiResponse.success = false;
//         this.apiResponse.errorType = errorType;
//         this.apiResponse.errorMessage = getErrorMessage(errorType, this.apiResponse)
//         return this.apiResponse;
//     }
//     success():ApiResponse{
//         this.apiResponse.success = true;
//         return this.apiResponse;
//     }
// }
//
// export async function inspectResponse(rawResponse:Response|any):Promise<ApiResponse>{
//     let apiResponse:ApiResponse = {
//         success: false,
//         rawResponse
//     }
//     let failService = new FailService(apiResponse);
//     if (!rawResponse.ok) return failService.fail(ErrorType.httpError);
//     if (rawResponse.redirected&&rawResponse.url.includes('login')) return failService.fail(ErrorType.silentRedirect)
//     if (rawResponse.status===204&&!rawResponse.redirected) return failService.success();
//     try {
//         let responseBody:any = JSON.parse(await rawResponse.text() as any);
//         failService.apiResponse.responseBody = responseBody;
//         if (responseBody.status==='ERROR') try {
//             if (responseBody.typeReports[0].objectReports[0].errorReports[0].message.includes('matching')) return failService.fail(ErrorType.alreadyExists)
//             else return failService.fail(ErrorType.dhis2ErrorSpecified)
//         } catch(e){
//             return failService.fail(ErrorType.dhis2ErrorUnspecified)
//         }
//         if (responseBody.status==='WARNING')try {
//             if (responseBody.importCount.ignored>0) return failService.fail(ErrorType.ignored)
//             return failService.fail(ErrorType.dhis2ErrorSpecified)
//         } catch(e){
//             return failService.fail(ErrorType.dhis2ErrorSpecified)
//         }
//     } catch (e){
//         return failService.success();
//     }
//     return failService.success();
// }
//
// export function throwException(apiResponse:ApiResponse){
//     if (!apiResponse.success) throw new Error(apiResponse.errorMessage);
//     else return apiResponse;
// }

export async function inspectResponse(rawResponse:any):Promise<ApiResponse>{
    if (!rawResponse.ok) throw Error(getErrorMessage(ErrorType.httpError));
    if (rawResponse.redirected&&rawResponse.url.includes('login')) throw Error(getErrorMessage(ErrorType.silentRedirect))
    if (rawResponse.status===204&&!rawResponse.redirected) return Promise.resolve({success:true, rawResponse});
    let responseBody:any;
    try {
        responseBody = JSON.parse(await rawResponse.text() as any);
    } catch (e){
        return {success:true, rawResponse};
    }
    if (responseBody.status==='ERROR') throw Error(getErrorMessage(ErrorType.alreadyExists))
    if (responseBody.status==='WARNING') throw Error(getErrorMessage(ErrorType.ignored))
    return {success:true, responseBody, rawResponse};
}