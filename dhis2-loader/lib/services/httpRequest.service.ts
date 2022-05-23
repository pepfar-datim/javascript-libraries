import fetch, {Response} from 'node-fetch';
import {ApiResponse} from "@pepfar-react-lib/datim-api";
import {inspectResponse} from "@pepfar-react-lib/datim-api/jsbuild";

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