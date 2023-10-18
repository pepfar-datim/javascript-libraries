import {getJson} from "../modules/http/services/getJson.service";
import {JsonObject} from "../modules/shared/types/shared.types";
import {ServerConfig} from "../types/server.type";
import assert from "assert";
import {putJson} from "../modules/http/services/sendJson.service";

export async function editDataStore(location:string, transform:(value:JsonObject)=>JsonObject, serverConfig:ServerConfig):Promise<any>{
    let dataStore:JsonObject = await getJson(`/dataStore/${location}`, serverConfig);
    assert(JSON.stringify(dataStore).length>5);
    return putJson(`/dataStore/${location}`, transform(dataStore), serverConfig);
}