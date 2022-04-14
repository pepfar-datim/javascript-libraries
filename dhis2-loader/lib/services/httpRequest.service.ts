import {ApiResponse} from "../types/apiResponse.type";
import {error} from "./print";
import fetch from 'node-fetch';
// let fetch = require('node-fetch')

async function handleErrors(apiResponse:any){
    if (apiResponse.ok) return apiResponse;
    let responseBody = '(empty)';
    try {
        let response = JSON.parse(await apiResponse.text() as any);
        if (response.message) responseBody = response.message;
    } catch(e){
        responseBody = 'ERROR: Cannot retrieve server response'
    }
    error(
        `Server request failed`,
        `Type:\t  ${apiResponse.url}`,
        `URL:\t  ${apiResponse.url}`,
        `Status:\t  ${apiResponse.status} (${apiResponse.statusText})`,
        `Response: ${responseBody}`
    );
}

export async function postJson(url:string,data:any,authorization:string):Promise<ApiResponse>{
    return fetch(url, {
        headers: {
            'Authorization': authorization,
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
    }).then(handleErrors);
}