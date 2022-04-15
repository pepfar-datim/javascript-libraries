import {error} from "./print";
import fetch, {Response} from 'node-fetch';

export async function handleErrors(apiResponse:Response){
    if (apiResponse.ok && !apiResponse.redirected) return apiResponse;
    let responseBody = '(empty)';
    try {
        let response = JSON.parse(await apiResponse.text() as any);
        if (response.message) responseBody = response.message;
    } catch(e){
        responseBody = 'ERROR: Cannot retrieve server response'
    }
    if (apiResponse.redirected&&apiResponse.url.includes('login')) {
        error(`ERROR: Login failed`);
        return apiResponse;
    }
    error(
        `Server request failed`,
        `Type:\t  ${apiResponse.url}`,
        `URL:\t  ${apiResponse.url}`,
        `Status:\t  ${apiResponse.status} (${apiResponse.statusText})`,
        `Response: ${responseBody}`
    );
    return apiResponse;
}

export async function postJson(url:string,data:any,authorization:string):Promise<Response>{
    return fetch(url, {
        headers: {
            'Authorization': authorization,
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
    }).then(handleErrors);
}