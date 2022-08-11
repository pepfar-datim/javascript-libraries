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

export function getErrorMessage(errorType:ErrorType, rawResponse?:any):string{
    if (rawResponse) console.error("ERROR",rawResponse.url)
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
    if (!rawResponse.ok) {
        try {
            console.log(await rawResponse.text())
        } catch(e){

        }
        throw new Error(getErrorMessage(ErrorType.httpError, rawResponse));
    }
    if (rawResponse.redirected&&rawResponse.url.includes('login')) throw new Error(getErrorMessage(ErrorType.silentRedirect,rawResponse))
    if (rawResponse.status===204&&!rawResponse.redirected) return Promise.resolve({success:true, rawResponse});
    let responseBody:any;
    try {
        responseBody = JSON.parse(await rawResponse.text() as any);
    } catch (e){
        return {success:true, rawResponse};
    }
    if (responseBody.status==='ERROR') throw new Error(getErrorMessage(ErrorType.alreadyExists))
    if (responseBody.status==='WARNING') throw new Error(getErrorMessage(ErrorType.ignored))
    return {success:true, responseBody, rawResponse};
}