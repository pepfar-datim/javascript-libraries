import {ServerConfig} from "../../../types/server.type";
import {JsonObject} from "../../shared/types/shared.types";
import fetch from 'node-fetch';
import {inspectResponse} from "../../../toImport/inspectResponse.service";
import {HttpMethod} from "../types/http.types";

export function postJson(endpoint:string,  data:JsonObject, serverConfig:ServerConfig):Promise<any>{
    return sendJson(HttpMethod.POST, endpoint, data, serverConfig);
}

export function putJson(endpoint:string,  data:JsonObject, serverConfig:ServerConfig):Promise<any>{
    return sendJson(HttpMethod.PUT, endpoint, data, serverConfig);
}

export function patchJson(endpoint:string,  data:JsonObject, serverConfig:ServerConfig):Promise<any>{
    return sendJson(HttpMethod.PATCH, endpoint, data, serverConfig);
}

function sendJson(method:HttpMethod, endpoint:string, data:JsonObject, {serverUrl,authorization}:ServerConfig):Promise<any>{
    return fetch(`${serverUrl}api${endpoint}`, {
        headers: {
            'Authorization': authorization,
            'Content-type': 'application/json'
        },
        method: method,
        body: JSON.stringify(data)
    }).then(inspectResponse)
}