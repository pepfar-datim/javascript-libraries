import {error} from "./print";
import fetch, {Response} from 'node-fetch';

const fail = (msg:string)=>{
    error(msg);
    throw Error(msg);
}

export async function handleErrors(apiResponse:Response):Promise<Response>{
    let responseBody:any;
    try {
         responseBody = JSON.parse(await apiResponse.text() as any);
    } catch (e){
        return fail(`Cannot parse response body ${e}`)
    }
    if (apiResponse.redirected&&apiResponse.url.includes('login')) return fail(`Authentication error. Redirected to login`)
    if (!apiResponse.ok) return fail(apiResponse.statusText);
    if (responseBody.status==='ERROR') try {
        return fail(responseBody.typeReports[0].objectReports[0].errorReports[0].message)
    } catch(e){
        return fail(`Server response contains an error`)
    }
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