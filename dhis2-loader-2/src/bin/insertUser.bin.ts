import {Dhis2User} from "../types/user.type";
import {ServerConfig} from "../types/server.type";
import {postJson, putJson} from "../modules/http/services/sendJson.service";

export async function insertUser(user:Dhis2User, password:string, server:ServerConfig):Promise<any>{
    let username:string = user.userCredentials.username;
    user.userCredentials.password = password;
    try {
        await postJson('/users', user, server)
        console.log(`Inserted user`,username)
    } catch(e){
        await putJson(`/users/${user.id}`, user, server)
        console.log(`Updated user`,username)
    }
}