import fetch, {Response} from 'node-fetch';
import {ApiResponse, ErrorType} from "../types/api.types";
import {success} from "./print";
import {inspectResponse} from "./inspectResponse.service";

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