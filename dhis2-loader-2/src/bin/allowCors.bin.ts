import {ServerConfig} from "../types/server.type";
import {postJson} from "../modules/http/services/sendJson.service";

let corsToEnable = ['http://localhost','http://localhost:3000','http://localhost:3001'];

export function allowCors(server:ServerConfig):Promise<any>{
    return postJson('/configuration/corsWhitelist',corsToEnable,server);
}