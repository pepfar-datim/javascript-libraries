import {JsonObject} from "../../shared/types/shared.types";
import {ServerConfig} from "../../../types/server.type";
import fetch from "node-fetch";
import {inspectResponse} from "../../../toImport/inspectResponse.service";

export function getJson(endpoint:string, {serverUrl,authorization}:ServerConfig):Promise<any>{
    return fetch(`${serverUrl}api${endpoint}`, {
        headers: {
            'Authorization': authorization,
            'Accept': 'application/json'
        },
        method: 'GET',
    }).then(r=>r.json())
}