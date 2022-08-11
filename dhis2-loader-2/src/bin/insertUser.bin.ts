import {Dhis2User} from "../types/user.type";
import {ServerConfig} from "../types/server.type";
import {postJson, putJson} from "../modules/http/services/sendJson.service";

export async function insertUser(user:Dhis2User, server:ServerConfig):Promise<any>{
    try {
        await postJson('/users', user, server)
    } catch(e){
        console.log(e)
        return postJson('/users', user, server)
    }
}