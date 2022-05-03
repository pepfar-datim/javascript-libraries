import fetch, {Response} from 'node-fetch';
import {inspectResponse,ApiResponse} from "@pepfar-react-lib/datim-api";

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