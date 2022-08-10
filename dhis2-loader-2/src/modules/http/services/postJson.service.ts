import {ServerConfig} from "../../../types/server.type";
import {Dhis2User} from "../../../types/user.type";
import {JsonObject} from "../types/http.types";
import fetch from 'node-fetch';
import {inspectResponse} from "../../../toImport/inspectResponse.service";

export function postJson(endpoint:string, data:JsonObject, {serverUrl,authorization}:ServerConfig){
    return fetch(`${serverUrl}api${endpoint}`, {
        headers: {
            'Authorization': authorization,
            'Content-type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(data)
    }).then(inspectResponse)
}