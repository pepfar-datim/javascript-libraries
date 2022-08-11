import {Dhis2User} from "../types/user.type";
import {ServerConfig} from "../types/server.type";
import {postJson} from "../modules/http/services/sendJson.service";

export function insertUser(user:Dhis2User, server:ServerConfig):Promise<any>{
    return postJson('/users', user, server).catch(e=>console.log(e));
}