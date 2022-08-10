export type ApiResponse = {
    success:boolean,
    errorType?:ErrorType,
    errorMessage?:string,
    rawResponse:Response,
    responseBody?: any
}
export enum ErrorType {
    silentRedirect,
    httpError,
    alreadyExists,
    ignored
}

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