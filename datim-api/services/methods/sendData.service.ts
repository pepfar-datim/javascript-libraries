import {ApiResponse, ContentType, HttpMethod} from "../../types/http.types";
import {getFullUrl} from "../config.service";
import {inspectResponse} from "./inspectResponse.service";

export function postJson(url:string,body:any){
    return sendData(HttpMethod.post, url,ContentType.json, body);
}

export function putJson(url:string,body:any){
    return sendData(HttpMethod.put, url,ContentType.json, body);
}

export function postText(url:string,body:any){
    return sendData(HttpMethod.post, url,ContentType.text, body);
}

export function postEmpty(url:string){
    return sendData(HttpMethod.post, url,null, ContentType.text);
}

function sendData(method:HttpMethod,endpoint:string,contentType:ContentType,payload:any):Promise<ApiResponse>{
    return fetch(getFullUrl(endpoint),{
        method,
        credentials:'include',
        headers:{
            'Content-Type':contentType
        },
        body: contentType===ContentType.json?JSON.stringify(payload):payload
    }).then(inspectResponse).then((apiResponse:ApiResponse)=>{
        if (!apiResponse.success) throw new Error(apiResponse.errorMessage);
        else return apiResponse;
    })
}