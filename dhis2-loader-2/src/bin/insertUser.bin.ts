import {Dhis2User} from "../types/user.type";
import {ServerConfig} from "../types/server.type";
import {postJson} from "../modules/http/services/postJson.service";

export function insertUser(user:Dhis2User, server:ServerConfig):Promise<any>{
    return postJson('/users',user,server);
}