import {ServerConfig} from "../../../types/server.type";
import fetch from "node-fetch";
import {inspectResponse} from "../../../toImport/inspectResponse.service";

export function postEmpty(endpoint:string, {serverUrl, authorization}:ServerConfig){
    return fetch(`${serverUrl}api${endpoint}`, {
        headers: {
            'Authorization': authorization,
        },
        method: 'POST',
    }).then(inspectResponse)
}